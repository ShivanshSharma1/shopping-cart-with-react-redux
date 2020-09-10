import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import MoreAboutItems from './moreaboutitems'

const ForImage = styled.div`
    padding-top: 25px;
    text-align: center
`

const ForItem = styled.div`
    position: relative;
    margin: 10px;
    margin-left: 60px;
    margin-top: 45px;width: 20%;
    width: 20%;
    height: 390px;
    float: left;
`

const ItemIn = styled.div`
    position: ;
    padding-top: 30px;
    text-align: center;
`

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
        addItemToCart: () => dispatch({type: 'ADDTOCART',
                                        name: ownProps.name,
                                        price: ownProps.price,
                                        id: ownProps.id,
                                        src: ownProps.src,
                                        desciption: ownProps.desciption}),
        cartButton: () => dispatch({type: "CARTBUTTON",
                                    id: ownProps.id})
    }
}

const ItemToBuy = ({name, price, id, src, inCart, desciption, addItemToCart, cartButton}) => {
    return(
        <ForItem >
        <div>
        <ForImage >
            <img src={src}/>
        </ForImage>
            <ItemIn >
            <div>{name}</div>
            <div>{price}</div>
            <button type="button" class="btn btn-outline-primary" disabled={ inCart ? true : false} onClick={() => {addItemToCart()
                                                                                    cartButton()
                                                                                    
                                                                                    }}>
                    {inCart ? "ADDED TO CART" : "ADD TO CART"}
            </button>
            <div></div>
           
            <Link to={`/${name}`}>MORE ABOUT THE PRODUCT</Link>     
                             
            </ItemIn>
        </div>
        </ForItem>
    )
}

export default connect(
    null,
    mapDispatchToProps
)(ItemToBuy)