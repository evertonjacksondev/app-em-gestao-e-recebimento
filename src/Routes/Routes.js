import React from "react";
import { Fragment } from "react";
import { Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home";
import PackingsDetails from "../Pages/Package/PackingDetails";
import PackingsPage from "../Pages/Packings/PackingPage";
import ResidentDetails from "../Pages/Resident/ResidentDetails";
import ResidentPage from "../Pages/Resident/ResidentPage";

const AppRoute = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/home" element={< Home />} />
                <Route path="/encomenda" element={< PackingsPage />} />
                <Route path="/encomenda/:id" element={< PackingsDetails />} />
                <Route path="/morador" element={< ResidentPage />} />
                <Route path="/morador/:id" element={< ResidentDetails />} />
            </Routes>
        </Fragment>
    );
}

export default AppRoute;