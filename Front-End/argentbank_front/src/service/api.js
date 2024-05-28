import instance from "../store/axios"

export const authenticate = async (email, password) => {
    const response = await instance.post('/user/login', {email, password})
    return response.data.body
}

