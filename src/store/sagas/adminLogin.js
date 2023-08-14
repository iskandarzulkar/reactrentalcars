import { call, delay, put, takeEvery } from "redux-saga/effects";

import axios from "axios";

const baseUrl = "http://localhost:8080"

function* requestLogin(actions){
    const {payload} = actions

    try {
        const res = yield axios.post(`${baseUrl}/login`, payload,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })

        localStorage.setItem("token", res.data.token)
        localStorage.setItem("isAdmin", res.data.isAdmin);

        yield put({type : "LOGIN_ADMIN_SUCCESS"});
    } catch (e) {

        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        const errors = e.response.data.messages
        
        yield put({type: "LOGIN_ADMIN_FAILED", payload: errors})
        yield call(delay, 3000)
        yield put({type: "LOGIN_ADMIN_REMOVE_ERRORS"})
    }
}

function* requestUsersLogin(actions){
    const {payload} = actions
    console.log(payload)

    try {
        const res = yield axios.post(`${baseUrl}/loginUsers`, payload,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })

        localStorage.setItem("token", res.data.token)
        localStorage.setItem("isAdmin", res.data.isAdmin);

        yield put({type : "LOGIN_USERS_SUCCESS"});
    } catch (e) {

        const delay = time => new Promise(resolve => setTimeout(resolve, time));
        const errors = e.response.data.messages
        
        yield put({type: "LOGIN_USERS_FAILED", payload: errors})
        yield call(delay, 3000)
        yield put({type: "LOGIN_USERS_REMOVE_ERRORS"})
    }
}


function* logout(actions)
{
    const {payload} = actions

    localStorage.clear();
    sessionStorage.clear();
    yield put({type: "LOGOUT_SUCCESS", payload: payload})
}




export function* requestLoginAdmin(action){
    yield takeEvery("LOGIN_ADMIN_REQUEST", requestLogin);
}


export function* requestLoginUsers(action){
    yield takeEvery("LOGIN_USERS_REQUEST", requestUsersLogin);
}

export function* requestLogout(action)
{
    yield takeEvery("LOGOUT_REQUEST", logout);
}