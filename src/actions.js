// Action types
import axios from 'axios';

const COINDESK_API = 'https://api.cryptonator.com/api/ticker/';


export const FETCH_PRICE = "FETCH_PRICE";

export const fetchPrice = (currencies) => {
  const url = `${COINDESK_API}${currencies}`
 const request = axios.get(url).catch(err => console.log(err));
return {
  type: FETCH_PRICE,
  payload: request
}
}

export const TOGGLE_ACTIVE_CRYPTO = "TOGGLE_ACTIVE_CRYPTO";

export const toggleActiveCrypto = (activeCryptocurrency) => {
  return {
    type: TOGGLE_ACTIVE_CRYPTO,
    payload: activeCryptocurrency
  }
}

export const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";

export const toggleActive = (activeCurrency) => {
  return {
    type: TOGGLE_ACTIVE,
    payload: activeCurrency
  }
}
