import React from 'react';
import { connect } from 'react-redux';

const ItemsToBuy = ({Items, removeItemFromItems, ItemToBuy}) => {
    return(
        <div>
            {Items.map(p => <ItemToBuy name={p.name} price={p.price} id={p.id} src={p.src} inCart={p.inCart} description={p.description} removeFromItems={removeItemFromItems}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Items : state.Items,
    }
}

export default connect(
    mapStateToProps,
    null
)(ItemsToBuy)