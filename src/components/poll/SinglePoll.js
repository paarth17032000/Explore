import React from 'react'
import { Box, Button, Container, makeStyles, Typography} from '@material-ui/core'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { VoteParticipant } from '../../redux/actions.js/participantsAction'

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: 'calc(92.6vh)',
        // backgroundColor: '#ccc'
    },
    mp: {
        marginTop: '20px',
        // backgroundColor: '#000'
    },
    btn: {
        marginTop: '45px',
    },
    color: {
        backgroundColor: '#fbc531',
        textAlign: 'center'
    }
})

function SinglePoll(props) {
    const classes = useStyles()
    const { poll, VoteParticipant } = props
    // const participantVotes = props.poll.participantVotes
    const poll_id = props.match.params.poll_id
    
    console.log(11, poll_id)

    const handleVote = (id) => {
        console.log(id)
        let newParticipantVotes = [];
        newParticipantVotes = poll.participantVotes.map(participant => {
            return(
                participant.id !== id ? participant : {
                    ...participant,
                    votes: participant.votes+1
                }
            )
        })
        // console.log(newParticipantVotes)
        VoteParticipant(poll_id,newParticipantVotes)
        props.history.push('/dashboard')
    }
    
    if( poll ){
        return(
            <Container className={`${classes.root}`}>
                <Typography variant="h3" align="center" color="secondary">
                    Vote your favourite
                </Typography>
                <Box 
                component="div" 
                display="flex"
                mt={5}
                px={2}
                flexDirection="column"
                justifyContent="around"
                width="50%"
                height="auto"
                >
                    { poll.participants.map( participant => {
                            return(
                                <Button
                                variant="contained" 
                                key={participant.id}
                                className={classes.mp}
                                color="secondary"
                                onClick={ () => handleVote(participant.id)}
                                >
                                    {participant.name}
                                </Button>
                            )
                        })
                    }
                </Box>
            </Container>

        )
    } else {
        return(
            <div>Go back...</div>
        )
    }
}

const mapStateToProps = (state, initProps) => {
    let id = initProps.match.params.poll_id
    let polls = state.firestore.data.polls
    let poll = polls ? polls[id] : null
    // console.log(poll)
    return{
        poll: poll
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        VoteParticipant: (poll_id,newParticipantVotes) => dispatch(VoteParticipant(poll_id,newParticipantVotes))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'polls'}
    ])
)(SinglePoll)

// const mapStateToProps = (state) => {
//     return{
//         polls: state.participant.polls
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SinglePoll)


// under const {poll} = props
// let poll_id = parseInt(props.match.params.poll_id); 
// let poll = polls.filter(poll => poll.id === poll_id)
// let participants = poll[0].participants
// // let participantVotes = poll[0].participantVotes
// console.log(poll,participants)