// import controllers
const employeeController = require('../controllers/employeeController');
const notFoundController = require('../controllers/notFoundController');

// set routes with middlewares and contollers. 
let setRouter = (app) => {
    app.post('/employee', employeeController.createEmployee); // {"employeeCode":"15013", "firstName":"Rinkesh", "lastName":"Patel", "email":"rinkeshpatel22@gmail.com", "mobile":"9033292086"}
    app.get('*', notFoundController.generateMessage);
    app.post('*', notFoundController.generateMessage);
}

// export routes
module.exports = {
    setRouter: setRouter
}