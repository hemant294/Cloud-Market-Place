
import "./Service.css";
import Services_Header from "./Services_header";
import { useParams } from "react-router-dom";
import ServiceList from "../Servicers List/ShowServiceList";
import ShowServiceList from "../Servicers List/ShowServiceList";
import ProductCategary from "./ProductCategary";
import SearchData from "./Search_data";
import { useState } from "react";
import AllService from "./AllService";
const Service = () => {
    const param = useParams();
    const service_name = param.service_name ? param.service_name : "aws";
    // console.log(param);

    const [srch, setSrch] = useState("");
    const [srchCat, setSrchCat] = useState("");
    const [allservicedata, setAllServicesdata] = useState("");
    console.log(allservicedata);
    const  handleSrhService = (elm)=>{
        setAllServicesdata(elm)
        setSrchCat("")
    }
    return (
        <>
            <div className="sarvice-head">
                <Services_Header active={service_name} />
                <div className="mb-5">
                    <h2 style={{ marginLeft: '70px', padding: '10px' }} className="mt-3">Explore Top Product Categories</h2>
                    <ProductCategary setSrchCat={setSrchCat} />
                </div>
                <div className="row main-container home-width">
                    
                    <h4>All {service_name} cloud details</h4>
                    <div className="col-3">
                        <button onClick={()=>handleSrhService("AllService")}>All Service</button>        
                    </div> 
                    <div className="col-9 " >
                        <div className="">
                        <SearchData values={srch} srchSet={setSrch} />
                        </div>
                        <div className="grid-display">
                            <ShowServiceList search={service_name} userSrch={srch} srchCat={srchCat} allservicedata={allservicedata}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;