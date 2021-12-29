// fetch ("https://genjs-3e4eb-default-rtdb.firebaseio.com/", { 
//     method: "POST",
//     headers: {
//         "content-type": "aplication/json"
//     },
//     body: JSON.stringify()

// })
// Post
const posteoChido = () => {
    let objetoCreado = {
        nombre: "Cuchuy",
        edad: 123,
        genero: "masculino"
    }
    fetch ("https://genjs-3e4eb-default-rtdb.firebaseio.com/post/.json", { 
    method: "POST",
    headers: {
        "content-type": "aplication/json"
    },
    body: JSON.stringify(objetoCreado)
}) 
.then((resp) =>{
    return console.log("se mando post a la base de datos")
})
}


//Patch
const patcheoChido = () => {
    let objetoCreado = {
        nombre: "Puchurrumin"
    }
    fetch ("https://genjs-3e4eb-default-rtdb.firebaseio.com/post/-Ms2uIkhpd5pstShEzcD.json", { 
    method: "PATCH",
    headers: {
        "content-type": "aplication/json"
    },
    body: JSON.stringify(objetoCreado)
}) 
.then((resp) =>{
    return console.log("se actualizo la base de datos")
})
}

// Delete
const deleteoChido = () => {
    fetch ("https://genjs-3e4eb-default-rtdb.firebaseio.com/post/-Ms2wVIxaCGyGUfmB3jA.json", { 
    method: "DELETE"
})
.then ((resp) =>{
    return console.log("se borro el objeto")
})
}

//GET
const getPractica = (callBack) => {
    fetch('https://genjs-3e4eb-default-rtdb.firebaseio.com/post/.json')
    .then((response) => {
            return response.json()
    })
    .then((obj) => {
        return callBack(obj)
    })
}
//Manipulacion del DOM
const callBack = (posts) => {
    //console.log(posts)
    let tem = ''
    for(let post in posts){
        console.log(posts[post])
        tem += `
        `
    }
}

getPractica(callBack)