//  actions

export const participantNumber = (numberOfParticipants) => {
    return(
        {
            type: "participantNumber",
            payload: {
                numberOfParticipants: numberOfParticipants
            }
        }
    )
}

export const participants = (name, id) => {
    return(
        {
            type: "participants",
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
            type: "participantVote",
            payload: {
                id: id
            }
        }
    )
}