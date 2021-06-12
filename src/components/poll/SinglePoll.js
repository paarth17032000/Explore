import React from 'react'
import { Box, Button, Container, makeStyles, Typography} from '@material-ui/core'
import { connect } from 'react-redux'
// import { participantVote } from '../../redux/actions.js/participantsAction'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

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
    const { poll } = props
    // const {poll, participantVote} = props
    console.log(11,poll)
    // let poll_id = parseInt(props.match.params.poll_id); 
    // let poll = polls.filter(poll => poll.id === poll_id)
    // let participants = poll[0].participants
    // // let participantVotes = poll[0].participantVotes
    // console.log(poll,participants)

    const handleVote = (id) => {
        // console.log(id)
        // participantVotes.map(participant => {
        //     return(
        //         participant.id !== id ? participant : {
        //             ...participant,
        //             votes: participant.votes+1
        //         }
        //     )
        // })
        
        // participantVote(poll_id,id)
        props.history.push('/')
    }

        // <div>
        //     Welcome to the poll booth
        //     { polls ? <PollList polls={polls} /> : <div>Loading..</div>}
        // </div>

    return (
        <>
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
                    {/* <div>Go back...</div>  */}
                    { poll.participants ? (
                        poll.participants.map( participant => {
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
                    ) : <div>Go back...</div> }
                </Box>
            </Container>
        </>
    )
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

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'polls'}
    ])
)(SinglePoll)

// const mapStateToProps = (state) => {
//     return{
//         polls: state.participant.polls
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         participantVote: (poll_id,id) => dispatch(participantVote(poll_id,id))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SinglePoll)