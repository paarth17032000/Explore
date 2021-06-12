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

export const VoteParticipant = (poll_id,newParticipantVotes) => {
    return(dispatch, getstate, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()

        // async call for update
        firestore.collection('polls').doc(poll_id).update({
            participantVotes: newParticipantVotes
        }).then(() => {
            dispatch({
                type: "Update_Poll",
                payload: {
                    participantVotes: newParticipantVotes
                }
            })
        }).catch((err) => {
            dispatch({
                type: "Update_Poll_Error",
                payload: err
            })
        })
    }
}

export const AddPoll = (state, participants, participantVotes) => {
    const { numberOfParticipants } = state
    console.log('arrived in actions : ',state)
    return(dispatch, getstate, { getFirebase, getFirestore }) => {
        // const firebase = getFirebase()
        const firestore = getFirestore()

        // async calls
        firestore.collection('polls').add({
            numberOfParticipants,
            participants,
            participantVotes,
            authorFirstName: 'Paarth',
            authorLastName: 'Agarwal',
            authorId: 12312,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: "Add_Poll",
                payload: {
                    numberOfParticipants,
                    participants,
                    participantVotes
                }
            })
        }).catch((err) => {
            dispatch({
                type: "Add_Poll_Error",
                payload: err
            })
        })

        // reducer call
        // dispatch({
        //     type: "Add_Poll",
        //     payload: {
        //         numberOfParticipants,
        //         participants,
        //         participantVotes
        //     }
        // })
    }
}

// export const participantVote = (poll_id,id) => {
//     return(
//         {
//             type: "participantVote",
//             payload: {
//                 poll_id,
//                 id
//             }
//         }
//     )
// }