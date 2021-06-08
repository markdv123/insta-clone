import ApiClient from './ApiClient'

export const __CheckSession = async () => {
    try {
        const res = await ApiClient.get('/team/refresh/session')
        return res.data
    } catch (error) {
        throw error
    }
}