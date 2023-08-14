const initialState = {
    orders:[],
    isLoading : false,
    error: null
}
const orders = (state=initialState, action) => {
    switch(action.type){
        default:
            return state
        case "CARS_ADD_CART_REQUEST":
            return{
                ...state,
                isLoading: true
            }

        case "CART_ADD_SUCCESS":
            return{
                isLoading: false,
                orders : [...state.orders, action.payload]
            }

        case "ADD_ORDERS_SUCCESS":
            return{
                isLoading: false,
                orders : []
            }

        case "DELETE_CARS_ORDER_SUCCESS":
            return{
                isLoading: false,
                orders: state.orders.filter(item => item.carId !== action.id)
            }


            // case "LOGIN_ADMIN_FAILED":
            //     return{
            //         isAuthenticated: false,
            //         isLoadingLogin: false,
            //         isAdmin: false,
            //         error: action.payload
            //     }

            // case "LOGIN_ADMIN_REMOVE_ERRORS":
            //     return{
            //         isAuthenticated: false,
            //         isLoading: false,
            //         isAdmin: false,
            //         error: null
            //     }
    }
}


export default orders;