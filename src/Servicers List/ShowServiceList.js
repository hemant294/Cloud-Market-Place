import { useState, useEffect } from "react";
import "./cardStyle.css";
import { List } from "../components/common/Constant";
import SearchData from "../Head-component/Search_data";
const ShowServiceList = ({ search, userSrch, srchCat, allservicedata }) => {
    const [allServices, setallServices] = useState([])
    // console.log("userSrch", userSrch)
    // console.log("srhCat ", srchCat)

    useEffect(() => {
        const filterService = List.filter((item) => item.name === search
        )
        setallServices(filterService[0].services);
    }, [search])

 

    const printServices = () => {
        let datalist = []
        allServices.map((service, index) => {
            Object.keys(service).map((key) => {
                service[key].map((data, ind) => {
                    datalist.push(data)
                })
            })
        })
        return datalist
        // {console.log(datalist)}
    }
    const str = printServices()?.filter((val) => {
        return val.service_type.toLowerCase() === srchCat ? true : false
    })

    return (
        <>


            {srchCat ?
                str?.filter((curEle) => {
                    return userSrch.toLowerCase() === '' ? curEle :
                        curEle.service_type.toLowerCase().includes(userSrch) || curEle.service_name.toLowerCase().includes(userSrch);
                }).map((data, index) => {
                    // console.log("allServices",data)

                    return (<div className="card p-2 m-3 head " key={index} >
                        <div className="p-2 fs-5">
                            {data.service}
                        </div>
                        <hr />
                        <div className="card-body">
                            <h5 className="card-title">{data.service_type}</h5>
                            <p className="card-text pb-3 h6">{data.service_name}</p>

                            <p className="card-text">{data.service_description}</p>
                        </div>
                    </div>
                    )
                }) : printServices()?.filter((curEle) => {
                    return userSrch.toLowerCase() === '' ? curEle :
                        curEle.service_type.toLowerCase().includes(userSrch) || curEle.service_name.toLowerCase().includes(userSrch);
                }).map((data, index) => {
                    // console.log("allServices",data)

                    return (<div className="card p-2 m-3 head" key={index} >
                        <div className="p-2 fs-5">
                            {data.service}
                        </div>
                        <hr />
                        <div className="card-body">
                            <h5 className="card-title">{data.service_type}</h5>
                            <p className="card-text pb-3 h6">{data.service_name}</p>

                            <p className="card-text">{data.service_description}</p>
                        </div>
                    </div>
                    )
                })}
        </>
    )
}
export default ShowServiceList;