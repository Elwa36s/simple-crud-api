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

module.exports = {
    getBodyData
}