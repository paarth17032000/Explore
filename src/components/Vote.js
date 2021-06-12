// import React from 'react'
// import { Box, Button, Container, makeStyles,Typography} from '@material-ui/core'
// // import {experimentalStyled } from '@material-ui/styles'
// import { connect } from 'react-redux'
// import { participantVote } from '../redux/actions.js/participantsAction'


// // const VoteButton = styled(Button)(
// //     ({theme}) => `
// //       background-color: ${theme.primary},
// //       text-decoration: none,
// //       color: white',
// //       padding: 10px 30px,

// //     `
// //   )

// const useStyles = makeStyles({
//     root: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         minHeight: 'calc(92.6vh)',
//         // backgroundColor: '#ccc'
//     },
//     mp: {
//         marginTop: '20px',
//         // backgroundColor: '#000'
//     },
//     btn: {
//         marginTop: '45px',
//     },
//     color: {
//         backgroundColor: '#fbc531',
//         textAlign: 'center'
//     }
// })

// function Vote(props) {
//     const classes = useStyles()
//     const { participants, participantVote } = props;

//     const handleVote = (id) => {
//         participantVote(id)
//         props.history.push('/')
//     }

//     return (
//         <>
//             <Container className={`${classes.root}`}>
//                 <Typography variant="h3" align="center" color="secondary">
//                     Vote your favourite
//                 </Typography>
//                 <Box 
//                 component="div" 
//                 display="flex"
//                 mt={5}
//                 px={2}
//                 flexDirection="column"
//                 justifyContent="around"
//                 width="50%"
//                 height="auto"
//                 >
//                     { participants ? (
//                         participants.map( object => {
//                             return(
//                                 <Button
//                                 variant="contained" 
//                                 key={object.id}
//                                 className={classes.mp}
//                                 color="secondary"
//                                 onClick={ () => handleVote(object.id)}
//                                 >
//                                     {object.name}
//                                 </Button>
//                             )
//                         })
//                     ) : null }
//                 </Box>
//             </Container>
//         </>
//     )
// }



// const mapStateToProps = (state) => {
//     return{
//         participants: state.participant.participants
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         participantVote: (e) => dispatch(participantVote(e))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Vote)