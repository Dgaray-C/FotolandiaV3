import { useParams } from "react-router-dom"
import { useEffect, useState  } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/index.js";


export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {productId} = useParams()

    /*
    useEffect(()=>{
        getProductByID(productId)
            .then((resp) => {
                setProduct(resp)
            })
    },[productId])
*/

  useEffect(()=>{
    getDoc(doc(db, "products", productId))
      .then((querySnapshot)=>{
        const prod = {id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(prod)
      }).catch((err)=>{
        console.log(err)
      })
  },[])

  return (
    <div className="container mt-5">
       <h2 className="text-dark">Detalle del Producto</h2>
       <hr />
       <ItemDetail {...product}/>
    </div>





  )
}
