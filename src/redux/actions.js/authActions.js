export const Login = (credentials) => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        // async call
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({
                type: "Login_Success"
            })
        }).catch((err) => {
            dispatch({
                type: "Login_Error",
                payload: err
            })
        })
    }
}

export const Logout = () => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        // async call
        firebase.auth().signOut().then(() => {
            dispatch({
                type: "Logout_Success"
            })
        })
    }
}

// const registerUserDoc = async (userId) => {
//     await  firestore.collection("users").doc(res.user.uid).set({
//         FirstName: credentials.firstName,
//         LastName: credentials.LastName
//     })
// } 

export const SignUp = (credentials) => {
    return(dispatch, getState, {getFirestore, getFirebase}) => {
        const firebase = getFirebase()
        const firestore = getFirebase().firestore()

        // let user = {
        //     FirstName: credentials.firstName,
        //     LastName: credentials.last
        // }

        // async call
        firebase.auth().createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((res) => {
            console.log(res)
            return firestore.collection('users').doc(res.user.uid).set({
                FirstName: credentials.firstName,
                LastName: credentials.lastName
            })
        }).then(() => {
            console.log('in')
            dispatch({
                type: "SignUp_Success"
            })
        }).catch((err) => {
            console.log('out')
            dispatch({
                type: "SignUp_Error",
                payload: err
            })
        })
    }
}