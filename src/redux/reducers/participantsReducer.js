// // importing action types
// import * as actions from '../actions.js/actionTypes'

// // init state []
// const initState = {
        // numberOfParticipants: 0,
        // participants: [],
        // participantVotes: []
// }

// // reducer
// const participantsReducer = (state = initState, action) => {
//     switch(action.type){
//         case actions.participantNumber :
//             return {
//                 ...state,
//                 numberOfParticipants: action.payload.numberOfParticipants
//             }

//         case actions.participants :
//             return {
//                 ...state,
            
//                 participants: [
//                     ...state.participants,
//                     {
//                         id: action.payload.id,
//                         name: action.payload.name
//                     }
//                 ],

//                 participantVotes: [
//                     ...state.participantVotes,
//                     {
//                         id: action.payload.id,
//                         vote: 0
//                     }
//                 ]
//             }

//         case actions.participantVote :
//             return{
//                 ...state,

//                 participantVotes: state.participantVotes.map( object => {
//                     return(
//                         object.id !== action.payload.id ?  object : {
//                             ...object,
//                             vote : object.vote+1
//                         }
//                     )
//                 })
//             }

//         default :
//             return state
//     }
// }

// export default participantsReducer

// importing action types
import * as actions from '../actions.js/actionTypes'


let id = 0;
// init state []
const initState = {
    polls : [
        {
            id: 1,
            desc: 'lorem 20 ffncsoi',
            numberOfParticipants: 2,
            participants: [{id: 1, name: 'ram'},{id: 2, name: 'ramesh'}],
            participantVotes: [{id: 1, name: 'ram'},{id: 2, name: 'ramesh'}]
        },
        {
            id: 2,
            desc: 'lorem 20 ffncsoi',
            numberOfParticipants: 3,
            participants: [{id: 1, name: 'bha'},{id: 2, name: 'mon'},{id: 3, name: 'iop'}],
            participantVotes: [{id: 1, name: 'bha'},{id: 2, name: 'mon'},{id: 3, name: 'iop'}]
        },
        {
            id: 3,
            desc: 'lorem 20 ffncsoi',
            numberOfParticipants: 4,
            participants: [{id: 1, name: 'ram'},{id: 2, name: 'mohan'},{id: 3, name: 'lask'},{id: 4, name: 'sam'}],
            participantVotes: [{id: 1, name: 'ram'},{id: 2, name: 'mohan'},{id: 3, name: 'lask'},{id: 4, name: 'sam'}]
        }
    ]
}

// reducer
const participantsReducer = (state = initState, action) => {
    switch(action.type){
        // case actions.participantNumber :
        //     return {
        //         ...state,
        //         polls : [
        //             ...state.polls,
        //             {
        //                 numberOfParticipants: action.payload.numberOfParticipants
        //             }
        //         ]
        //     }

            case "Add_Poll":
                // console.log('arrived in reducer')
                return{
                    polls: [
                        ...state.polls,
                        {
                            id: ++id,
                            numberOfParticipants: action.payload.numberOfParticipants,
                            participants: action.payload.participants,
                            // participantVotes: []
                        }
                    ]
                }

        default :
            return state
    }
}

export default participantsReducer