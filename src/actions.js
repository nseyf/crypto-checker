// Action types
import axios from 'axios';

const COINDESK_API = 'https://api.cryptonator.com/api/ticker/'

/*
Fetch Price
Active Curr

Flow goes from select active -> fetch price -> graph
*/

export const FETCH_PRICE = "FETCH_PRICE";

export const fetchPrice = (currencies) => {
  const url = `${COINDESK_API}${currencies}`
 const request = axios.get(url).then(result => result).catch(err => console.log(err))
return {
  type: FETCH_PRICE,
  payload: request
}
}

export const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";

export const toggleActive = (activeCurrency) => {
  return {
    type: TOGGLE_ACTIVE,
    payload: activeCurrency
  }
}
