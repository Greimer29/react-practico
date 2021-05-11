import { Personas } from '../db.json';
import React, { Component } from 'react';
import '../App.css';
import './sidebar.components.scss';
import * as FaIcons from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            Personas
        }
    }
    render() {
        const user = this.state.Personas[1]
        return (
            <div id="sidebar" className="sidebar">
                <div className="user">
                    <div className="user-option-img text-center">
                        <FaIcons.FaUserAlt size="1.8rem" className="mt-2"/>
                    </div>
                    <div className="user-description">
                        <h5>{user.name +" "+ user.apellido}</h5>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <div className="option">
                        <div className="container">
                            <NavLink to="/tickets" exact className="link">
                                <div className="option-img text-center">
                                <FaIcons.FaTicketAlt size="1.5rem" className="mt-2"/>
                                </div>
                                <div className="option-description">
                                    <h6>Tickets</h6>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="option">
                        <div className="container">
                            <NavLink to="/billetera" exact className="link">
                                <div className="option-img text-center">
                                    <FaIcons.FaWallet size="1.5rem" className="mt-2"/>
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
                                    <FaIcons.FaCog size="1.5rem" className="mt-2"/>
                                </div>
                                <div className="option-description">
                                    <h6>Ajustes</h6>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;