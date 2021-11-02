import axios from 'axios'

const subject = 'users'

export default {
    getUsers() {
        return axios.get(process.env.apiUrl + subject, process.config)
    },
}