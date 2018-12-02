const LogHelper         = require('./SlackOps/utilities/log_helper');
const SlackOps          = require('./SlackOps/app');
const config            = require('./config');
const express           = require('express');
const app               = express();

const env               = process.env.NODE_ENV || config.server.node_env;
const port              = process.env.PORT     || config.server.port;
const env_confg         = config[env] || {};

LogHelper.log('Light em up up up....This apps on FIRE!');

app.use('/', SlackOps);
app.listen(port, () => LogHelper.log('"' + env + '" Server is running at port : ' + port))
