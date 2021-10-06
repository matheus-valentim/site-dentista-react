import './navbar.css'
import '../style.css'
import {Link} from 'react-router-dom'
import PaginaInicial from '../PaginaInicial'
import PaginaContato from '../PaginaContato'

export default function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <div className='branco'>
                        <img src='assets/dente.png'/>
                        <p>Dentes Saudaveis</p>
                    </div>
                </li>
                <li>
                    <div className='branco'>
                        <Link to='/'>Home</Link>
                        <Link to='/contato'>Contato</Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}