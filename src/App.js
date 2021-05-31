import "./App.css";
import './components/sidebar.components.scss';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

import InputTicket from './pages/InputTicket';
import Wallet from './pages/Wallet';
import Ajustes from './pages/Ajustes';
import Pool from "./components/Pool";
import { Personas } from './db.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Personas
    }
  }
  render() {
    const user = this.state.Personas[1]
    return (
      <Router>
        <IconContext.Provider value={{size:'1.5rem',className:"mt-2"}}>
          <div id="sidebar" className="sidebar">
            <div className="user">
              <div className="user-option-img text-center">
                <FaIcons.FaUserAlt size="1.8rem" className="mt-2"/>
              </div>
              <div className="user-description">
                <h5>{`${user.name} ${user.apellido}`}</h5>
              </div>
            </div>

            <hr />

            <div className="container">
              <div className="option">
                <div className="container">
                  <NavLink to="/tickets" exact className="link">
                    <div className="option-img text-center">
                      <FaIcons.FaTicketAlt />
                    </div>
                    <div className="option-description">
                      <h6>Tickets</h6><span className="badge bg-success ms-4">{user.tickets}</span>
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="option">
                <div className="container">
                  <NavLink to="/billetera" exact className="link">
                    <div className="option-img text-center">
                      <FaIcons.FaWallet />
                    </div>
                    <div className="option-description">
                      <h6>Billetera</h6>
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="option">
                <div className="container">
                  <NavLink to="/ajustes" exact className="link">
                    <div className="option-img text-center">
                      <FaIcons.FaCog/>
                    </div>
                    <div className="option-description">
                      <h6>Ajustes</h6>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </IconContext.Provider>
        <Pool/>
        <Route path="/billetera" exact={true} component={Wallet}/>
        <Route path="/tickets" exact={true} component={InputTicket}/>
        <Route path="/ajustes" exact={true} component={Ajustes}/>
      </Router>
    )
  }
}

export default App;