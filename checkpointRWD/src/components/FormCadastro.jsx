import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    nome : yup.string()
              .required("O nome é obrigatório"),
    email : yup.string()
              .email("Digite um e-mail válido!")
              .required("O e-mail é obrigatório"),
    senha : yup.string().min(8,"A Senha deve ter pelo menos 8 dígitos")
            .required("A Senha é obrigatória"),
}).required();

export default function FormCadastro(){

    const { register, handleSubmit, formState: { errors }} = useForm({ resolver : yupResolver(schema) })
    
    const [listaClientes, setListaClientes] = useState([])

    function inserirCliente(cliente){
        setListaClientes([...listaClientes, cliente])
    }

    return(
        <>
            <form onSubmit={ handleSubmit(inserirCliente) }>
                <fieldset>
                    <legend>Dados Pessoais:</legend>
                    <label>Nome:
                        <input type="text" {...register('nome')} />
                        <span>{ errors.nome?.message }</span>
                        <br/>
                    </label>
                    <label>E-Mail:
                        <input type="text" {...register('email')} />
                        <span>{ errors.email?.message }</span>
                        <br/>
                    </label>
                    <label>senha:
                        <input type="text" {...register('senha')} />
                        <span>{ errors.senha?.message }</span>
                        <br/>
                    </label>
                    <button type="Submit">Criar</button>
                </fieldset>
            </form>
        </>
    )
}