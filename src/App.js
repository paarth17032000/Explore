import './App.css'
import {BrowserRouter} from 'react-router-dom'
import ThemeProvider from './theme/ThemeProvider'
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
    <ThemeProvider>
      <BrowserRouter>
        <CssBaseline />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;