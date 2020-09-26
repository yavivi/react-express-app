import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/api"
})
export const getAllGuides = () => api.get('/guides')

export const searchGuides = (country, lang,city,cost) => api.get(`search/country/${country}/lang/${lang}/city/${city}/cost/${cost}`)

const apis = { getAllGuides, searchGuides }

export default apis;