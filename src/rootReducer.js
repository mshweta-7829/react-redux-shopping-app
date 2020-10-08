import { ADD, REMOVE } from "./actionTypes";
import inventory from './data.json'

const DEFAULT_STATE = { products: inventory.products, cart: {}, count: 0 }

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD:

      const newItem = state.products[action.payload]
      console.log("newItem", newItem)

      return {
        ...state, cart: { ...state.cart, [action.payload]: newItem }, count : state.count+1
      }

    case REMOVE:

      const cartItems = {...state.cart}
      for(let key in cartItems){
        if(key === action.payload){
          delete cartItems[key]
          break
        }
      }
      console.log("after deleting", cartItems)
     
      return {
        ...state, cart : cartItems, count : state.count === 0 ? state.count : state.count-1
      }

    default:
      return state

  }
}
export default rootReducer