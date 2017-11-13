import { FETCH_PRICE, TOGGLE_ACTIVE_CRYPTO, TOGGLE_ACTIVE } from '../actions/actions';


const initialState = {
  activeCurrency: "USD",
  activeCryptocurrency: "BTC",
  prices: {}
}


export const cryptoChecker = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRICE:
    return Object.assign({}, state, {
      prices: action.payload,
    })
    case TOGGLE_ACTIVE_CRYPTO:
    return Object.assign({}, state, {
      activeCryptocurrency: action.payload
    })
    case TOGGLE_ACTIVE:
    return Object.assign({}, state, {
      activeCurrency: action.payload
    })
    default:
    return state
  }
}
