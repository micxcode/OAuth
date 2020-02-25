var service_manager = require('../Adapters/service_manager');

module.exports = (app) => {

    app.get('/Service', (req, res) => {
        var service = new service_manager();

        var list = service.listService();

        res.json(list);
    });

    app.post('/Service', (req, res) => {
        var service = new service_manager();

        try{
            service.addService(req.data);
        }
        catch(e){
            res.status(500).send(e);
        }

        res.send('Ok');
    });

    app.delete('/Service', (req, res) => {
        var service = new service_manager();

        try{
            service.removeService(req.data);
        }
        catch(e){
            res.status(500).send(e);
        }

        res.send('Ok');
    });

    app.put('/Service', (req, res) => {
        var service = new service_manager();

        try{
            service.editService(req.data);
        }
        catch(e){
            res.status(500).send(e);
        }

        res.send('Ok');
    });
}