let generateMessage = (req, res) => {
    res.send({'status code': 404, 'error message': 'File not found'});
}

// export controller
module.exports = {
    generateMessage: generateMessage
}