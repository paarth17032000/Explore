import React, { Suspense, Fragment, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import Authenticated from './components/gaurds/Authenticated'
import Guest from './components/gaurds/Guest'

// console.log(routes)
export const renderRoutes = (routes) => {
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <Switch>
                { routes.map( (route, i) => {
                    const Gaurd = route.gaurd || Fragment;
                    const Component = route.component; 
                    return(
                        <Route
                        key={i}
                        exact={route.exact}
                        path={route.path}
                        render={ (props) => (
                                <Gaurd>
                                    <Component {...props} />
                                </Gaurd>
                        )}
                        />
                    )
                })}
            </Switch>
        </Suspense>
    )
}
const routes = [
    {
        exact: true,
        path: '/',
        component: lazy(() => import('./components/layout/Landing'))
    },
    {
        exact: true,
        path: '/dashboard',
        gaurd: Authenticated,
        component: lazy(() => import('./components/dashboard'))
    },
    {
        exact: true,
        path: '/poll',
        gaurd: Authenticated,
        component: lazy(() => import('./components/poll/CreatePoll'))
    },
    {
        exact: true,
        path: '/poll/:poll_id',
        gaurd: Authenticated,
        component: lazy(() => import('./components/poll/SinglePoll'))
    },
    {
        exact: true,
        path: '/login',
        gaurd: Guest,
        component: lazy(() => import('./components/auth/Login'))
    },
    {
        exact: true,
        path: '/signup',
        gaurd: Guest,
        component: lazy(() => import('./components/auth/SignUp'))
    }
]

export default routes


// const SinglePoll = lazy(() => import('./components/poll/SinglePoll'))
// const CreatePoll = lazy(() => import('./components/poll/CreatePoll')) 
// const PollList = lazy(() => import('./components/poll/PollList')) 
// const Dashboard = lazy(() => import('./components/dashboard'))
// const AddParticipants = lazy(() => import('./components/poll/AddParticipants'))
// const Participants = lazy(() => import('./components/Participants'))
// const Vote = lazy(() => import('./components/Vote'))
// const Result = lazy(() => import('./components/Result'))



// export default function Router() {
//     return (
//         <Suspense fallback={<div>Loading....</div>}>
//             <Switch>
//                 {/* <Route exact path='/dashboard' component={Dashboard}/> */}
//                 <Route exact path='/poll' component={CreatePoll} />
//                 <Route exact path='/poll/:poll_id' component={SinglePoll} />
//                 <Route exact path='/vote' component={Vote} />
//                 <Route exact path='/result' component={Result} />
//             </Switch>
//         </Suspense>
//     )
// }
