import Axios from 'axios';
import { serverHost, port } from '../config'

let r = Axios.create({
    baseURL:`${serverHost}:${port}`
})

let request = (url='', options={}) => function() {
    if (url === '') return Promise.reject('need URL')
    return r({
        url,
        method: 'GET',
        ...options,
    })
}

export default request