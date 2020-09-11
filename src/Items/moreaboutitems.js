import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const ItemIn = styled.div`
    background-color: ;
    width : 50%;
    text-align: center;
    margin: auto;
    margin-top: 100px;
    padding: auto;
    height: 500px
`

const ImgIn = styled.div`
    margin-top: 10px
`

const DescriptionIn = styled.div`
    border: 5px #b1def7 solid;
    border-radius: 27px;
    margin: auto;
    width: 575px;
    text-align: center
`

const Button = styled.div`
    margin-top: 10px;
`
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: () => dispatch({type: 'ADDTOCART',
                                   id: ownProps.id,
                                   name: ownProps.name,
                                   price:ownProps.price,
                                   src:ownProps.src,
                                    inCart: ownProps.inCart,
                                    description: ownProps.description}),
        cartButton: () => dispatch({type: "CARTBUTTON",
                                    id: ownProps.id})
    }
}


const MoreAboutItems = ({src, description, name, inCart, addToCart, cartButton}) => {
    return (
        <ItemIn>
        <ImgIn>
        <img class="img-thumbnail"src={src} alt="not loading" style={{width: "400px"}}/>
        </ImgIn>
        <h2 >{name}</h2>
        <DescriptionIn >
        <h4>description</h4>
        <h5>{description}</h5>
        </DescriptionIn>
        <Button >
        <button 
            type="button" 
            class="btn btn-outline-dark btn-lg shadow-sm" 
            disabled={ inCart ? true : false} 
            onClick={() => {
                        addToCart()
                        cartButton()}}>
                    {inCart ? "ADDED TO CART" : "ADD TO CART"}
            </button>
        </Button>
        </ItemIn>
    )
}

export default connect(
    null,
    mapDispatchToProps
)(MoreAboutItems)


