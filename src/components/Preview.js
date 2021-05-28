import React from 'react'
import { connect } from 'react-redux'
import { participants } from '../redux/actions.js/participantsAction'
import AddParticipants from './AddParticipants'
import Participants from './Participants'

export default function Preview() {
    return (
        <div>
            <AddParticipants />
            <Participants />
        </div>
    )
}




// function Preview(props) {
//     return (
//         <div>
//             <AddParticipants />
//             {/* <Participants />
//             { if } */}
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return{
//         numberOfParticipants: state.participant
//     }
// }


// export default connect(mapStateToProps)(Preview)