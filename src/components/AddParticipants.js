import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { Box, Button, Container, makeStyles} from "@material-ui/core"
import { participantNumber } from "../redux/actions.js/participantsAction";
import { connect } from 'react-redux'

const useStyles = makeStyles({
  root: {
    backgroundColor: "#badc58"
  },
  m: {
    margin: "20px"
  },
  p: {
    padding: "10px",
  },
  form: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
  }
});

function AddParticipants({participantNumber}) {
    const [val, setVal] = useState()
    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault()
        participantNumber(parseInt(val))
    }
    return (
        <Container>
            <form 
            className={classes.form}
            >
                <TextField
                className={classes.m}
                error={false}
                variant="standard"
                id="standard-error"
                label="Number of Participants"
                onChange={ (e) => { setVal(e.target.value) }}
                />
                <Button 
                variant="contained" 
                color="primary"
                type="submit"
                onClick={handleSubmit}
                >
                    Next
                </Button>
            </form>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
   return{
    participantNumber: (e) => dispatch(participantNumber(e))
   }
}

export default connect(null, mapDispatchToProps)(AddParticipants)