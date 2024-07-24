import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ServiceApi from "../APIs/ServiceApi";
function ShowService() {
    const apidata = ServiceApi;
    const location = useLocation();
    const requirementType = location.state.requirementName;
    const savedData = location.state.service;
    console.log(savedData)
    // console.log(apidata[0].requirementName);
    const [allServices, setallServices] = useState();
    // useEffect(() => {
    const filterService = apidata.filter((item) => item.requirementName === requirementType
    )
    // setallServices(filterService[0]);
    console.log(filterService);

    // }, [requirementType])
    // const filterVal = apidata.filter((val,ind) => {
    //     return val[1].name === requirementType
    // })
    return (
        <div className='show-head'>
            <p className='back-nav'>
                <NavLink to="/"><a>Home</a></NavLink>/
                <NavLink to="/dashboard"><a>Dashboard</a></NavLink>/
                <NavLink to="/dashboard/show-cam-view"><a>Requirement</a></NavLink>
            </p>
            <h5>This cloud service is the best match according to your requirement</h5>
            <div>

                {filterService.map((curEle, index) => {
                    return (
                        <div>
                            {
                                curEle.servicetype.map((val) => {
                                    return (
                                        <div className='show-data' key={val.id}>
                                            {
                                                savedData.length === 0 ? '' :
                                                    val.users == savedData.users && val.security == savedData.security ?val.service : ""
                                            }
                                        </div>)
                                })
                            }
                            <p>{curEle.service}</p>
                            {/* {curEle[0].map((val) => {
                                console.log(val)
                                return (
                                    <div key={val.id}>
                                        {
                                            savedData.length === 0 ? 'no' :
                                                val.users == savedData.users && val.security == savedData.security ? val.service : ""
                                        }
                                    </div>
                                )
                            })
                            } */}
                        </div>
                    )
                })}

            </div>
        </div>

    )
}

export default ShowService