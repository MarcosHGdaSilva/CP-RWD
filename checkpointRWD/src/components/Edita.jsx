import { useState } from "react"
export default function Edita(props){
    const id = props.id;
    const [carro, setCarro] = useState({
        id: props,
        modelo:"",
        distribuidora: "",
        lancamento:"",
        motor:"",
        descricao:""
      })


        return(
            <div>
                <form >
                    <label htmlFor="carro.modelo">Modelo</label>
                    <input type="text" value={carro.modelo}/><br/>
                    
                    <label htmlFor="carro.distribuidora">Distribuidora</label>
                    <input type="text" value={carro.distribuidora}/><br/>
                    
                    <label htmlFor="carro.lancamento">Lançamento</label>
                    <input type="text" value={carro.lancamento}/><br/>
                    
                    <label htmlFor="carro.motor">Motor</label>
                    <input type="text" value={carro.motor}/><br/>
                    
                    <label htmlFor="carro.descricao">Descrição</label>
                    <input type="text" value={carro.descricao}/><br/>
                </form>
            </div>
    )
}