import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

function Guest(props) {
    const {children, auth} = props

    if( auth.uid ) {
        return <Redirect to='/dashboard' />
    } 

    return <>{children}</>
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Guest)