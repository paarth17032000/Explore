import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './redux/rootReducer'
import thunk from 'redux-thunk'
import fbConfig from './config/fbConfig' 
import { reactReduxFirebase ,getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore'

const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    )
);

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


export default store