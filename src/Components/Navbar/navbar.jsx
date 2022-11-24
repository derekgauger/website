import { NavLink } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand bg-dark">
                <NavLink to="/" className="navbar-brand">
                    <span>D</span>erek <span>G</span>auger
                </NavLink>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/documents" className="nav-link">Documents</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar