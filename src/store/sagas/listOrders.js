import {call, delay, put, takeEvery} from "redux-saga/effects"

import axios from "axios";

const baseUrl = "http://localhost:8080/carsorder"
const baseOrder = "http://localhost:8080/order"
const token = localStorage.getItem("token");

function* getListOrders(){


    try {
        const res = yield axios.get(`${baseUrl}`,{
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },

        })

        console.log(res);
        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        yield call(delay, 2000)

        if(res.data.data == null){
            yield put({type: "GET_LIST_ORDERS_SUCCESS", payload: []})
            
        }else{
            yield put({type: "GET_LIST_ORDERS_SUCCESS", payload: res.data.data})
        }
        // yield put({type: "GET_LIST_ORDERS_SUCCESS", payload: res.data.data})

    } catch (e) {
        const errors = e.response.message
        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        yield call(delay, 2000)
        yield put({type: "GET_LIST_ORDERS_FAILED", payload: errors})
    }
}

function* carsOrderEdit(actions){
    const {payload}   = actions;
    console.log(payload);
    yield put({type: "CART_EDIT_ADD_SUCCESS", payload: payload})
} 

function* carsOrderEditCancel(actions)
{   
    const {payload} = actions;
    yield put({type: "DELETE_CARS_EDIT_SUCCESS", id: payload})
}


function* carsOrderEditSumit(actions)
{
    const {payload} = actions;


    var data = {
        pickUpLoc     : payload.pickUpLoc,
        dropOffLoc    : payload.dropOffLoc,
        pickUpDate    : payload.pickUpDate,
        dropOffDate   : payload.dropOffDate,
        pickUpTime    : payload.pickUpTime,
        carId         : payload.carId,
        userId        : payload.userId,
        adminId       : payload.adminId,
    }

    try {    
        const res = yield axios.put(`${baseOrder}/${payload.orderId}`, data,{
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
        // console.log(res);
        yield put({type: "EDIT_CARS_ORDER_SUCCESS", payload: res.data.data[0]})
        
    } catch (e) {
        console.log(e);
        const errors = e.response.data
        yield put({type: "EDIT_CARS_ORDER_FAILED", payload: errors})
    }

}

function* carsOrderDelete(actions)
{
    const {payload} = actions;


    try {    
        const res = yield axios.delete(`${baseOrder}/${payload}`,{
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
        // console.log(res);
        yield put({type: "DELETE_CARS_ORDER_SUCCESS", id: payload})
        
    } catch (e) {
        console.log(e);
        const errors = e.response.data
        yield put({type: "DELETE_CARS_ORDER_FAILED", payload: errors})
    }

}




// =============
export function* listOrdeCars()
{
    yield takeEvery("CARS_ORDERS_REQUEST", getListOrders)
}

export function* listCarsOrderEdit()
{
    yield takeEvery("CARS_ORDER_EDIT", carsOrderEdit)
}

export function* listCarsOrderEditCancel()
{
    yield takeEvery("CARS_ORDER_EDIT_CANCEL", carsOrderEditCancel)
}

export function* listCarsOrderSubmit()
{
    yield takeEvery("CARS_ORDER_EDIT_SUBMIT", carsOrderEditSumit)
}

export function* listCarsOrderDelete()
{
    yield takeEvery("CARS_ORDER_DELETE", carsOrderDelete)
}



