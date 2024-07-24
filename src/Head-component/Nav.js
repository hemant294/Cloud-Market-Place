import "./Nav.css";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Nav = () => {

    const location = useLocation();
    // console.log(location);
    useEffect(() => {
    }, [location])
    return <>
        <div className="nav-head">
            <ul className="header-data">
                <li className="search-res">
                    <NavLink to="/"  className={`${location.pathname === "/"} ? "active": "" 
                     `}><a>Home</a></NavLink>
                </li>
                <li>
                    <NavLink to="about" className={`${location.pathname === "/about"} ? "active": "" `}><a>About</a></NavLink>
                </li>
                <li>
                    <NavLink to="contect" className={`${location.pathname === "/contect"} ? "active": ""`}><a>Contect</a></NavLink>
                </li>
                <li>
                    <NavLink to="docs"  className={`${location.pathname === "/contect"} ? "active": ""`}><a>Docs</a></NavLink>
                </li>
                <li>
                    <NavLink to="/service" className={`${location.pathname === "/service"} ? "active": ""`}><a>Service  </a></NavLink>
                </li>
            </ul>
        </div>
    </>
}
export default Nav;