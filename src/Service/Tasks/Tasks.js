import { GET } from '../Httpr'

export const handlerTasksUser = async(id) =>{

    let url = `/tasks/{user_id}?id=${id}`
    console.log('url get',url)
    let rsp = await GET(url)
    console.log('respuesta get',rsp)
    return rsp
    
}