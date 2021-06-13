import React from 'react'
import PollList from '../poll/PollList'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
// import { Logout } from '../../redux/actions.js/authActions'

function Dashboard(props) {
    const {data} = props
    return (
        <div>
            Welcome to the poll booth
            { data ? <PollList polls={data} /> : <div>Loading..</div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        data: state.firestore.ordered.polls
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return{
//         Logout: () => dispatch(Logout())
//     }
// }


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'polls'}
    ])
)(Dashboard)