import {call, delay, put, takeEvery} from "redux-saga/effects"

import axios from "axios";

const baseUrl = "http://localhost:8080/cars"
const token = localStorage.getItem("token");

function* get(){

    try {
        const res = yield axios.get(`${baseUrl}`,{
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })

        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        yield call(delay, 3000)
        if(res.data.data == null){
            yield put({type: "GET_SUCCESS", payload: []})
            
        }else{
            yield put({type: "GET_SUCCESS", payload: res.data.data})
        }

    } catch (e) {
        const errors = e.message
        
        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        yield put({type: "GET_FAILED", payload: errors})
        yield call(delay, 3000)
        yield put({type: "GET_FAILED_REMOVE_ERRORS"})
    }
}

function* add(actions)
{
    const {payload}   = actions;
    console.log(payload);
    try {
        const res = yield axios.post(`${baseUrl}`, payload,{
            headers:{
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token
                }
        })

        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        yield call(delay, 1000)
        yield put({type: "ADD_SUCCESS", payload: res.data.data[0]})

    } catch (e) {
        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        const errors = e.message
        yield put({type: "ADD_CARS_FAILED", payload: errors})
        yield call(delay, 3000)
        yield put({type: "ADD_CARS_FAILED_REMOVE"})
    }
}

function* del(actions)
{
    const {payload} = actions;

    const token = localStorage.getItem("token");

    try {
        const res = yield axios.delete(`${baseUrl}/${payload}`,{
            headers:{
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token
                }
        })

        console.log(res);
        yield put({type: "DELETE_SUCCESS", id: payload})
        
    } catch (e) {
        const errors = e.response.data.messages
        console.log(errors);
        
        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        yield put({type: "DELETE_CARS_FAILED", payload: errors})
        yield call(delay, 3000)
        yield put({type: "DELETE_CARS_FAILED_REMOVE"})
    }

}

function* edit(actions)
{

    const {payload} = actions;
    const data = {
        name : payload.name,
        carType : payload.carType,
        rating : payload.rating,
        fuel : payload.fuel,
        image : payload.image,
        hourRate : payload.hourRate,
        dayRate : payload.dayRate,
        monthRate : payload.monthRate,
    }

    const id = payload.carId
    const token = localStorage.getItem("token");

    try {
        const res = yield axios({
            method: 'put',
            url: `${baseUrl}/${id}`,
            headers:{
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            },
            data: data
        });
        console.log(res.data.data[0]);
        yield put({type: "EDIT_SUCCESS", payload: res.data.data[0]})
        
    } catch (e) {
        console.log(e.message);
        const errors = e.message
        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        yield put({type: "EDIT_SUCCESS_FAILED", payload: errors})
        yield call(delay, 3000)
        yield put({type: "EDIT_SUCCESS_REMOVE"})
    }

}




export function* carsGet()
{
    yield takeEvery("CARS_REQUEST", get)
}


export function* carsAdd()
{
    yield takeEvery("ADD_CARS_REQUEST", add)
}


export function* carsDel()
{
    yield takeEvery("DELETE_CARS_REQUEST", del)
}

export function* carsEdit()
{
    yield takeEvery("EDIT_CARS_REQUEST", edit)
}
