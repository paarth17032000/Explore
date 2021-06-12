// import React, { Component } from "react"
// import TextField from "@material-ui/core/TextField"
// import { Button } from "@material-ui/core"
// import { participantNumber } from "../../redux/actions.js/participantsAction";
// import { connect } from 'react-redux'
// import { withStyles } from "@material-ui/styles";

// const styles = theme => ({
//   root: {
//     // backgroundColor: "#badc58",
//     minHeight: 'calc(92.6vh)',
//     color: '#ffffff',
//     width: '100%'
//   },
//   m: {
//     margin: "20px"
//   },
//   p: {
//     padding: "10px",
//   },
//   form: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       flexDirection: "column"
//   },
// });

// class AddParticipants extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       val: 0
//     }
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if( this.state.val > 1 ){
//       this.props.participantNumber(this.state.val)
//       // this.props.history.push('/participants')
//     }
//   }

//   render(){
//     const {classes} = this.props
//     console.log(this.props)
//     return(
//       <div className={classes.color}>
//         <form 
//         className={`${classes.form} ${classes.root}`}
//         onSubmit={this.handleSubmit}
//         >
//           <TextField
//           className={classes.m}
//           error={false}
//           variant="standard"
//           id="standard-error"
//           label="Number of Participants"
//           onChange={ (e) => this.setState({val: e.target.value}) }
//           />
//           <Button 
//           variant="contained" 
//           color="primary"
//           type="submit"
//           >
//             Next
//           </Button>
//         </form>
//       </div>
//     )
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//    return{
//     participantNumber: (e) => dispatch(participantNumber(e))
//    }
// }

// export default connect(null, mapDispatchToProps)(withStyles(styles, {withTheme:true})(AddParticipants))