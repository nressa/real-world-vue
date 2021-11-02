import axios from 'axios'

const subject = 'events'

export default {
    getEvents() {
        return axios.get(process.env.apiUrl + subject, process.config)
    },
    getEvent(id) {
        return axios.get(process.env.apiUrl + subject + '/' + id, process.config)
    }
}