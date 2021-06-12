import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
const CreatePoll = lazy(() => import('./components/poll/CreatePoll')) 
const PollList = lazy(() => import('./components/poll/PollList')) 
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
                <Route exact path='/poll' component={CreatePoll} />
                {/* <Route exact path='/create' component={AddParticipants}/>
                <Route exact path='/participants' component={Participants} /> */}
                <Route exact path='/vote' component={Vote} />
                <Route exact path='/result' component={Result} />
                {/* <Route exact path='/polls' component={PollList} /> */}
            </Switch>
        </Suspense>
    )
}
