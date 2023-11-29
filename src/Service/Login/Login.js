import { POST } from '../Httpr'

export const handlerLogIn = async(name ,pass, token) =>{

    let url = `/users/?name=${name}&password=${pass}`
    let requestData = {
        name: name,
        password: pass
    }
    let rsp = await POST(url, requestData, token)
    return rsp
}