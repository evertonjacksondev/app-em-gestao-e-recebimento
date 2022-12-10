import React from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/NavBar/NavBar";
import Home from "../Pages/Home/Home";
import PackingDetail from "../Pages/Packings/PackingDetail";
import PackingPage from "../Pages/Packings/PackingPage";
import ResidentDetails from "../Pages/Resident/ResidentDetails";
import ResidentPage from "../Pages/Resident/ResidentPage";

const AppRoute = () => {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/encomenda" element={<PackingPage />} />
        <Route path="/encomenda/:id" element={<PackingDetail />} />
        <Route path="/morador" element={<ResidentPage />} />
        <Route path="/morador/:id" element={<ResidentDetails />} />
      </Routes>
    </Fragment>
  );
};

export default AppRoute;
