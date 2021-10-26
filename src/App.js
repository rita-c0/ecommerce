import './App.css';
import MainPage from './MainPage';
// import Footer from './Footer';
import { BrowserRouter, Route} from 'react-router-dom';
import Dettaglio from './Dettaglio';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/ecommerce" component={MainPage} />
        <Route exact path="/dettaglio/:id" component={Dettaglio} />
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;





