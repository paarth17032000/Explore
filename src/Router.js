import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
const AddParticipants = lazy(() => import('./components/AddParticipants'))
const Participants = lazy(() => import('./components/Participants'))
const Vote = lazy(() => import('./components/Vote'))
const Result = lazy(() => import('./components/Result'))

export default function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading....</div>}>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={AddParticipants}/>
                    <Route exact path='/participants' component={Participants} />
                    <Route exact path='/vote' component={Vote} />
                    <Route exact path='/result' component={Result} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}
