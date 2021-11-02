import './App.css';
import MainPage from './MainPage';
// import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Switch,Route} from 'react-router-dom';

import Dettaglio from './Detail';


function App() {
  return (
      // <Router basename='/'>
        <Switch>
        <Route path="/dettaglio/:id" component={Dettaglio} />
        <Route path="/" component={MainPage} />
        </Switch>
      // </Router>
  );
}

export default App;





