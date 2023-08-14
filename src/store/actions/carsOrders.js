export const  carsOrders = () =>{
    return{
        type: "CARS_ORDERS_REQUEST"
    }
}


export const carsOrdersEdit = (data) =>{
    return{
        type: "CARS_ORDER_EDIT",
        payload: data
    }
}

export const carsOrdersEditCancel = id =>{
    return{
        type: "CARS_ORDER_EDIT_CANCEL",
        payload: id
    }
}


export const carsOrdersEditSubmit = (data) =>{
    return{
        type: "CARS_ORDER_EDIT_SUBMIT",
        payload: data
    }
}


export const carsOrdersDelete = id => {
    return{
        type: "CARS_ORDER_DELETE",
        payload: id
    }
}
