import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'

function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/sobre' component={About} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas