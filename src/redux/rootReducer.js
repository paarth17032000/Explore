import participantsReducer from './reducers/participantsReducer'
import resultReducer from './reducers/resultReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './reducers/authReducer'

export default combineReducers ({
    auth: authReducer,
    participant: participantsReducer,
    result: resultReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})