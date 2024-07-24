import { NavLink } from "react-router-dom";
// import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import Container from 'react-bootstrap/Container';
import "./Head.css";
const Home = () => {

    // const {state} = useContext(noteContext);
    // const {name} = state;


    return (
        <>
            <Container>
                <div className="home-page-header">
                    <h1 className="home-h1-text">Let's Grow your Business</h1>
                    <p className="home-p-content">The Platform that suggest you best cloud service provider on the basis of your business requirements so you can choose best CSP provider.</p>
                    <div className="home-button-head">
                        <button className="bg-dark ">
                            <NavLink to="dashboard" className="text-light text-decoration-none">Add Requirement</NavLink>
                        </button>
                        <button className="bg-dark ">
                            <NavLink to="docs" className="text-light text-decoration-none">Documantation</NavLink>
                        </button>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Home;