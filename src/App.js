import './App.css';
import MainPage from './MainPage';
// import Footer from './Footer';
import { HashRouter as Router,Switch,Route} from 'react-router-dom';
import Dettaglio from './Dettaglio';


function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/dettaglio/:id" exact component={Dettaglio} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;





