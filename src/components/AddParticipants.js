import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { Button, Container, makeStyles} from "@material-ui/core"
import { participantNumber } from "../redux/actions.js/participantsAction";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    backgroundColor: "#badc58",
    minHeight: 'calc(92.6vh)',
    color: '#ffffff'
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
      participantNumber(parseInt(val))
    }
    return (
      <Container>
        <form 
        className={`${classes.form} ${classes.root}`}
        // onSubmit={handleSubmit}
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
          component={Link}
          to="/participants"
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