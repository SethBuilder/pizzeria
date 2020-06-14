import axios from 'axios';

export default axios.create({
    baseURL: '/api/menu',
    params: {}
})