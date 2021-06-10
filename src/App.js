import './App.css'
import {BrowserRouter} from 'react-router-dom'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import Router from './Router'
import Layout from './components/layout/Layout';
import {newTheme} from './theme/Theme'

function App() {
  return (
    <MuiThemeProvider theme={newTheme}>
      <BrowserRouter>
        <Layout>
          <CssBaseline />
          <Router />
        </Layout>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;