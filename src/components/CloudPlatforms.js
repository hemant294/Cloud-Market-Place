// const CloudPlatforms = () => {
//     return (
//         <>
//             <div className="w-100">
//                 <div className="d-flex justify-content-around border border-secondary align-items-center">
//                     <figure className="figure col-3">
//                         <img src="../../images/aws.svg" className="h-2 w-2 mt-2 mb-0 ps-4"/>
//                     </figure>
//                     <h5 className="col-8 font-weight-lighter text-secondary"><small><u>Amazon Web Service</u></small></h5>
//                 </div>
//                 <div className="d-flex justify-content-around">
//                     <figure>
//                         <img src="../../images/gcp.svg"/>
//                     </figure>
//                     <h4>Google Cloud Provider</h4>
//                 </div>
//                 <div className="d-flex justify-content-around">
//                     <figure>
//                         <img src="../../images/azure.svg"/>
//                     </figure>
//                     <h4>MicroSoft Azure</h4>
//                 </div>
//                 <div className="d-flex justify-content-around">
//                     <figure>
//                         <img src="../../images/ibm.svg"/>
//                     </figure>
//                     <h4>IBM Cloud</h4>
//                 </div>
//                 <div className="d-flex justify-content-around">
//                     <figure>
//                         <img src="../../images/heroku.svg"/>
//                     </figure>
//                     <h4>Heroku Cloud</h4>
//                 </div>
//                 <div className="d-flex justify-content-around">
//                     <figure>
//                         <img src="../../images/salesforce.svg"/>
//                     </figure>
//                     <h4>Salesforce Cloud</h4>
//                 </div>
//                 <div className="d-flex justify-content-around">
//                     <figure className="col-4 text-center">
//                         <img src="../../images/alibaba.png" className="w-25 h-100 p-10 "/>
//                     </figure>
//                     <h4 className="col-8">Alibaba Cloud</h4>
//                 </div>
//                 <div className="d-flex justify-content-around">
//                     <figure>
//                         <img src="../../images/digital-ocean.svg"/>
//                     </figure>
//                     <h4>Digital Ocean</h4>
//                 </div>
//                 <div className="d-flex justify-content-around">
//                     <figure className="col-4">
//                         <img src="../../images/netlify.svg" className="w-50 h-50 "/>
//                     </figure>
//                     <h4 className="col-8">Netlify Cloud</h4>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default CloudPlatforms;


import React from 'react'
import netlify from "../images/netlify.svg";
import aws from "../images/aws.svg";
import azure from "../images/azure.svg";
import gcp from "../images/gcp.svg";
import ibm from "../images/ibm.svg";
import heroku from "../images/heroku.svg";
import salesforce from "../images/salesforce.svg";
import digitalO from "../images/digital-ocean.svg";
import alibaba from "../images/alibaba.png"
import { Link, NavLink } from 'react-router-dom';

function TopCSP() {
    const top_csp = [
        {
            'cspname': 'Amazon Web Service',
            'url': "https://aws.amazon.com/s3/",
            csplogo: aws,
            'id': '6406cf08d839f23d04c4d59a'
        },
        {
            'cspname': 'Google Cloud Provider',
            csplogo: gcp,
            'id': '640960015c6f2c4f6428452c'
        },
        {
            'cspname': 'Microsoft Azure',
            csplogo: azure,
            'id': '64099417b2b43510e0c1c293'
        },
        {
            'cspname': 'IBM Cloud',
            csplogo: ibm
        }
        , {
            'cspname': 'Heroku Cloud',
            csplogo: heroku
        },
        {
            'cspname': 'Salesforce Cloud',
            csplogo: salesforce
        }
        , {
            'cspname': 'Digital Ocean',
            csplogo: digitalO
        }
        , {
            'cspname': 'Netlify Cloud Service',
            csplogo: netlify
        }
        ,{
            'cspname' : "Alibaba Cloud Service",
            csplogo: alibaba,
        }
    ]
    return (
        <div>
            {top_csp.map((csp, index) => {
                return (
                    <div className='d-flex align-items-center py-2 px-2 border ' key={index}>
                        <div className='col-sm-3 '>
                            <img src={csp.csplogo} alt={csp.cspname} style={{height: 40, width: 40}} />
                        </div>
                        <div className='col-sm-9 '>
                            <Link className='csp-name text-secondary' to={csp.url} > {csp.cspname}</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TopCSP