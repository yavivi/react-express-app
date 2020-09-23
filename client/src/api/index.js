// import axios from "axios";
const axios = require('axios')

const api = axios.create({
    baseURL: "http://localhost:3001/api"
})
    
 export const getAllGuides = () => api.get('/guides')
 const apis ={
    getAllGuides,

 }
 export default apis;



//  const getAllGuidesMock = () => {
//     return [
//         {
//             "name": "",
//             "location": ""
//         }
//     ]
// }


/*
    Client -> Server
    Client: Http Request -> Server: (Express Router) Controller -> Guide Service -> DB
*/