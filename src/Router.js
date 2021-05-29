import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
const AddParticipants = React.lazy(() => import('./components/AddParticipants'))
const Participants = React.lazy(() => import('./components/Participants'))

export default function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading....</div>}>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={AddParticipants}/>
                    <Route exact path='/participants' component={Participants} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}
