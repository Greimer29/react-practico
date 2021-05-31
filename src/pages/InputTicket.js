import React,{Component} from 'react';

class nose extends Component{
    constructor(){
        super();
        this.state={
            tickets:100
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){

    }
    handleSubmit(e){
        e.preventDefault()
        
    }
    render(){
        return (
        <div className="col-md-5 container">
        <div className="card">
            <div className="card-header"><h3>Ingrese nro de Billetera <span className="badge badge-pill badge-danger bg-danger">{this.state.tickets}</span></h3></div>
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="tickets"  
                            className="form-control"
                            placeholder="5" 
                            onChange={this.handleInput} 
                        />
                    </div>
                    <button type="submit"className="btn btn-primary">Guardar</button>
                </form>
        </div>
    </div>
    )
}
}
export default nose;