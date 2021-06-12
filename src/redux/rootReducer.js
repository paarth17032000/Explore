import participantsReducer from './reducers/participantsReducer'
import resultReducer from './reducers/resultReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

export default combineReducers ({
    participant: participantsReducer,
    result: resultReducer,
    firestore: firestoreReducer,
})