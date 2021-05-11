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
        e.preventDefault();
        alert(this.state.wallet)
    }

    render(){
        return(
            <div className="col-md-5">
                <div className="card m-3">
                    <div className="card-header"><h3>Ingrese nro de Billetera <span className="badge badge-pill badge-danger bg-danger">{this.state.wallet}</span></h3></div>
                        <form className="card-body" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name="wallet"  
                                    className="form-control"
                                    placeholder="Numero de Billetera" 
                                    onChange={this.handleInput} 
                                />
                            </div>
                            <button type="submit"className="btn-primary">Guardar</button>
                        </form>
                </div>
            </div>
        )
    }
}

export default Wallet;