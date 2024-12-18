import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/category/drones">Drones</Link>
            <Link to="/category/camaras">Camaras</Link>
            <Link to="/category/lentes">Lentes</Link>
            <Link to="/category/iluminacion">Iluminacion</Link>
        </nav>
    )
}

export default Nav;