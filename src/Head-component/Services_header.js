import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Service.css";
const Services_Header = () => {
    const navigate = useNavigate();
    const listItem = [
        {
            id: "1",
            name: "Aws",
            key: "aws"
        },
        {
            id: "2",
            name: "Azure",
            key: "azure"
        },
        {
            id: "3",
            name: "GCP",
            key: "gcp"
        },
        {
            id: "4",
            name: "IBM Cloud",
            key: "ibm"
        },
        {
            id: "5",
            name: "Heroku",
            key: "heroku"
        },
        {
            id: "6",
            name: "Alibaba Cloud",
            key: "alibaba"
        },
        {
            id: "7",
            name: "Netlify",
            key: "netlify"
        },
        {
            id: "8",
            name: "Digital Ocean",
            key: "digitalocean"
        },
        {
            id: "9",
            name: "Salesforce Cloud",
            key: "salesforce"
        }
    ];

    const location = useLocation();
    // console.log("location", location);
    const  handleNavigate =(elm)=>{
        console.log("test",elm)
        navigate(`/service/${elm}`)
    }
    return (
        <>
           
            <div className="sheader bg-secondary ">
                    <ul className="active d-flex justify-content-around text-center  ">
                        {listItem?.map((elm, index) => {
                            return (<li className="list-style-none" key={index}>
                                <h5 className=" sub-header align-items-center text-center " onClick={()=>handleNavigate(elm.key)}>
                                    <p className={`${location.pathname === `/service/${elm.key}`} ? "active": ""`}>{elm.name}</p>
                                </h5>
                            </li>)
                        })}
                    </ul>
            </div>
        </>
    )
}
export default Services_Header;