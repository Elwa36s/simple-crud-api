function getBodyData(req){
    return new Promise((resolve, reject) => {
        try {
            let body = '';

            req.on('data', (chunk) => {
                body += chunk.toString();

            })

            req.on('end', async (chunk) => {
                resolve(JSON.parse(body));
            })
            
        } catch (error) {
            reject(error)
        }
    })
}

function validateId(id){

    const idTemplate = /([a-zA-Z0-9]){8}-([a-zA-Z0-9]){4}-([a-zA-Z0-9]){4}-([a-zA-Z0-9]){4}-([a-zA-Z0-9]){12}/;
    return idTemplate.test(id)
}


module.exports = {
    getBodyData,
    validateId
}