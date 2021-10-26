import axios from 'axios'

export default {
    getEvents() {
        return axios.get(process.env.apiUrl, process.config)
    },
    getEvent(id) {
        return axios.get(process.env.apiUrl + '/' + id, process.config)
    }
}