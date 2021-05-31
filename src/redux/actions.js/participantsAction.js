//  actions

// importing action types
import * as actions from './actionTypes'

export const participantNumber = (numberOfParticipants) => {
    return(
        {
            type: actions.participantNumber,
            payload: {
                numberOfParticipants: numberOfParticipants
            }
        }
    )
}

export const participants = (name, id) => {
    return(
        {
            type: actions.participants,
            payload: {
                name: name,
                id: id,
            }
        }
    )
}

export const participantVote = (id) => {
    return(
        {
            type: actions.participantVote,
            payload: {
                id: id
            }
        }
    )
}