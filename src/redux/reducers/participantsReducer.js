// init state []
const initState = {
    numberOfParticipants: 0,
    participants: [
        "avcd",
        "dsbr"
    ],
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
            return {
                ...state,
                
                // for (let i = 0; i < numberOfParticipants; i++) {
                    
                    
                // },

                participants: [
                    {
                        id: ++id,
                        fname: action.payload.participants.fname
                    }
                ]
            }

        default :
            return state
    }
}

export default participantsReducer