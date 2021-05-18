import React, {Component} from 'react';

class Wallet extends Component{
    constructor(){
        super();
        this.state={
            wallet:""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const {value,name} = e.target;
        this.setState({
            [name]:value
        })
        console.log(this.state.wallet,value,name)
    }

    handleSubmit(e){

    }

    render(){
        return(
            <div className="col-md-5 container px-1">
                <div className="card ">
                    <div className="card-header text-dark">
                        <h3>Ingrese nro de Billetera <span className="badge badge-danger bg-danger">{this.state.wallet}</span>
                        </h3>
                    </div>
                        <form className="card-body" onSubmit={this.handleSubmit} action="/">
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name="wallet"  
                                    className="form-control mb-2"
                                    placeholder="Numero de Billetera" 
                                    onChange={this.handleInput} 
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                </div>
            </div>
        )
    }
}

export default Wallet;