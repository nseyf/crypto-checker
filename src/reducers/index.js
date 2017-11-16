import { FETCH_PRICE, FETCH_MARKETS, CONVERT_PRICE, TOGGLE_ACTIVE_CRYPTO, TOGGLE_ACTIVE, TOGGLE_TIME_FORMAT } from '../actions/actions';


// combinereducers goes here

const initialState = {
  activeCurrency: "USD",
  activeCryptocurrency: "BTC",
  timeFormat: "minute",
  prices: {},
  markets: {},
  convertedPrice: {}
}


export const cryptoChecker = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRICE:
    return Object.assign({}, state, {
      prices: action.payload,
    })
    case FETCH_MARKETS:
    return Object.assign({}, state, {
      markets: action.payload
    })
    case CONVERT_PRICE:
    return Object.assign({}, state, {
      convertedPrice: action.payload
    })
    case TOGGLE_ACTIVE_CRYPTO:
    return Object.assign({}, state, {
      activeCryptocurrency: action.payload
    })
    case TOGGLE_ACTIVE:
    return Object.assign({}, state, {
      activeCurrency: action.payload
    })
    case TOGGLE_TIME_FORMAT:
    return Object.assign({}, state, {
      timeFormat: action.payload
    })
    default:
    return state
  }
}
