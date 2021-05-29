import { Container, makeStyles, Typography, TextField, Button, Box, Grid} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { participants } from '../redux/actions.js/participantsAction'

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
        marginTop: '15px',
    },
    btn: {
        marginTop: '45px',
    },
    color: {
        // backgroundColor: '#fbc531',
        textAlign: 'center'
    }
})

function Participants(props) {
    const classes = useStyles()

    const { numberOfParticipants, participants} = props
    // participants('hello', 2);
    // console.log(props)

    const handleName = (e,i) => {
        participants(e.target.value,i)
        console.log(i,e.target.value)
    }

    let names = []
    for (let i = 1; i <= numberOfParticipants; i++) {
        names.push(
            <TextField
            variant="standard"
            error={false}
            key={i}
            className={classes.mp}
            label={`Partcipant Name ${i}`}
            onChange={ e => handleName(e,i) }
            />
        )
    }

    return(
        <Container className={classes.root}> 

        { numberOfParticipants ? ( 
            <Box>

                <Grid container spacing={3} className={classes.color}>
                    { names.map( element => {
                        console.log(element.key)
                        // let key = key+1
                        return(
                            <Grid item xs={12} sm={6} xl={3} key={element.key} >
                                {element}
                            </Grid>
                        )
                    })}
                </Grid>
            
                <Typography align="center">
                    <Button
                    variant="contained"
                    color="primary"
                    align="center"
                    component={Link}
                    to="/vote"
                    type="submit"
                    className={`${classes.btn}`}
                    >
                        Next
                    </Button>
                </Typography>
            </Box>
        ): (
            <Typography variant="h2" align="center" color="primary">
                No Participants
            </Typography>
        ) }

        </Container>
    )
}




const mapStateToProps = (state) => {
    return{
        numberOfParticipants: state.participant.numberOfParticipants
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        participants: (e) => dispatch(participants(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Participants)