import {createStore} from 'redux'
import rootReducer from './redux/rootReducer'
// import {participantNumber} from './redux/actions.js/participantsAction'

const store = createStore(rootReducer);

// console.log(store.getState())
store.subscribe( () => {
    console.log('state change', store.getState())
})


// store.dispatch({
//     type: "participantNumber",
//     payload: {
//         numberOfParticipants: '3'
//     }
// })

// store.dispatch({
//     type: "participants",
//     payload: {
//         num: 2
//     }
// })

// store.dispatch(participantNumber(3))


export default store