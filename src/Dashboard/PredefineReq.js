import ShowPredefineReq from "./ShowPredefineReq";
import { useState } from "react";
const PredefineReq = () => {

    const pre_data = [
        {
            id : "0",
            stor_content : "Store user profile image and retrive profile image.",
            button : "Find Service",
            'details' : {
                'csp_name' : 'Amazon Web Service',
                'service_name' : 'S3',
                'price' : '1.0 USD'
              }
        },
        {
            id: "1",
            stor_content : "Store all students marksheet as a PDF and retrive when it required.",
            button : "Find Service",
            'details' : {
                'csp_name' : 'Amazon Web Service',
                'service_name' : 'S3',
                'price' : '1.0 USD'
              }
        }
    ]

    const [modalShow, setmodalShow] = useState(false);
    const [reqId, setreqId] = useState(0);

    return (
        <>
            <div className="d-flex">
                {pre_data.map((curEle, index) => {
                    return <div className="card m-3" style={{ width: "18rem" }} key={curEle.index}>
                    <div className="card-body">
                        <p className="card-text ">{curEle.stor_content}</p>
                        <button className="w-100 border p-1 rounded-3 mt-4" style={{color: "#FFCC70" , backgroundColor: "#FFFFFA"}} onClick={() => {setmodalShow(true); setreqId(curEle.id)}}>{curEle.button}</button>
                    </div>
                </div>
                })}
            </div>

            <ShowPredefineReq 
                show={modalShow}
                onHide={()=>setmodalShow(false)}
                reqs={pre_data[reqId]}
            />
        </>
    )
}
export default PredefineReq;