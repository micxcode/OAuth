var service_manager = require('../Adapters/service_manager');
var validator = require('../Validators/service_validator');

module.exports = (app) => {

    app.get('/Service', (req, res) => {
        var service = new service_manager();

        try {
            let list = service.listService();

            return res.json(list);
        } 
        catch (e) {
            return res.status(500).send(e);
        }
    });

    app.get('/Service/:id', validator.get, (req, res) => {
        var service = new service_manager();

        try {
            let obj = service.getService(req.params.id);

            return res.json(obj);
        }
        catch (e) {
            return res.status(500).send(e);
        }
    });

    app.post('/Service', validator.post, (req, res) => {
        var service = new service_manager();

        try {
            let adicionado = service.addService(req.body);

            if(!adicionado){
                return res.status(400).send('Não foi possível adicionar o Serviço.');
            }

            return res.status(201).send('Ok');
        }
        catch (e) {
            return res.status(500).send(e);
        }
    });

    app.delete('/Service', validator.delete, (req, res) => {
        var service = new service_manager();

        try {
            let deletado = service.removeService(req.body);

            if(!deletado){
                return res.send(400).send('Não foi possível deletar o Serviço.');
            }

            return res.status(204).send('Serviço Deletado.');
        }
        catch (e) {
            return res.status(500).send(e);
        }
    });

    app.put('/Service', validator.put, (req, res) => {
        var service = new service_manager();

        try {
            let editado = service.editService(req.body);

            if(!editado){
                return res.status(400).send('Não foi possível editar o Serviço.');
            }

            return res.status(204).send('Serviço Editado.');
        }
        catch (e) {
            return res.status(500).send(e);
        }
    });
}