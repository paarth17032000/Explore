import participantsReducer from './reducers/participantsReducer'
import resultReducer from './reducers/resultReducer'
import { combineReducers } from 'redux'

export default combineReducers ({
    participant: participantsReducer,
    result: resultReducer
})