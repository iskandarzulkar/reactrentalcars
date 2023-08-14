import {call, delay, put, takeEvery} from "redux-saga/effects"

import axios from "axios";

const baseUrl = "http://localhost:8080/order"

// function* get(){
//     // const token = localStorage.getItem("token");

//     try {
//         const res = yield axios.get(`${baseUrl}`,{
//             headers: { 'Content-Type': 'application/json'},
//             // headers:{
//             //         "Authorization": token
//             //     }
//         })
//         const delay = time => new Promise(resolve => setTimeout(resolve, time));
//         yield call(delay, 2000)
//         yield put({type: "GET_SUCCESS", payload: res.data.data})

//     } catch (e) {
//         const errors = e.response.data.msg
//         yield put({type: "GET_FAILED", payload: errors})
//     }
// }


function* delCarsOrder(actions)
{
    const {payload} = actions;
    yield put({type: "DELETE_CARS_ORDER_SUCCESS", id: payload})
}

function* storeOrderCars(actions)
{
    const {payload}   = actions;
    const token       = localStorage.getItem("token");
    console.log(payload)
    try {
        const res = yield axios.post(`${baseUrl}`, payload,{
            headers:{
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token
                }
        })

        yield put({type: "ADD_ORDERS_SUCCESS", payload: res.data.data})

    } catch (e) {
        console.log(e);
        // const errors = e.response.data.msg
        // yield put({type: "GET_FAILED", payload: errors})
    }
}


function* addCarsOrder(actions)
{  
    const {payload}   = actions;
    yield put({type: "CART_ADD_SUCCESS", payload: payload})

}


export function* carsOrders()
{
    yield takeEvery("CARS_ADD_CART_REQUEST", addCarsOrder)
}

export function* carsOrderDel()
{
    yield takeEvery("CARS_CART_DELL", delCarsOrder)
}

export function* carsOrderSubmit()
{
    yield takeEvery("CARS_ORDERS_SUBMIT", storeOrderCars)
}
