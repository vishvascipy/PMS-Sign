import apicall from './interceptor'

async function Signup(data) {
    const response = await apicall.apicall('post',9000, 'user/signup', data)
    return response
}   

async function PumpRegister(data) {
    const response = await apicall.apicall('post',9000, 'pump/createpump',data)
    return response
}

export default {
    Signup,PumpRegister
}