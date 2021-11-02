import UserService from '@/services/UserService.js'

export const state = () => ({
    users: [],
})

export const mutations = {
    SET_USERS(state, users) {
        state.users = users
    },
}

export const actions = {
    fetchUsers({ commit }) {
        return  UserService.getUsers()
                .then(response => {
                    commit('SET_USERS', response.data)
                })
    },
}