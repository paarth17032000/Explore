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

export const participants = (num) => {
    return(
        {
            type: "participants",
            payload: {
                num: num
            }
        }
    )
}