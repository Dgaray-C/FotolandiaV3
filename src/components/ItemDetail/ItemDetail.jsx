import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";


export default function ItemDetail({ id, name, category, price, description, stock, image, dimensions, weight, brand, discount}) {

    {/* const {addItem} = useCart() */}
    
    const AddProductCarrito = { id, name, price, stock };

    const originalPrice = price + (price * discount / 100);


    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 text-center">
            <img src={image} alt={name}className="img-fluid"/>
          </div>
  
          <div className="col-12 col-md-6">
            <p className="text-muted">Código del producto: {id}</p>
            <h5 className="text-uppercase text-secondary">{category}</h5>
            <h3 className="fw-bold text-dark">{name}</h3>

            <div>
                <p className="text-muted">{description}</p> 
                <p className="text-muted">Marca: {brand}</p>
                <p className="text-muted">Dimensiones: {dimensions}</p>
                <p className="text-muted">Peso: {weight}</p>
            </div>

            <div className="my-3">
                <span className="fw-bold fs-4 text-dark me-2">Precio: ${price}</span>
                <span className="badge bg-danger">-{discount}%</span> 
            </div>
            <p className="text-muted">
              Sin descuento: <span className="text-decoration-line-through">${originalPrice}</span>
            </p>
            
            <ItemCount stock={stock} producto={AddProductCarrito} />
            
          </div>
        </div>
      </div>
    );
  }