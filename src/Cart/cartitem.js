import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const LinkIn = styled.div`
    margin-top: 10px;
`

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeFromCart:() => dispatch({type: "REMOVEFROMCART",
                                 id: ownProps.id}),
        addToItems: () => dispatch({type: "CARTBUTTON",
                                 id: ownProps.id})
    }
}

const CartItem = ({name, price, src, removeFromCart, addToItems}) => {
    return (
        <ForItem >
        <div>
        <ForImage >
            <img src={src}/>
        </ForImage>
        <ItemIn >
            <div>{name}</div>
            <div>{price}</div>
            <button type="button" class="btn btn-outline-primary" onClick={() => {
                removeFromCart()
                addToItems()
            }} > 
                REMOVE FROM CART
            </button>
            <div></div>
            <LinkIn>
            <Link to={`/${name}`}>MORE ABOUT THE PRODUCT</Link>   
            </LinkIn>
        </ItemIn>
        </div>
        </ForItem>
    )
}

export default connect(
    null,
    mapDispatchToProps
)(CartItem)

