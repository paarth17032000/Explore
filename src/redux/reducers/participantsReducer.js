// importing action types
import * as actions from '../actions.js/actionTypes'

// init state []
const initState = {
    numberOfParticipants: 0,
    participants: [],
    participantVotes: []
}

// reducer
const participantsReducer = (state = initState, action) => {
    switch(action.type){
        case actions.participantNumber :
            return {
                ...state,
                numberOfParticipants: action.payload.numberOfParticipants
            }

        case actions.participants :
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
                    {
                        id: action.payload.id,
                        vote: 0
                    }
                ]
            }

        case actions.participantVote :
            return{
                ...state,

                participantVotes: state.participantVotes.map( object => {
                    return(
                        object.id !== action.payload.id ?  object : {
                            ...object,
                            vote : object.vote+1
                        }
                    )
                })
            }

        default :
            return state
    }
}

export default participantsReducer