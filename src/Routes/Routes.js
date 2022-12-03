import React from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Button from "../Components/DesignSystem/Button";
import TextField from "../Components/DesignSystem/TextField";
import Home from "../Pages/Home/Home";
import PackingDetails from "../Pages/Packings/PackingDetails";
import PackingPage from "../Pages/Packings/PackingPage";
import ResidentDetails from "../Pages/Resident/ResidentDetails";
import ResidentPage from "../Pages/Resident/ResidentPage";

const AppRoute = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/teste" element={<><TextField /><Button></Button></>} />
        <Route path="/home" element={<Home />} />
        <Route path="/encomenda" element={<PackingPage />} />
        <Route path="/encomenda/:id" element={<PackingDetails />} />
        <Route path="/morador" element={<ResidentPage />} />
        <Route path="/morador/:id" element={<ResidentDetails />} />
      </Routes>
    </Fragment>
  );
};

export default AppRoute;
