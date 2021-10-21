import axios from 'axios'

const baseUrl = `http://localhost:4000/events`;

const config = {
    headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
    }
}




export default {
    getEvents() {
        return axios.get(baseUrl, config)
    },
    getEvent(id) {
        return axios.get(baseUrl + '/' + id, config)
    }
}