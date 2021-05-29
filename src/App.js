import './App.css'
import { Provider }  from 'react-redux'
import store from './store'
import Router from './Router'
import { CssBaseline } from '@material-ui/core';
// import {makeStyles} from '@material-ui/core'

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: '#222f3e'
//   }
// })

function App() {
  // const classses = useStyles()
  return (
    <Provider store={store}>
      <CssBaseline />
      <div>
        <Router />
      </div>
    </Provider>
  );
}

export default App;