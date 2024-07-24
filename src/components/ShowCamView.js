import CloudPlatforms from "./CloudPlatforms";
import "./Dashboard.css";
import { useLocation } from "react-router-dom";
// import ServiceApi from "../APIs/ServiceApi";
import { useState } from "react";
// import CompareData from "../Compare/Compare_Data";
import { useNavigate } from "react-router-dom";
// import { Container } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Input from "./input/Input";
import RequirementOfService from "../Dashboard/Requirement_of_service";
import ShowService from "./ShowService";
import "./ShowService.css";
const ShowCamView = () => {
    // console.log(RequirementOfService[0].name)
    const location = useLocation();
    const requirementName = location.state.storEleName.name;
    // console.log(location.state.reqname);
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [time, setTime] = useState();
    const [opt, setOpt] = useState();
    const [stor, setStor] = useState([]);

    const option = [
        "LOW",
        "MEDIUM",
        "HIGH",
    ]

    const onOptionChangeHandler = (e) => {
        setOpt(e.target.value);
    }

    const onSubmitFormData = (event) => {
        event.preventDefault();
        const storData = {
            users: user,
            time: time,
            security: opt,
        }
        setStor(storData);
        if (stor) {
            navigate('/dashboard/show-service', { state: { 'service': storData ,requirementName } })
        }
    }

    const filterStor = RequirementOfService?.filter((val) => {
        return val.name === requirementName;
    })
    // console.log(filterStor[0].name);
    return (
        <>
            <Container>
                <div className='row mt-4'>
                    <div className="col-3">
                        <CloudPlatforms />
                    </div>
                    <div className="col-8">
                        <div className='d-flex align-items-center mt-2'>
                            <strong className="fs-5 "> Requirment :-</strong>
                            <span className='text-decoration-underline' style={{ marginLeft: '10px' }}>{requirementName}</span>
                        </div>
                        <form onSubmit={onSubmitFormData}>
                            <div className='s-input mt-4'>
                                <Input
                                    className="w-100 border p-1"
                                    required
                                    id="user"
                                    value={user}
                                    type="number"
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                />
                                <label htmlFor="user" className="texts  text-secondary">{filterStor[0].inp1}  <strong>(in month)</strong>.
                                </label>
                            </div>
                            <div className='s-input mt-4'>
                                <Input
                                    className="w-100 border p-1"
                                    required
                                    id="time"
                                    value={time}
                                    type="number"
                                    autoComplete="off"
                                    onChange={(e) => setTime(e.target.value)}
                                />
                                <label htmlFor="time" className="texts text-secondary">For how much time you want to access this service <strong>(in month)</strong>.
                                </label>
                            </div>
                            <div>
                                <select className="p-1 ms-4 w-100 bg-light mt-4 border p-2" onChange={onOptionChangeHandler}>
                                    {
                                        option.map((option, index) => {
                                            return (
                                                <option key={index}>
                                                    {option}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                                <label className="texts mt-2 text-secondary">Select level of security for server.</label>
                            </div>
                            <input type="submit" placeholder="Find Service" className=" p-1 w-100  mt-4 border p-2" style={{ backgroundColor: "#FFCC70" }} />
                        </form>
                        {/* <CompareData savedData={stor} /> */}
                    </div>
                </div>
                {/* <ShowService name={sh}/> */}
            </Container>
        </>
    )
}
export default ShowCamView;