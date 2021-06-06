exports.handler = async(event, content) => {
    console.log(event);
    return {
        statusCode: 200,
        body: 'hello!'
    }
}