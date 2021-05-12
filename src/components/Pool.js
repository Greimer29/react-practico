import React, {Component} from 'react';
//;
import './pool.scss';

class Pool extends Component{
    timer(){
        let newTickets = window.prompt(`Mano dame los tickets perro`)
        console.log(newTickets+5)
    }
    render(){
        return(
            <div className="pool">
                <div className="pool-clock"><h3>Time</h3></div>
                    <div className="pool-container">
                        <div className="pool-img">
                        </div>
                        <div className="publicidad">
                            <p>Venga y gane mucho dinero aportando liquidez en un sorteo sin pérdidas</p>
                            <h1 className="premio">1000 <span className="dai"></span></h1>
                        <div className="thing"><p>yo bien</p></div>
                    </div>
                    <button className="btn btn-warning w-100" onClick={this.timer}>Participar</button>
                    <a href="/como" className="link">Cómo Funciona</a>
                    <div className="pool-pozo">
                        <div className="container">
                            Personas que entraron
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pool;