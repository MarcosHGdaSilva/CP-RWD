import Modelo from "../ModeloCarro/Modelo";
import { useRef } from "react";

export default function TelaLogin() {
    const user = useRef();
    const password = useRef();
    
    const getUser = sessionStorage.getItem('userData');
    const getPassword = sessionStorage.getItem('senhaData');

    const handleSubmit =() =>{
    if(user.current.value === 'Admin' && password.current.value ==='123456'){
        sessionStorage.setItem('userData', 'Admin')
        sessionStorage.setItem('senhaData','123456')
    }else{
        alert("Usuario ou senha inválidos !!!")
    }
}
  function logout(){
    sessionStorage.clear();
  }
    return (
      <section>
        {getUser && getPassword ? (
          <Modelo/>
          ):(
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Login</legend>
              <label htmlFor="usuario">Usuario:</label>
              <input type="text" ref={user}/><br/>
              <label htmlFor="password">Senha:</label>
              <input ref={password} type="password"/><br />
              <input type="submit" value="Login"/>
            </fieldset>
          </form>
        )}
      </section>
    )
}