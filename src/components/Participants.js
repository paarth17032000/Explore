import { Container, TextField } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'

function Participants(props) {
    const { numberOfParticipants } = props
    console.log(numberOfParticipants)
    return(
        <Container>
            { numberOfParticipants }
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