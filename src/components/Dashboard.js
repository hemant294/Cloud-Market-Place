// import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
// import "./Dashboard.css";
import CloudPlatforms from "./CloudPlatforms";
import Container from 'react-bootstrap/Container';
import CustomReq from "../Dashboard/CustomReq";
import PredefineReq from "../Dashboard/PredefineReq";
import Input from "./input/Input";
const Dashboard = () => {

    const [radio, setRadio] = useState('custom');

    const changeToCustom = () => {
        setRadio('custom');
        document.getElementById('predefine-req').classList.remove('bg-active');
        document.getElementById('custom-req').classList.add('bg-active');
    }
    const changeToPredefine = () => {
        setRadio('predefine');
        document.getElementById('custom-req').classList.remove('bg-active');
        document.getElementById('predefine-req').classList.add('bg-active');
    }

    return (
        <>
            <Container>
                <div className="row mt-4">
                    <div className="col-3">
                        <CloudPlatforms />
                    </div>

                    <div className='col-9'>
            <div className='row justify-content-between gx-1'>
              <div className='back col-sm-6 border  bg-active' id="custom-req">
                <div className='back1'>
                  <input type="radio" name='req-op' className=' radio-inp' onChange={()=>changeToCustom()} />
                </div>
                <div className='ms-4 mt-1'>
                  <div className='fw-bold'>Custom Requirement</div>
                  <p className=''>
                    In the custom requirement you have more option to select your csp.
                  </p>
                </div>
              </div>
              <div className='back col-sm-6 border d-flex' id="predefine-req">
                <div className='back1'>
                  <input type="radio" name='req-op' className='radio-inp' onChange={()=>changeToPredefine()} />
                </div>
                <div className='back2 mt-1'>
                  <div className='fw-bold'>Select Predefine Requirements</div>
                  <p className=''>
                    we have created some predefine template so you can use it to solve your business problem.
                  </p>
                </div>
              </div>
            </div>

            {
              radio === 'custom' ?
                <CustomReq />
                :
                <PredefineReq />
            }
          </div>
                </div>
                {/* </div> */}
            </Container>
        </>
    )
}
export default Dashboard;