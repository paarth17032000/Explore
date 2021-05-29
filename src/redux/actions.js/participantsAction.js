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
                id: id,
                name: name
            }
        }
    )
}