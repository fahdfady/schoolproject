import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="page-header">
            <nav className="navbar">
                <Link to="" className="logo">LOGO</Link>
                <ul className="links">
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/register">register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;