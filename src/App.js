import React from 'react';
import NavBar from './navbar/navbar'
import Item from './Items/items'
import Cart from './Cart/cart'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    ItemData: state.Items
  }
}

const App = ({ ItemData }) => {
  return(
    <div>
      <NavBar Item={Item} Cart={Cart} ItemData={ItemData} />
    </div>
  )
}

export default connect(
  mapStateToProps,
  null
)(App)




