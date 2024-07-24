// import {  useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./This_Dashboard_folder.css"
const CustomReq = () => {
    const navigate = useNavigate();

    const coustom_req = [
        {
            name: "I want to host a website"
        },
        {
            name: "I want a remote SQL database."
        },
        {
            name: "I want a dadecated hardware"
        },
        {
            name: "I want a Remote NoSQL database"
        },
        {
            name: "I want to host a website but don't want to manage server configuration"
        },
        {
            name: "I want to host a website"
        },
    ]

    const handlePushShowCam = (elm) => {
        const storEleName = elm;
        // navigate('/dashboard/show-service', { state: { 'service': storData } })
        if(elm){
            navigate('/dashboard/show-cam-view', { state:  {storEleName}  })
        }
    }
    return (
        <>
            {/* <div className='mt-4'>
            <div className='d-flex flex-column'>
                <li className='border w-100 p-2 mb-3 list-group-item'>
                    <NavLink to="show-cam-view" className="text-secondary link-underline-opacity-0 link-underline-opacity-75-hover">
                        I want to host a website
                    </NavLink>
                </li>
                <li className='border w-100 p-2 mb-3 list-group-item'>
                    <NavLink to="show-cam-view">
                        I want a remote SQL database.
                    </NavLink>
                </li>
                <li className='border w-100 p-2 mb-3 list-group-item'>
                    <NavLink to="show-cam-view">
                        I want a dadecated hardware
                    </NavLink>
                </li>
                <li className='border w-100 p-2 mb-3 list-group-item'>
                    <NavLink to="show-cam-view">
                        I want a Remote NoSQL database.
                    </NavLink>
                </li>
                <li className='border w-100 p-2 mb-3 list-group-item'>
                    <NavLink to="show-cam-view">
                        I want to host a website but don't want to manage server configuration
                    </NavLink>
                </li>
                <li className='border w-100 p-2 mb-3 list-group-item'>
                    <NavLink to="show-cam-view">
                        I want to host a website
                    </NavLink>
                </li>
                <div className='border w-100 p-2 mb-3 list-group-item'>
                    <button>Other Requirement</button>
                </div>
                {/* <Outlet /> */}
            {/* </div>
            </div> */}
            <div className='mt-4'>
                <div className='d-flex flex-column'>
                    {coustom_req?.map((req, index) => {
                        return (
                            <div className='border w-100 p-2 mb-3' key={index} id={index} onClick={() => handlePushShowCam(req)}>
                                {/* <NavLink to='show-cam-view' className='custom-req text-secondary' state={{ reqname: req }}> */}
                                {req.name}.
                                {/* </NavLink> */}
                            </div>
                        )
                    })}
                    <div className='border w-100 p-2 mb-3 mt-3 text-center bg-light' style={{ color: '#F0A04B' }}>
                        Other Requirement
                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomReq;
