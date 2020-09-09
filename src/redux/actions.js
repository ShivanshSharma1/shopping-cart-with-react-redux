const  addToCart = (props) => {
    return {
        type: 'ADDINGTOCART',
        name: props.name,
        price: props.name,
        id: props,
    }
}

const removeFromItems = (props) => {
    return {
        type: 'REMOVEFROMITEMS',
        id: props.id
    }
}

export default {addToCart, removeFromItems}