import { NavLink } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand navbar-custom ">
                <NavLink to="/" className="navbar-brand">
                    <span>D</span>erek <span>G</span>auger
                </NavLink>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link"><span>H</span>ome</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link"><span>P</span>rojects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/documents" className="nav-link"><span>D</span>ocuments</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link"><span>C</span>ontact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar