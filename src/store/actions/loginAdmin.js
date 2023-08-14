export const loginAdmin = (data) =>{

    return{
        type: "LOGIN_ADMIN_REQUEST",
        payload: data
    }
}


export const loginUsers = (data) =>{
    console.log(data);
    return{
        type: "LOGIN_USERS_REQUEST",
        payload: data
    }
}



export const logOut = (data) =>{
    
    return{
        type: "LOGOUT_REQUEST",
    }
}