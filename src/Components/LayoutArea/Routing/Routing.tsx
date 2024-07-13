import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import Page404 from "../Page404/Page404";
import "./Routing.css";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import PostSampleImage from "../../SampleImageArea/PostSampleImage/PostSampleImage";
import SampleImagesList from "../../SampleImageArea/SampleImagesList/SampleImagesList";

function Routing(): JSX.Element {


    return (
        <div className="Routing">
			
            <Routes>

                {/* Home: */}
                <Route path="/home" element={<Home />}/>

                {/* Page 404: */}
                <Route path="/*" element={<Page404 />}/>

                {/*  Default: */}
                <Route path="/" element={ <Navigate to="/home" /> }/>

                <Route path="/sampleImages" element={ <SampleImagesList/>}/>

                {/* Add Products: */}
                <Route path="/sampleImage/post" element={<PostSampleImage />}/>

                 {/* Default:
                <Route path="/" element={ <Home /> }/> */}

            </Routes>

        </div>
    );
}

export default Routing;
