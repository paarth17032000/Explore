// state
const initState = {
    loginError: null,
    signUpError: null,
}

const authReducer = (state = initState, action) => {

    switch(action.type){

        case "Login_Success": 
            console.log("login success")
            return{
                ...state,
                loginError: null
            }

        case "Login_Error":
            console.log("login error")
            return{
                ...state,
                loginError: action.payload.message
            }

        case "Logout_Success": 
            console.log("logout success")
            return{
                ...state
            }

        case "SignUp_Success":
            console.log("succesful signup")
            return{
                ...state,
                signUpError: null
            }

        case "SignUp_Error":
            console.log("error")
            return{
                ...state,
                signUpError: action.payload.message
            }

        default: 
            return state

    }

}

export default authReducer