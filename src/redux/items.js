import itemsToUse from '../Items/itemstouse'
import { createStore, combineReducers } from 'redux'

const Items = (state=itemsToUse, action) => {
    let {name, price, id, src, inCart} = action
    switch(action.type) { 
        case 'ADDTOITEMS':
            return [...state, {name, price, id, src, inCart}]

        case "CARTBUTTON": 
            return state.map(p => {
                            if(p.id === action.id){
                                return {...p, inCart: !p.inCart }
                            }
                                return p

        })
        default :
            return state
    }
    
}

const Cart = (state=[], action) => {
    let {name, price, id, src, inCart} = action
    switch(action.type) {
        case 'REMOVEFROMCART':
            return state.filter(p => p.id !== action.id)

        case 'ADDTOCART':
            return [...state, {name, price, id, src, inCart}]
        
        default:
            return state
    }
}

const rootReducers = combineReducers({Items, Cart})
const store = createStore(rootReducers)
export default store