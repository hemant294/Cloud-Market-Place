import { NavLink } from "react-router-dom";
import "./Header.css";
import Nav from "./Nav";
const Header = () => {
    return <>
        <div className="header-container">
            <div className="flex-property-header">
                <NavLink to="/"><h1>Cloud Market Place</h1></NavLink>
                <Nav />
            </div>
        </div>
    </>
}
export default Header;