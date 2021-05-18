import logo from "./logo.svg";
import "./App.css";
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import InputTicket from './pages/InputTicket';
import Wallet from './pages/Wallet';
import Pool from "./components/Pool";

function App() {
  return (
      <Router>
          <Sidebar />
        <Pool/>
          <header className="App-header" >
          <Route path="/billetera" exact={true} component={Wallet}/>
          <Route path="/tickets" exact={true}component={InputTicket}/>
            <img src={logo}
              className="App-logo"
              alt="logo" />
              < p id="estado">
              Edita < code > src / App.js </code> and save to reload.
              </p>
            <a className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"> 
              Learn React 
            </a>
          </header>
      </Router>
  );
}

export default App;