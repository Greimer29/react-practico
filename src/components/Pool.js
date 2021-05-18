import  React, {Component} from 'react';
import './pool.scss';

class Pool extends Component{
    render(){
        return(
            <div className="pool">
                <div id="pool-clock"className="pool-clock"><h3>Time</h3></div>
                    <div className="pool-container">
                        <div className="pool-img">
                        </div>
                        <div className="publicidad">
                            <p className="my-2">
                                Participa y compite por un premio de hasta:
                            </p>
                            <h1 className="premio my-0">1.000 <span className="dai"></span></h1>
                        </div>
                    <button className="btn btn-warning my-2 w-100">Participar</button>
                        <a href="/como" className="link my-2">Cómo Funciona</a>
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