import { Container, makeStyles, Typography, TextField, Button, Box, Grid} from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux'

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
        backgroundColor: '#fbc531',
    }
})

const handleName = (e) => {
    console.log(e)
}

function Participants(props) {
    const classes = useStyles()
    const [name, setName] = useState('')
    const { numberOfParticipants } = props
    console.log(props)
    let Names = []
    for (let i = 1; i <= numberOfParticipants; i++) {
        Names.push(
            <TextField
            variant="standard"
            error={false}
            key={i}
            className={classes.mp}
            sx={{m: 1, p: 1}}
            label={`Partcipant Name ${i}`}
            // name={name}
            onChange={ handleName }
            />
        )
    }
    return(
        <Container className={classes.root}> 

        { numberOfParticipants ? ( 
            <Box>
                <Grid container spacing={3} className={classes.color}>
                    { Names.map( element => {
                        return(
                            <Grid item xs={12} sm={6} xl={4}  key={element.key}>
                                {console.log(element.key)}
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

// const mapDispatchToProps = (dispatch) => {
//     return{
//         Participants: () => dispatch()
//     }
// }

export default connect(mapStateToProps)(Participants)