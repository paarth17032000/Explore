import {createStore} from 'redux'
import rootReducer from './redux/rootReducer'
// import {participantVote} from './redux/actions.js/participantsAction'

const store = createStore(rootReducer);

// console.log(store.getState())
store.subscribe( () => {
    console.log('state change', store.getState())
})


store.dispatch({
    type: "participantNumber",
    payload: {
        numberOfParticipants: 2
    }
})

store.dispatch({
    type: "participants",
    payload: {
        id: 1,
        name: 'yoshi'
    }
})

store.dispatch({
    type: "participants",
    payload: {
        id: 2,
        name: 'dev ed'
    }
})

// store.dispatch({
//     type: "participantVote",
//     payload: {
//         id: 2
//     }
// })


// store.dispatch(participantNumber(3))


export default store