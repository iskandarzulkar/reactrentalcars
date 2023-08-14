const initialState = {
    listOrders:[],
    listOrdersEdit:[],
    isLoading: false
}

const listOrder = (state=initialState, action) => {
    switch(action.type){
        default:
            return state

        case "GET_LIST_ORDERS_SUCCESS":
            return{
                isLoading: false,
                listOrders: action.payload,
                listOrdersEdit: []
            }

        case "CARS_ORDER_EDIT":
            return{
                isLoading: false,
                listOrders: state.listOrders,
                listOrdersEdit: [...state.listOrdersEdit, action.payload]
            }

        case "EDIT_CARS_ORDER_SUCCESS":

            const index   = state.listOrders.findIndex(item => item.orderId === action.payload.orderId);
            const item    = state.listOrders[index];

            let newData   = state.listOrders.splice((index), 1, action.payload)
            // console.log(action.payload);
            // console.log(newData)
            
            return{
                isLoading: false,
                listOrders : state.listOrders,
                listOrdersEdit: [],
            }

        case "EDIT_CARS_ORDER_FAILED":
            return{
                isLoading: false,
                listOrders : state.listOrders,
                listOrdersEdit: [],
            }
            
        case "DELETE_CARS_EDIT_SUCCESS":
            return{
                isLoading: false,
                listOrders: state.listOrders,
                listOrdersEdit: state.listOrdersEdit.filter(item => item.orderId !== action.id)
            }

        case "DELETE_CARS_ORDER_SUCCESS":
            console.log(action)
            return{
                isLoading: false,
                listOrders: state.listOrders.filter(item => item.orderId !== action.id),
                listOrdersEdit: []
            }

        case "DELETE_CARS_ORDER_FAILED":
            return{
                isLoading: false,
                listOrders:state.listOrders,
                listOrdersEdit: []
            }
        
    }
}




export default listOrder;