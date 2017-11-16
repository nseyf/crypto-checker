import axios from 'axios';





export const FETCH_PRICE = "FETCH_PRICE";

export const fetchPrice = (cryptocurrency, currency, timeFormat) => {
const url = `https://min-api.cryptocompare.com/data/histo${timeFormat}?fsym=${cryptocurrency}&tsym=${currency}&limit=60&aggregate=3&e=CCCAGG`

return axios.get(url)
.then(response => response.data)
.then(function(data){
  return {
    type: FETCH_PRICE,
    payload: data
  }
})
};

export const FETCH_MARKETS = "FETCH_MARKETS";

export const fetchMarkets = (cryptocurrency, currency) => {
  const url = `https://api.cryptonator.com/api/full/${cryptocurrency}-${currency}`;

  return axios.get(url)
  .then(response => response.data)
  .then(function(data){
    return {
      type: FETCH_MARKETS,
      payload: data
    }
  })
};

export const CONVERT_PRICE = "CONVERT_PRICE";

export const convertPrice = (cryptocurrency, currency) => {
const convertorUrl = `https://min-api.cryptocompare.com/data/price?fsym=${cryptocurrency}&tsyms=${currency}`

  return axios.get(convertorUrl)
  .then(response => response.data)
  .then(function(data){
    return {
      type: CONVERT_PRICE,
      payload: data
    }
  })
};

export const TOGGLE_ACTIVE_CRYPTO = "TOGGLE_ACTIVE_CRYPTO";

export const toggleActiveCrypto = (activeCryptocurrency) => {
  return {
    type: TOGGLE_ACTIVE_CRYPTO,
    payload: activeCryptocurrency
  }
};

export const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";

export const toggleActive = (activeCurrency) => {
  return {
    type: TOGGLE_ACTIVE,
    payload: activeCurrency
  }
};

export const TOGGLE_TIME_FORMAT = "TOGGLE_TIME_FORMAT";

export const toggleTimeFormat = (timeFormat) => {
  return {
    type: TOGGLE_TIME_FORMAT,
    payload: timeFormat
  }
};
