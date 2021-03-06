import { PORT } from '../port'
import axios from 'axios'

const API_SignIn = `http://${PORT}/users/login`
const API_SignUp = `http://${PORT}/users/register`
const API_CheckPhoneExist = `http://${PORT}/users/checkValidPhone`

export const validatePhoneNumber = (phone) => {
    var regexp = /^(03|07|08|09|01[2|6|8|9])+([0-9]{8})$/
    return regexp.test(phone)
}
export const signInDb = async (phone, password) => {
    console.log(phone)
    console.log(password)
    try {
        const res = await axios.post(API_SignIn, {
            "phone": phone,
            "password": password
        })
        return res.data
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const signUpDb = async (user) => {
    console.log(user.name)
    console.log(user.phone)
    console.log(user.password)
    try {
        const res = await axios.post(API_SignUp, {
            "name": user.name,
            "phone": user.phone,
            "password": user.password,
            "urlAvatar": "https://1.bp.blogspot.com/-rt6mn1dJJ7M/XqZl2p-TboI/AAAAAAAAjO8/SzKdmwQAFhUH2CXgUH6kluj_G8Gig2-xgCLcBGAsYHQ/s1600/Anh-avatar-dep-cho-con-trai%2B%25281%2529.jpg"
        })
        if (res.data.status === 200) {
            return res.data
        } return false
    } catch (error) {
        console.error(error);
    }
}

export const checkPhoneExist = async (phone) => {
    try {
        const res = await axios.post(API_CheckPhoneExist, {
            "phone": phone,
        })
        return res.data
    } catch (error) {
        console.error(error);
    }
}

