import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PaginaInicial from '../PaginaInicial';
import PaginaContato from '../PaginaContato';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={PaginaInicial} />
                <Route path='/contato' component={PaginaContato} />
            </Switch>
        </BrowserRouter>
    )
} 