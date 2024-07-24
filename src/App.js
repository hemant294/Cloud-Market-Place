import './App.css';
import Home from './Head-component/Home';
import Contect from './Head-component/Contect';
import About from './Head-component/About';
import { Route, Router, Routes } from "react-router-dom";
import Docs from './Head-component/Docs';
import Header from './Head-component/Header';
import Service from './Head-component/Service';
import NotFount from './Head-component/NotFount';
import RouteDashboard from './components/RouteDashboard';

// App start wth landing page 
function App() {
  return (<>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contect' element={<Contect />} />
      <Route path="/docs" element={<Docs />} />
      <Route path='/service/' element={<Service />} />
      <Route path='/service/:service_name' element={<Service />} />
      {/* <Route path='/service/:service_name/:service_type' element={<ServiceCategory />} /> */}
      <Route path="/dashboard/*" element={<RouteDashboard />} >
        {/* <Route path="show-cam-view" element={<ShowCamView />}/> */}
      </Route>
      <Route path='*' element={<NotFount />} />
    </Routes>
  </>
  );
}

export default App;
