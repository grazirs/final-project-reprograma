import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Products'

function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/sobre' component={About} />
                <Route path='/produtos' component={Product} />
               
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas