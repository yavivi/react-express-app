import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:3001/api"
})
export const getAllGuide=()=>api.get('/guides')

const apis={getAllGuide}

export default apis;