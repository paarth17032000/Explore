import React from 'react'
import {Link} from 'react-router-dom'
import { Box, Button, Container, makeStyles, Typography} from '@material-ui/core'
import { connect } from 'react-redux'
import { participantVote } from '../redux/actions.js/participantsAction'

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

function Vote(props) {
    const classes = useStyles()
    const { participants, participantVote } = props;
    // console.log(participants)


    const handleVote = (id) => {
        participantVote(id)
    }

    return (
        <>
            <Container className={`${classes.root}`}>
                <Typography variant="h3" color="secondary">
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
                    { participants ? (
                        participants.map( object => {
                            return(
                                <Button 
                                variant="contained" 
                                key={object.id}
                                component={Link}
                                to='/Result'
                                className={classes.mp}
                                color="primary"
                                onClick={ () => handleVote(object.id)}
                                >
                                    {object.name}
                                </Button>
                            )
                        })
                    ) : null }
                </Box>
            </Container>
        </>
    )
}



const mapStateToProps = (state) => {
    return{
        participants: state.participant.participants
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        participantVote: (e) => dispatch(participantVote(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote)