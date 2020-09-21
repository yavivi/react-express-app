// import axios from "axios";
const axios = require('axios')

const api = axios.create({
    baseURL: "http://localhost:3001/api"
})

 const getAllGuides = () => api.get('/guides')
 
const apis = { getAllGuides }

getAllGuides().then((res) => {
    console.log(res.data.data);
})

//  const getAllGuidesMock = () => {
//     return [
//         {
//             "name": "",
//             "location": ""
//         }
//     ]
// }

// export default apis;

/*
    Client -> Server
    Client: Http Request -> Server: (Express Router) Controller -> Guide Service -> DB
*/