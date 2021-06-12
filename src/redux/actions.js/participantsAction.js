//  actions

// importing action types
// import * as actions from './actionTypes'

// export const participantNumber = (numberOfParticipants) => {
//     return(
//         {
//             type: actions.participantNumber,
//             payload: {
//                 numberOfParticipants: numberOfParticipants
//             }
//         }
//     )
// }

// export const participants = (name, id) => {
//     return(
//         {
//             type: actions.participants,
//             payload: {
//                 name: name,
//                 id: id,
//             }
//         }
//     )
// }

// export const participantVote = (id) => {
//     return(
//         {
//             type: actions.participantVote,
//             payload: {
//                 id: id
//             }
//         }
//     )
// }

export const AddPoll = (state,participants) => {
    const { numberOfParticipants } = state
    console.log('arrived in actions : ',state)
    return(dispatch, getstate) => {
        // async calls

        // reducer call
        dispatch({
            type: "Add_Poll",
            payload: {
                numberOfParticipants,
                participants
            }
        })
    }
}