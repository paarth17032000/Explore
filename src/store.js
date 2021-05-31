import {createStore} from 'redux'
import rootReducer from './redux/rootReducer'

const store = createStore(rootReducer);

store.subscribe( () => {
    console.log('state change', store.getState())
})

// store.dispatch(participantVote(1))
// store.dispatch(participantVote(2))
// store.dispatch(participantVote(4))
// store.dispatch(participantVote(2))
// store.dispatch(participantVote(3))
// store.dispatch(participantVote(1))
// store.dispatch(participantVote(1))


export default store