const Wallet =()=>{
    return(
        <div className="card">
            <div className="card-header">Ingrese nro de Billetera</div>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text"/>
                    </div>
                    <button type="btn-primary">Guardar</button>
                </form>
        </div>
    )
}

export default Wallet;