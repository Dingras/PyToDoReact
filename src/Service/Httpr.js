const urlBackEnd = 'http://127.0.0.1:8000'

export const POST = async(url, request, token=false) => {
    return await( fetch(urlBackEnd + url,{
            method:"POST",
            mode: "cors",//hay que ponerlo sino no anda en el navegador
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}` || ""
                },
                body:JSON.stringify(request)
            }
        )
    )
    .then((res)=>res.json())
    .then((res)=>res)
    .catch((err)=>console.log(err))
}
export async function GET(url, request = null){

    let uri = "";
    if(request){
        //Esta funcion sirve para encodear el objeto de request para poder pasarlo directamente en la url. En DELETE van a ver que esta igual. https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
        uri = '?' + new URLSearchParams(request).toString();
    }

    return await fetch(urlBackEnd + url + uri, {
        method:'GET',
        mode:'cors',
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}` || ''
        }
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}

export async function DELETE(url, request){

    let uri = "";
    if(request){
        uri = '?' + new URLSearchParams(request).toString();
    }

    return await fetch(backendurl + url + uri, {
        method:'DELETE',
        mode:'cors',
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('jwt')}` || ''
        }
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);
}


