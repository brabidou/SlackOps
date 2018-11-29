const SlackOps          = require('./SlackOps/app');
const LogHelper         = require('./SlackOps/utilities/log_helper');
const config            = require('./config');
const express           = require('express');
const app               = express();

const env               = process.env.NODE_ENV || config.server.node_env;
const port              = process.env.PORT     || config.server.port;
const env_confg         = config[env] || {};

app.use('/', SlackOps);
app.listen(port, () => LogHelper.log('"' + env + '" Server is running at port : ' + port))
