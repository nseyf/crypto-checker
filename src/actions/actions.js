import axios from 'axios';

const COINDESK_API = 'https://api.cryptonator.com/api/full/';

export const FETCH_PRICE = "FETCH_PRICE";

export const fetchPrice = (currencies) => {
  const url = `${COINDESK_API}${currencies}`;

return axios.get(url)
.then(response => response.data)
.then(function(data){
  return {
    type: FETCH_PRICE,
    payload: data
  }
})
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
