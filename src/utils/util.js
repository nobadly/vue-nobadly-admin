
export default {
    // TOKEN
    getToken: () => {
        return localStorage.getItem('__5G__ADMIN__GLOBAL__TOKEN')
    },
    setToken: (token) => {
        localStorage.setItem('__5G__ADMIN__GLOBAL__TOKEN', token)
    },
    removeToken: () => {
        localStorage.removeItem('__5G__ADMIN__GLOBAL__TOKEN')
    },

    // AUTHKEYS
    getAuthKeys: () => {
        return JSON.parse(localStorage.getItem('__WBSJF__ADMIN__GLOBAL__AUTH'))
    },
    setAuthKeys: (authKeys) => {
        return localStorage.setItem('__WBSJF__ADMIN__GLOBAL__AUTH', JSON.stringify(authKeys))
    },
    removeAuthKeys: () => {
        return localStorage.removeItem('__WBSJF__ADMIN__GLOBAL__AUTH')
    }
}
