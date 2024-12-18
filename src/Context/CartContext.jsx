import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    
    const [cart, setCart] = useState([])
    

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }

    const addItem = (productToAdd) => { 

        if (!productToAdd || !productToAdd.id || !productToAdd.quantity || isNaN(productToAdd.quantity)) {
            console.error("No se agrego :", productToAdd)
            return
        }

        if (isInCart(productToAdd.id)) {
            console.log(`Producto ${productToAdd.id} ya esta. Se actualiza la cantidad:.`)
            setCart(cart.map(prod =>
                prod.id === productToAdd.id ? { ...prod, quantity: prod.quantity + productToAdd.quantity }: prod
            ))
        } else {
            console.log("Producto nuevo, se agrega al carrito:", productToAdd)
            setCart([...cart, productToAdd])
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
        console.log(` ${id} fue elimiado.`)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }

    const getTotalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const searchItems = (term) => {
        return cart.filter(prod => prod.name.toLowerCase().includes(term.toLowerCase()));
    }

    const totalQuantity = getTotalQuantity()

    console.log(getTotalQuantity())

    const obj = {
        cart,
        isInCart,
        addItem,
        removeItem,
        clearCart,
        getTotal,
        searchItems,
        totalQuantity
    }
    
    
    
    return(
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}