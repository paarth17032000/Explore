import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
const Dashboard = lazy(() => import('./components/dashboard'))
const AddParticipants = lazy(() => import('./components/poll/AddParticipants'))
const Participants = lazy(() => import('./components/Participants'))
const Vote = lazy(() => import('./components/Vote'))
const Result = lazy(() => import('./components/Result'))

export default function Router() {
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route exact path='/create' component={AddParticipants}/>
                <Route exact path='/participants' component={Participants} />
                <Route exact path='/vote' component={Vote} />
                <Route exact path='/result' component={Result} />
            </Switch>
        </Suspense>
    )
}
