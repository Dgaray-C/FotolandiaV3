import "./NavBar.css";
import { Link } from 'react-router-dom'
import CardWidget from "../CardWidget/CardWidget";


const NavBar = () => {
    return (
        <header className="navbar-header">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-brand titulo">Fotolandia</Link>
                    <div className="navbar-links">
                        <ul className="navbar-list">
                            <li className="navbar-item fw-bold hov"><Link to="/" className="text-dark text-decoration-none">Productos</Link></li>
                            <li className="navbar-item fw-bold hov"><Link to="/category/drones" className="text-dark text-decoration-none">Drones</Link></li>
                            <li className="navbar-item fw-bold hov"><Link to="/category/camaras" className="text-dark text-decoration-none">Camaras</Link></li>
                            <li className="navbar-item fw-bold hov"><Link to="/category/lentes" className="text-dark text-decoration-none">Lentes</Link></li>
                            <li className="navbar-item fw-bold hov"><Link to="/category/iluminacion" className="text-dark text-decoration-none">Iluminacion</Link></li>
                        </ul>
                        <div className="CardWidget-item">
                            <form className="form-inline d-flex" action="/search" method="GET">
                                <input name="q" className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" required
                                />
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                            <CardWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}


export default NavBar;