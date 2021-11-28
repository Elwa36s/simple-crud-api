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

    requiredID = /([0-9a-zA-Z])+/;
    return (requiredID.test(id) && id.length === 36) ? true : false

}


module.exports = {
    getBodyData,
    validateId
}