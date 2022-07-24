import React, { ReactDOM} from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Index";
import Road from "./components/Road/Index";
import Lounge from "./components/Lounge/Index";

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

const Main = () => {

  return <div >
    {/* <ScriptTag isHydrating={true} src="./assets/js/bootstrap.min.js"  type="text/javascript" />
    <ScriptTag isHydrating={true} src="./assets/js/aos.js"  type="text/javascript" />
    <ScriptTag isHydrating={true} src="./assets/js/jquery-3.6.0.min.js"  type="text/javascript" />
    <ScriptTag isHydrating={true} src="./assets/js/main.js"  type="text/javascript" />
    <ScriptTag isHydrating={true} src="./assets/js/swiper-bundle.min.js"  type="text/javascript" /> */}

    <Header />
    <Router>      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/roadmap" element={<Road/>} />
        <Route path="/lounge" element={<Lounge/>} />
      </Routes>      
    </Router>
    <Footer/>
    {AddLibrary("./assets/js/bootstrap.min.js")}
    {AddLibrary("./assets/js/aos.js")}
    {AddLibrary("./assets/js/jquery-3.6.0.min.js")}
    {AddLibrary("./assets/js/main.js")}
    {AddLibrary("./assets/js/swiper-bundle.min.js")}
  </div>

}
export default Main;