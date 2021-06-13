import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import routes, { renderRoutes } from './Router'
// import Layout from './components/layout/Layout';
import { newTheme } from './theme/Theme'

function App() {
  return (
    <MuiThemeProvider theme={newTheme}>
      <BrowserRouter>
        {/* <Layout> */}
          <CssBaseline />
          {renderRoutes(routes)}
          {/* <Router routes={routes} /> */}
        {/* </Layout> */}
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;