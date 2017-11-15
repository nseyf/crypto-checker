import axios from 'axios';





export const FETCH_PRICE = "FETCH_PRICE";

export const fetchPrice = (cryptocurrency, currency) => {
const url = `https://min-api.cryptocompare.com/data/histohour?fsym=${cryptocurrency}&tsym=${currency}&limit=60&aggregate=3&e=CCCAGG`

return axios.get(url)
.then(response => response.data)
.then(function(data){
  return {
    type: FETCH_PRICE,
    payload: data
  }
})
}

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
