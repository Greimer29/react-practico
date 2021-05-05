import { users } from '../db.json';
import React, { Component } from 'react';
import '../App.css';
import './sidebar.components.scss';

class Options extends Component {
    render() {
        return (
            <div className="option">
                <div className="container">
                    <a href={this.props.link} className="link">
                        <div className="option-img text-center">
                        </div>
                        <div className="option-description">
                            <h6>{this.props.description}</h6>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            users
        }
    }
    render() {
        const user = this.state.users[1]
        return (
            <div id="sidebar" className="sidebar">
                <div className="user">
                    <div className="user-option-img text-center">
                        <i className="bi bi-person"></i>
                    </div>
                    <div className="user-description">
                        <h5>{user.name}</h5>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <Options link='/tickets' description='Tickets' />
                    <Options link='/billetera' description="Billetera" />
                    <Options link='/ajustes' description="Ajustes" />
                </div>
            </div >
        )
    }
}

export default Sidebar;