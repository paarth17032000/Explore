import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Layout from '../layout/Layout'

function Authenticated(props) {
    const {children, auth} = props

    if(!auth.uid){
        return <Redirect to='/login' />
    } 

    return (<Layout>{children}</Layout>)
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Authenticated)