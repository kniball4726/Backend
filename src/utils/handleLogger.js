const { IncomingWebhook } = require('@slack/webhook');
const config = require('../config/config');

const webhook = new IncomingWebhook(config.SLACK_WEBHOOK_URL);

const loggerStream = {
    write: (message) => {
        webhook.send({ text: message});
    },
    };

module.exports= loggerStream;