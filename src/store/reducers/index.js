import {combineReducers} from "redux";
import cars from "./cars";
import orders from "./orders";
import loginAdmin from "./loginAdmin";
import listOrder from "./listOrders";


export default combineReducers({
    cars,
    orders,
    loginAdmin,
    listOrder
})