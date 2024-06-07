import instance from "../store/axios"

export const authenticate = async (email, password) => {
    const response = await instance.post('/user/login', {email, password})
    return response.data.body
}

export const getUserProfile = async (token) => {
    const response = await instance.post('/user/profile', {token})
    return response.data.body
}

export const updateUserInfo = async (userName) => {
    const response = await instance.put('/user/profile', {userName})
    return response.data.body
}
