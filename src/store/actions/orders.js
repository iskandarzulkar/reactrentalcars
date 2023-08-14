export const CarsCart = (cars) => {
    return{
        type: "CARS_ADD_CART_REQUEST",
        payload: cars
    }
}


export const CarsCartDel = (id) =>{
    return{
        type: "CARS_CART_DELL",
        payload: id
    }
}


export const CarsOdersSubmit = (data) =>{
    return{
        type: "CARS_ORDERS_SUBMIT",
        payload: data
    }
}
