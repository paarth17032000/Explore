import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
const AddParticipants = React.lazy(() => import('./components/AddParticipants'))
const Participants = React.lazy(() => import('./components/Participants'))
const Vote = React.lazy(() => import('./components/Vote'))

export default function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading....</div>}>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={AddParticipants}/>
                    <Route exact path='/participants' component={Participants} />
                    <Route exact path='/vote' component={Vote} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}
