var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://admin:PMIlReGaZikrw2vD@cluster0.847te8u.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://admin:PMIlReGaZikrw2vD@cluster0.847te8u.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://admin:PMIlReGaZikrw2vD@cluster0.847te8u.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
