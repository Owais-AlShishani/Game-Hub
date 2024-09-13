import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '85c9616c10854cfbb58f639c511c3af3'
    }
})