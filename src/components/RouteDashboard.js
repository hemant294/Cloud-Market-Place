import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ShowCamView from "./ShowCamView";
import ShowService from "./ShowService";
const RouteDashboard = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} ></Route>
                <Route path="/show-cam-view" element={ <ShowCamView />}></Route>
                <Route path="/show-service" element={ <ShowService />}></Route>
            </Routes>
        </>
    )
}
export default RouteDashboard;