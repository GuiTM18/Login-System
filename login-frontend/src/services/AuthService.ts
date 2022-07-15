import axios from 'axios'
import endpoint from './Cliente'
 
const apiClient = axios.create({
    baseURL: endpoint
})
 
export default apiClient;