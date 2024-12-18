import React, { useContext, useState } from 'react';
/*import { CartContext } from '../../Context/CartContext';*/
import { db } from '../../services/firebase/index.js';
import { collection, addDoc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore';
import { useCart } from '../../hooks/useCart.js';

function Checkout() {

    /*const { cart, getTotal, clearCart } = useContext(CartContext);*/

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('debito')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'firstName') {setFirstName(value)}
        if (name === 'lastName') {setLastName(value)}
        if (name === 'phone') {setPhone(value)}
        if (name === 'address') {setAddress(value)}
        if (name === 'paymentMethod') {setPaymentMethod(value)}
    };


    const [orderCreated, setOrderCreated] = useState(false)

    const {cart, totalQuantity, getTotal, clearCart} = useCart();

    const total = getTotal()
    const outOfStock = [];

    const createOrder = async (e) => {
        e.preventDefault();
        const objOrder = {
            comprador:{
                nombre: firstName,
                apellido: lastName,
                telefono: phone,
                direccion: address,
            },
            metodoPago: paymentMethod,
            artitulos: cart,
            totalQuantity,
            total,
            date: new Date()
        }

        const ids = cart.map((item)=>item.id)
        const productRef = collection(db, "products")

        const productsAddedFromFirestore = await getDocs(
            query(productRef, where(documentId(), "in", ids))
        )

        const { docs } = productsAddedFromFirestore
        const batch = writeBatch(db)

        docs.forEach((doc)=>{
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find((prod)=> prod.id === doc.id)
            const prodQuantity = productAddedToCart.quantity
            if(stockDb >= prodQuantity){
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            }else{
                outOfStock.push({id: doc.id, ...dataDoc})
            }


        })

        if(outOfStock.length === 0){
            await batch.commit()
            const orderRef = collection(db, "pedidos")
            const orderAdded = await addDoc(orderRef, objOrder)
            console.log(`el id del order es ${orderAdded}`)
            clearCart()
            setOrderCreated(true)
        }else{
            console.log(`Hay productos sin stock`)
        }
    }

    if(orderCreated){
        return <h1>Compra realizada.</h1>
    }


    return (
        <div className="container mt-5">
            <h2 className="text-center text-primary mb-4">Finalizar Compra</h2>
            <div className="row">
                <div className="col-md-6">
                    <h4 className="mb-3">Lista de Productos</h4>
                    <ul className="list-group mb-4">
                        {cart.map(product => (
                            <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-1">{product.name}</h5>
                                    <p className="mb-1">Cantidad: <strong>{product.quantity}</strong></p>
                                    <p className="mb-1">Subtotal: <strong>${product.price * product.quantity}</strong></p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h4>Total: ${getTotal()}</h4>
                </div>
                <div className="col-md-6 text-dark">
                    <h4 className="mb-3">Datos de Facturación</h4>
                    <form onSubmit={createOrder}>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" name="firstName" value={firstName} onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Apellido</label>
                            <input type="text" className="form-control" name="lastName" value={lastName} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono</label>
                            <input type="text" className="form-control" name="phone" value={phone} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Dirección</label>
                            <input type="text" className="form-control" name="address" value={address} onChange={handleInputChange}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Método de Pago</label>
                            <select className="form-select" name="paymentMethod" onChange={handleInputChange}>
                                <option value="debito">Débito</option>
                                <option value="credito">Crédito</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success w-100">Finalizar Compra</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Checkout;