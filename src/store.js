import { createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe( () => {
    console.log('state change', store.getState())
})

// let state = {
//     numberOfParticipants: 3,
//     participants: ['ram','shyam','mitu']
// }

// store.dispatch({
//     type: "Add_Poll",
//     payload: state
// })
// store.dispatch(participantVote(2))
// store.dispatch(participantVote(4))
// store.dispatch(participantVote(2))
// store.dispatch(participantVote(3))
// store.dispatch(participantVote(1))
// store.dispatch(participantVote(1))


export default store