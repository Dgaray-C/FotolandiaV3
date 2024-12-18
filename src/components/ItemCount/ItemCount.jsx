import { useState } from 'react'
import { useCart } from '../../hooks/useCart'

export default function ItemCount({initialValue=1, stock, producto}) {
    


    const [cantidad, setCantidad] = useState(initialValue)
    const {addItem} = useCart()

    const restar = () => {
        if(cantidad>1){
            setCantidad(cantidad => cantidad - 1)
        }
    }

    const sumar = () => {
        if(cantidad<stock){
            setCantidad(cantidad => cantidad + 1)
        }
        
    }

    return (
        <>
            <div className="d-flex align-items-center mb-4">
                <div>
                    <button className="btn btn-outline-secondary me-2" onClick={restar}>-</button>
                    <span>{cantidad} </span>
                    <button className="btn btn-outline-secondary ms-2" onClick={sumar}>+</button>
                </div>
                
            </div>
            <button className="btn btn-dark w-100" onClick={() => addItem({ ...producto, quantity: cantidad })}>Agregar al Carro</button>
        </>
        
    )
}