import React, {Component} from 'react';
import logo from "../logo.svg";
import './pool.scss';

class Pool extends Component{
    render(){
        return(
            <div className="pool">
                <div className="pool-container">
                    <div className="pool-img">
                        <img src={logo} alt="es un dai"/>
                    </div>
                    <div className="publicidad">
                        <p>Venga y gane mucho dinero aportando liquidez en un sirteo sin pérdidas</p>
                        <h1>1000 D</h1>
                    <div className="thing">yo bien</div>
                    </div>
                    <button>Participar</button>
                    <a href="/como">Cómo Funciona</a>
                    <div className="pool-pozo">
                        Personas que entraron
                    </div>
                </div>
            </div>
        )
    }
}

export default Pool;