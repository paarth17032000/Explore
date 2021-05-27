import './App.css'
import {Provider}  from 'react-redux'
import store from './store'
import Preview from './components/Preview'

function App() {
  return (
    <Provider store={store}>
      <Preview />
    </Provider>
  );
}

export default App;
