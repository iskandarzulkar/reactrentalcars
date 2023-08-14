import {all} from"redux-saga/effects";
import { carsAdd, carsDel, carsGet, carsEdit } from "./cars"

import { carsOrders, carsOrderDel, carsOrderSubmit } from "./orders";
import { requestLoginAdmin, requestLoginUsers, requestLogout } from "./adminLogin";
import { listOrdeCars, listCarsOrderEdit, listCarsOrderEditCancel, listCarsOrderSubmit, listCarsOrderDelete } from "./listOrders"


export default function* rootSaga(){
    yield all([
        carsGet(),
        carsDel(),
        carsAdd(),
        carsEdit(),
        carsOrders(),
        carsOrderDel(),
        carsOrderSubmit(),
        requestLoginAdmin(),
        requestLoginUsers(),
        listOrdeCars(),
        listCarsOrderEdit(),
        listCarsOrderEditCancel(),
        listCarsOrderSubmit(),
        requestLogout(),
        listCarsOrderDelete()
        
    ])
}