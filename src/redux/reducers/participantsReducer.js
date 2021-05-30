// init state []
const initState = {
    numberOfParticipants: 0,
    participants: [],
    participantVotes: []
}

let id = 0
// reducer
const participantsReducer = (state = initState, action) => {
    switch(action.type){
        case "participantNumber":
            return {
                ...state,
                numberOfParticipants: action.payload.numberOfParticipants
            }

        case "participants":
            console.log(11,state)
            return {
                ...state,
            
                participants: [
                    ...state.participants,
                    {
                        id: action.payload.id,
                        name: action.payload.name
                    }
                ],

                participantVotes: [
                    ...state.participantVotes,
                    // participantVotes[action.payload.id] = 0
                ],

            }

        case "participantVote":
            // console.log(1111)
            return{
                ...state,
                participantVotes : [
                    ...state.participantVotes,
                    console.log(state.participantVotes)
                ]
            }

        default :
            return state
    }
}

export default participantsReducer