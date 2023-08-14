export const getCars = () =>{
    return{
        type: "CARS_REQUEST"
    }
}

export const delCars = id =>{

    return{
        type: "DELETE_CARS_REQUEST",
        payload: id
    }
}


export const getCarsId = (id) =>{
    return{
        type: "GET_CARS_ID_REQUEST",
        payload: id
    }
}

export const addCars = cars =>{
    return{
        type: "ADD_CARS_REQUEST",
        payload: cars
    }
}

export const editCars = cars => {
    return{
        type: "EDIT_CARS_REQUEST",
        payload: cars
    }
}


// export const editTask = todo =>{
//     return{
//         type: "EDIT_TASK_REQUEST",
//         payload: todo
//     }
// }