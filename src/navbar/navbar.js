import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import MoreAboutItems from '../Items/moreaboutitems'


const NavBar = ({Item, Cart, ItemData}) => {
    console.log(ItemData)
    return (
        <Router>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light " style={{height:"75px", background: "#e3f2fd"}}>
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Link to="/Home" class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                <Link to='/cart' class="nav-link" href="#">Cart</Link>
                </div>
            </div>
            </nav>
            <Switch>
                <Route path='/Home'>
                    <Item />
                </Route>
                <Route path='/cart'>
                    <Cart />
                </Route>
                <Route path={`/${ItemData[0].name}`}>
                    <MoreAboutItems name={ItemData[0].name} price={ItemData[0].price} id={ItemData[0].id} description={ItemData[0].description} src={ItemData[0].src} inCart={ItemData[0].inCart}/>
                </Route>
                <Route path={`/${ItemData[1].name}`}>
                    <MoreAboutItems name={ItemData[1].name} price={ItemData[1].price} id={ItemData[1].id} description={ItemData[1].description} src={ItemData[1].src} inCart={ItemData[1].inCart}/>
                </Route>
                <Route path={`/${ItemData[2].name}`}>
                    <MoreAboutItems name={ItemData[2].name} price={ItemData[2].price} id={ItemData[2].id} description={ItemData[2].description} src={ItemData[2].src} inCart={ItemData[2].inCart}/>
                </Route>
                <Route path={`/${ItemData[3].name}`}>
                    <MoreAboutItems name={ItemData[3].name} price={ItemData[3].price} id={ItemData[3].id} description={ItemData[3].description} src={ItemData[3].src} inCart={ItemData[3].inCart}/>
                </Route>
                <Route path={`/${ItemData[4].name}`}>
                    <MoreAboutItems name={ItemData[4].name} price={ItemData[4].price} id={ItemData[4].id} description={ItemData[4].description} src={ItemData[4].src} inCart={ItemData[4].inCart}/>
                </Route>
                <Route path={`/${ItemData[5].name}`}>
                    <MoreAboutItems name={ItemData[5].name} price={ItemData[5].price} id={ItemData[5].id} description={ItemData[5].description} src={ItemData[5].src} inCart={ItemData[5].inCart}/>
                </Route>
            </Switch>
        </div>
        </Router>
    )
}

export default NavBar

