import React from 'react';
import NavBar from './navbar/navbar'
import Item from './Items/items'
import Cart from './Cart/cart'

const App = () => {
  return(
    <div>
      <NavBar Item={Item} Cart={Cart} />
    </div>
  )
}

export default App;
