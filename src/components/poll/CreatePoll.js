import React, { Component } from 'react'
import { TextField, Typography, Button, Grid } from "@material-ui/core"
import { AddPoll } from "../../redux/actions.js/participantsAction";
import { connect } from 'react-redux'
import { withStyles } from "@material-ui/styles";
// import { participants, participantNumber } from '../redux/actions.js/participantsAction'

const styles = theme => ({
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
    },
});

class CreatePoll extends Component {
    constructor(props){
        super(props)
        this.state = {
            numberOfParticipants: 0,
            count: 0,
            participants: []
        }
    }

    render() {

        const { classes } = this.props;


        let arrParticipants = []
        let arrVotes = []
        const PollParticipants = (name,index) => {
            console.log(index)
            arrParticipants = [...arrParticipants, {
                id: index,
                name: name
            }] 
            arrVotes = [...arrVotes, {
                id: index,
                votes: 0
            }]
        }

        let namesArr= [];
        const handleName = (e,i) => {
            // i is reduced by 1 because i commin has looped over from 1 but genereally we take index of first as 0
            i -= 1;
            namesArr[i] = e.target.value;
        }

        const handleNext = () => {
            console.log(2201,this.state)
            if(this.state.count === 1){
                // console.log('sucess', this.state)

                let index = 0;
                namesArr.forEach( item => {
                    PollParticipants(item,index)
                    // console.log(index,item)
                    index++
                })

                this.props.createPoll(this.state, arrParticipants, arrVotes)
                console.log(this.state, arrParticipants)
                
                this.props.history.push('/dashboard')
            }
            this.setState({
                count: this.state.count + 1
            })   
        }

    let namesTag = []
    for (let i = 1; i <= this.state.numberOfParticipants; i++) {
        namesTag.push(
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

        return (
            <>
                { this.state.count === 0 ? (
                    <div className={classes.color}>
                        <form 
                        className={`${classes.form} ${classes.root}`}
                        onSubmit={handleNext}
                        >
                            <TextField
                            className={classes.m}
                            error={false}
                            variant="standard"
                            id="standard-error"
                            label="Number of Participants"
                            onChange={ (e) => this.setState({numberOfParticipants: e.target.value}) }
                            />
                            <Button 
                            variant="contained" 
                            color="primary"
                            type="submit"
                            >
                                Next
                            </Button>
                        </form>
                    </div>
                ): null}   
                { this.state.count === 1 ? (
                    <form onSubmit={handleNext}>
                        <Grid container spacing={3} className={classes.color}>
                            { namesTag.map( element => {
                                // console.log(element.key)
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
                            type="submit"
                            className={`${classes.btn}`}
                            >
                                Next
                            </Button>
                        </Typography>
                    </form>
                ):null}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createPoll: (state, arrParticipants, arrVotes) => dispatch(AddPoll(state, arrParticipants, arrVotes))
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles, {withTheme:true})(CreatePoll))