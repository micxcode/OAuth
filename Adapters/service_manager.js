var service_db_manager = require('../DataBaseAdapters/service_db_manager');
var logger = require('../Logger/log_manager');

class ServiceManager {

    constructor() {
        this.log = new logger('Service');
        this.service_db = new service_db_manager();
    }

    listService() {
        let list = this.service_db.listServices();

        return list;
    }

    getService(id) {
        try {
            let service = this.service_db.getServiceById(id);
            return service;
        }
        catch (e) {
            return new Error(e); //Ex.: Service not found
        }
    }

    addService(name, domain) {
        if (this.service_db.searchServiceByName(name)) {
            return new Error('Service name already exists.');
        }
        else if (this.service_db.searchServiceByDomain(domain)) {
            return new Error('Domain already in use.');
        }

        try {
            return this.service_db.addService(name, domain);
        }
        catch (e) {
            this.log.fail('add', e);
            return new Error(e);
        }

        
    }

    removeService(id) {
        if (!id || id == '') {
            return new Error('Invalid service Id value.');
        }

        else if (!this.service_db.searchServiceById(id)) {
            return new Error('Service not found - Invalid service Id.');
        }

        try {
            return this.service_db.removeService(id);
        }
        catch (e) {
            this.log.fail('remove', e);
            return new Error(e);
        }
    }

    editService(id, name, domain) {
        if (!this.service_db.searchServiceById(id)) {
            return new Error('Service not found - Invalid service Id.');
        }

        try {
            return this.service_db.editService(id, name, domain);
        }
        catch (e) {
            this.log.fail('edit', e);
            return new Error(e);
        }
    }
}

module.exports = ServiceManager;