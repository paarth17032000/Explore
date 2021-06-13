import React from 'react'
// import { Redirect } from 'react-router-dom'
import Layout from '../layout/Layout'

export default function Authenticated({children}) {
    // const {isAuth} = from firebase

    // if{!isAuth}{
    //     return <Redirect to='/login' />
    // }

    return <Layout>{children}</Layout>
}
