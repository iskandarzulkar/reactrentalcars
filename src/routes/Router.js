import React from "react";
import Cars from "../views/cars/cars";
import Orders from "../views/order/Orders";
import Bookcars from "../views/bookcars/Bookcars";
import { Routes, Route  } from 'react-router-dom';
import LoginAdmin from "../views/loginadmin/LoginAdmin";
import LoginUsers from "../views/loginuser/LoginUsers";
import PrivateRoute from "./PrivateRoutes";

const Router = () =>{
    return(
        <React.Fragment>
            <Routes>
                <Route path="/" exact element={<PrivateRoute><Cars /></PrivateRoute>} />
                <Route path="/orders" exact element={<PrivateRoute><Orders /></PrivateRoute>} />
                <Route path="/bookcars" exact element={<PrivateRoute><Bookcars /></PrivateRoute>} />
                <Route path="/loginAdmin" exact element={<LoginAdmin />} />
                <Route path="/loginUsers" exact element={<LoginUsers />} />
                {/* <Route path="/listOrder" exact element={<Bookcars />} /> */}
            </Routes>
        </React.Fragment>
    )
}


export default Router