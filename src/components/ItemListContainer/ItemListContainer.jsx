import { useEffect, useState } from 'react';
import './ItemListContainer.css';
/*import { getProducts, getProductByCategory } from "../../async-mocks.js"; */
import { useParams, Link, useSearchParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList.jsx';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/index.js';


const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get("q")

    /*
    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : getProducts
        asyncFunction(categoryId)
            .then(data => setProducts(data))
    }, [categoryId])

    */

    useEffect(() => {
        let collectionRef;

        if (categoryId) {
            collectionRef = query(
                collection(db, "products"),
                where("category", "==", categoryId)
            );
        } else if (searchQuery) {
            collectionRef = query(
                collection(db, "products"), 
                where("name", ">=", searchQuery), 
                where("name", "<=", searchQuery + "\uf8ff")
                //Profe, no encontre la forma de realizar algo similar a un like en esta parte, 
                //pero si esta buscando la primera palabra con la que comienza el articulo (respetar mayusculas minisculas)
            )
        }else {
            collectionRef = collection(db, "products")
        }

        getDocs(collectionRef)
            .then((querySnapshot) => {
                const productos = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(productos)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [categoryId, searchQuery])


    const insertarTitulo = (searchQuery, categoryId) => {
        if (categoryId) {
            return categoryId.toUpperCase()
        }
        if (searchQuery) {
            return `Resultados para "${searchQuery}"`
        }
        return 'PRODUCTOS'
    }


 

    return (
        <div className="container mt-5">
            <h2 className='text-secondary text-center'>{insertarTitulo(searchQuery, categoryId)}</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
                <ItemList products={products} />
            </div>
        </div>
    );
}

export default ItemListContainer;