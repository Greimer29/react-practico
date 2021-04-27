import React, { Component } from 'react';
import '../App.css';
import './sidebar.components.scss';

class Options extends Component {
    render() {
        return (
            <div className="option">
                <div className="container">
                    <a href="/tickets" className="link">
                        <div className="option-img text-center">
                        </div>
                        <div className="option-description ms-2">
                            {
                                this.props.imagen
                            }
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar" className="sidebar">
                <div className="user">
                    <div className="user-option-img text-center">
                        <i className="bi bi-person"></i>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <Options imagen="Tickets" />
                    <Options imagen="Billetera" />
                    <Options imagen="Ajustes" />
                </div>
            </div >
        )
    }
}

export default Sidebar;