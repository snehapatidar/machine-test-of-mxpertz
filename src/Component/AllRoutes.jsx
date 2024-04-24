import { Routes, Route } from "react-router-dom";
import CardDescription from "../Pages/CardDescription/CardDescription";
import Home from "../Pages/Home";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/carddescription/:id" element={<CardDescription/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default AllRoutes;