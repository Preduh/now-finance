import axios from 'axios'

export default axios.create({
    baseURL: "https://finance-auth-api.herokuapp.com"
})