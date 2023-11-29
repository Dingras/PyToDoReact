import { GET } from '../Httpr'

export const handlerUserID = async(id) =>{

    let url = `/users/${id}`
    let rsp = await GET(url)
    return rsp
}