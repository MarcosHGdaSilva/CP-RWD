import { Link } from "react-router-dom";
import logout from '../routes/TelaLogin/TelaLogin.jsx'

export default function Menu(){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/ModeloCarro'>Modelo dos Carro</Link></li>
                    <li><Link to='/Pecas'>Pecas</Link></li>
                    <li><Link to='/QuemSomos'>Quem Somos?</Link></li>
                    <li><Link to='/Login'>Login</Link></li>
                    <li><Link to='/Cadastro'>Cadastro</Link></li>
                    <button onClick={logout} value="Login">Logout</button>
                </ul>
            </nav>
        </header>
    )
}