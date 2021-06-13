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
// import * as actions from '../actions.js/actionTypes'


// let id = 3;
// init state []
const initState = {
    polls : [
        {
            id: 1,
            desc: 'lorem 20 ffncsoi',
            numberOfParticipants: 2,
            participants: [{id: 1, name: 'ram'},{id: 2, name: 'ramesh'}],
            participantVotes: [{id: 1, votes: 0},{id: 2, votes: 0}]
        },
        {
            id: 2,
            desc: 'lorem 20 ffncsoi',
            numberOfParticipants: 3,
            participants: [{id: 1, name: 'bha'},{id: 2, name: 'mon'},{id: 3, name: 'iop'}],
            participantVotes: [{id: 1, votes: 0},{id: 2, votes: 0},{id: 3, votes: 0}]
        },
        {
            id: 3,
            desc: 'lorem 20 ffncsoi',
            numberOfParticipants: 4,
            participants: [{id: 1, name: 'ram'},{id: 2, name: 'mohan'},{id: 3, name: 'lask'},{id: 4, name: 'sam'}],
            participantVotes: [{id: 1, votes: 0},{id: 2, votes: 0},{id: 3, votes: 0},{id: 4, votes: 0}]
        }
    ]
}

// reducer
const participantsReducer = (state = initState, action) => {
    switch(action.type){

        case "Add_Poll":
            console.log('success')
            // return{
            //     polls: [
            //         ...state.polls,
            //         {
            //             id: ++id,
            //             numberOfParticipants: action.payload.numberOfParticipants,
            //             participants: action.payload.participants,
            //             participantVotes: action.payload.participantVotes
            //         }
            //     ]
            // }

        case "Add_Poll_Error":
            console.log('error : ',action.payload)
            // return{
            //     polls:[

            //     ]
            // }

        case "Update_Poll":
            console.log('success ',11,action.payload)

        case "Update_Poll_Error":
            console.log('error : ',77,action.payload)

        case "participantVote":
            // let pollToVote = polls.filter(poll => poll.id === action.payload.poll_id)
            return{
                polls: state.polls.map(poll => {
                    return(
                        poll.id !== action.payload.poll_id ? poll : {
                            ...poll,
                            participantVotes: poll.participantVotes.map(participant => {
                                return(
                                    participant.id !== action.payload.id ? participant : {
                                        ...participant,
                                        votes: participant.votes+1
                                    }
                                )
                            })
                        }
                    )
                })
            }

        // case "participantVote":
        //     let pollToVote = polls.filter(poll => poll.id === action.payload.poll_id)
        //     return{
        //         polls: state.polls.map(poll => {

        //         })
        //     }

        default :
            return state
    }
}

export default participantsReducer