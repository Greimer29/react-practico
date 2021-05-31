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
          <Route path="/billetera" exact={true} component={Wallet}/>
          <Route path="/tickets" exact={true} component={InputTicket}/>
      </Router>
  );
}

export default App;