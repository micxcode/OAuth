// class ServiceValidator{

//     constructor(req, res, next){
//         this.req = req;
//         this.res = res;
//         this.next = next;
//     }

//     validatePost(){

//         this.req.checkBody('name', 'Invalid service name value.').notEmpty();
//         this.req.checkBody('domain', 'Invalid service domain value.').notEmpty();

//         const errors = this.req.validationErrors();
//         if (errors) {
//             let response = { errors: [] };
//             errors.forEach(function(err) {
//               response.errors.push(err.msg);
//             });
//             //this.res.statusCode = 400;
//             return this.res.status(400).json(response);
//           }
//           return this.next();
//     }
// }



// module.exports = ServiceValidator;

const { check, validationResult } = require('express-validator');

module.exports = (req, res, next) => {
    check('name', 'Invalid service name value.').notEmpty();
    check('domain', 'Invalid service domain value.').notEmpty();

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
    return next();

}