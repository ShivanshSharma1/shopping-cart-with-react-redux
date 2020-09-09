import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom' 

const NavBar = ({Item, Cart}) => {
    return (
        <Router>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                <Link to='/cart' class="nav-link" href="#">Cart</Link>
                </div>
            </div>
            </nav>
            <Switch>
                <Route exact path='/'>
                    <Item />
                </Route>
                <Route path='/cart'>
                    <Cart />
                </Route>
            </Switch>
        </div>
        </Router>
    )
}

export default NavBar

