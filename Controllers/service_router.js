var service_manager = require('../Adapters/service_manager');

module.exports = (app) => {

    app.get('/Service', (req, res) => {
        var service = new service_manager();

        var list = service.listService();

        res.json(list);
    });

    app.get('/Service:id', (req, res) => {
        
    });

    app.post('/Service', (req, res) => {
        var service = new service_manager();

        try{
            service.addService(req.body.data);
        }
        catch(e){
            res.status(500).send(e);
        }

        res.status(201).send('Ok');
    });

    app.delete('/Service', (req, res) => {
        var service = new service_manager();

        try{
            service.removeService(req.body);
        }
        catch(e){
            res.status(500).send(e);
        }

        res.send('Ok');
    });

    app.put('/Service', (req, res) => {
        var service = new service_manager();

        try{
            service.editService(req.body);
        }
        catch(e){
            res.status(500).send(e);
        }

        res.send('Ok');
    });
}