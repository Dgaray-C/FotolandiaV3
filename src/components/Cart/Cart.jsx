import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

function Cart() {
    const { cart, removeItem, getTotal } = useContext(CartContext)

    if (cart.length === 0) {
        
        return <>
                <div className="alert alert-warning text-center" role="alert">El carrito está vacío</div>
                </>
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center text-primary mb-4">Carro de Compras</h2>
            <ul className="list-group mb-4">
                {cart.map(product => (
                    <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-1">{product.name}</h5>
                            <p className="mb-1">Cantidad: <strong>{product.quantity}</strong></p>
                            <p className="mb-1">Precio Unitario: <strong>${product.price}</strong></p>
                            <p className="mb-1">Subtotal: <strong>${product.price * product.quantity}</strong></p>
                        </div>
                        <button 
                            className="btn btn-danger btn-sm" 
                            onClick={() => removeItem(product.id)}
                        >Eliminar Producto</button>
                    </li>
                ))}
            </ul>
            <div className="d-flex justify-content-between align-items-center">
                <h3>Total: ${getTotal()}</h3>
                <Link to='/checkout' className="btn btn-success">Comprar</Link>
            </div>
        </div>
    )
}

export default Cart;
