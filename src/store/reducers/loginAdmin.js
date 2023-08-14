const initialState = {
    isAuthenticated: false,
    isAdmin : false,
    isLoadingLogin: false,
    error: null
}

const loginAdmin = (state=initialState, action) =>{
    switch(action.type){
        default:
            return{
                ...state,
                isLoadingLogin: false
            }
            case "LOGIN_ADMIN_SUCCESS":
                return{
                    isAuthenticated: true,
                    isLoadingLogin: false,
                    isAdmin: true,
                    error: null
                }
            case "LOGIN_ADMIN_FAILED":
                return{
                    isAuthenticated: false,
                    isLoadingLogin: false,
                    isAdmin: false,
                    error: action.payload
                }

            case "LOGIN_ADMIN_REMOVE_ERRORS":
                return{
                    isAuthenticated: false,
                    isLoading: false,
                    isAdmin: false,
                    error: null
                }
            case "LOGIN_USERS_SUCCESS":
                return{
                    isAuthenticated: true,
                    isLoadingLogin: false,
                    isAdmin: false,
                    error: null
                }
            case "LOGIN_USERS_FAILED":
                return{
                    isAuthenticated: false,
                    isLoadingLogin: false,
                    isAdmin: false,
                    error: action.payload
                }

            case "LOGIN_USERS_REMOVE_ERRORS":
                return{
                    isAuthenticated: false,
                    isLoading: false,
                    isAdmin: false,
                    error: null
                }
                
            case "LOGOUT_SUCCESS":
                return{
                    isAuthenticated: false,
                    isLoading: false,
                    isAdmin: false,
                    error: null
                }
    }
}


export default loginAdmin;
