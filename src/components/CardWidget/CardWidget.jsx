import React from 'react'
import './CardWidget.css';
import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';

function CardWidget() {

  const { totalQuantity } = useCart();

  return (
    <>
      <div className='nav-link d-flex align-items-center'>
        <Link to="/cart" className="toolpit-llamativo">
          <img className='img-carrito toolpit-llamativo' src="/assets/carrito.svg" alt="Carrito" />
          <span className="tooltip-texto">Click para ver carrito</span>
      </Link>
      
      <span className="badge text-bg-danger fs-5">{totalQuantity}</span>
    </div >
    </>

  )
}

export default CardWidget