const initialState = {
    cars:[],
    isLoading: false,
    error: null
}

const cars = (state=initialState, action) => {
    switch(action.type){
        default:
            return state
        case "CARS_REQUEST":
            return{
                ...state,
                isLoading: true,
                error: null
            }
        case "GET_SUCCESS":
            return{
                isLoading: false,
                cars: action.payload,
                error: null
            }
        case "GET_FAILED":
            return{
                isLoading: false,
                cars: [],
                error: action.payload
            }
        case "GET_FAILED_REMOVE_ERRORS":
            return{
                isLoading: false,
                cars: [],
                error: null
            }
      
        case "ADD_SUCCESS":
            return{
                isLoading: false,
                cars : [...state.cars, action.payload],
                error : null
            }

        case "ADD_CARS_FAILED":
            return{
                isLoading: false,
                cars: state.cars,
                error: action.payload
            }

        case "ADD_CARS_FAILED_REMOVE":
            return{
                isLoading: false,
                cars: state.cars,
                error:  null
            }


        case "EDIT_SUCCESS":

            const index   = state.cars.findIndex(item => item.carId === action.payload.carId);
            const item    = state.cars[index];

            let newData   = state.cars.splice((index), 1, action.payload)

            return{
                isLoading: false,
                cars : state.cars,
                error:  null
            }

        case "EDIT_SUCCESS_FAILED":
            return{
                isLoading: false,
                cars: state.cars,
                error:  action.payload
            }

        case "EDIT_SUCCESS_FAILED":
            return{
                isLoading: false,
                cars: state.cars,
                error:  null
            }

        case "EDIT_SUCCESS_REMOVE":
            return{
                isLoading: false,
                cars: state.cars.filter(item => item.carId !== action.id),
                error: null
            }

        case "DELETE_CARS_FAILED":

            return{
                isLoading: false,
                cars: state.cars,
                error:  action.payload
            }

        case "DELETE_CARS_FAILED_REMOVE":
            return{
                isLoading: false,
                cars: state.cars,
                error:  null
            }
      
      
    }
}


export default cars;