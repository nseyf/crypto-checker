import { FETCH_PRICE, TOGGLE_ACTIVE } from '../actions';


const initialState = {
  activeCurrency: "USD",
  activeCrypto: "BTC",
  prices: {}
}


export const cryptoChecker = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRICE:
    return Object.assign({}, state, {
      prices: action.payload,
      activeCurrency: state.activeCurrency
    })
    case TOGGLE_ACTIVE:
    return Object.assign({}, state, {
      prices: state.prices,
      activeCurrency: action.payload
    })
    default:
    return state
  }
}
