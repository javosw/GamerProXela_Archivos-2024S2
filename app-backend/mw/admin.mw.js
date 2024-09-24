const {errorJson} = require('./utils');

const mw_AdminGetEmpleados = async (req, res, next) => {
    const { model_AdminGetEmpleados } = require('../model/admin.model');
    const json = await model_AdminGetEmpleados();

    res.setHeader('Content-Type', 'application/json');
    if (json) {
        res.status(200).send(json);
    }
    else {
        res.status(400).send(errorJson(500,'mw_AdminGetEmpleados'));
    }
}





module.exports = {mw_AdminGetEmpleados};