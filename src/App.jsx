import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Checkout from './components/Checkout/Checkout.jsx'
import Cart from './components/Cart/Cart.jsx'

import NavBar from './components/NavBar/NavBar.jsx'

import { CartProvider } from './Context/CartContext.jsx'




function App() {

  return (
    <Router>

      <CartProvider>

        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/product/:productId' element={<ItemDetailContainer/>} />
          <Route path="/search" element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='*' element={<h2>404 Not Found</h2>} />
        </Routes>
      </CartProvider>
    </Router>

  )
}

export default App
