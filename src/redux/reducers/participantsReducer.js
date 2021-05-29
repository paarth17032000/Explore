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
            let name = action.payload.name;
            return {
                ...state,
            
                participants: [
                    ...state.participants,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                    }
                ]

            }

        default :
            return state
    }
}

export default participantsReducer