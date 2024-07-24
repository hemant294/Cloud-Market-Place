// import { useContext, useEffect } from "react";
// import noteContext from "../context/notes/noteContext";
import Container from 'react-bootstrap/Container';
import "./About.css";
import Cloud from "../images/cloud.avif";
const About = () => {

    return <>
        {/* <Container> */}
            <div className='conn'>
                <div className='container-about'>
                    <div className='imgs'>  
                        <img src={Cloud}/>
                    </div>
                    <div className='about-content'>
                <h1 className=""><strong>ABOUT US</strong></h1>
                        <p className="about-detials">
                            We help organizations to manage their cloud services by acting as an intermediary between cloud service providers and consumers. Customers can compare and select the best cloud services based on their specific needs and requirements.
                        </p>
                        <p className="about-detials">
                            Overall, we provide you with a flexible and cost-effective way to manage your cloud services. It will help to simplify the complexity of managing multiple cloud providers and ensures that you can take full advantage of the benefits of cloud computing.
                        </p>
                    </div>
                </div>
                <div className="address">
                    <div className="address-content">
                        <h3>Headquaters</h3>
                        <p>indore</p>
                    </div>
                    <div className="address-content">
                        <h3>E-Mail</h3>
                        <p>abcd@gmail.com</p>
                    </div>
                    <div className="address-content">
                        <h3>Phone</h3>
                        <p>+91-9876321233</p>
                    </div>
                </div>
            </div>
        {/* </Containe  r> */}
    </>
}
export default About;