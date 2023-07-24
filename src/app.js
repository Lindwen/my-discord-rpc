const DiscordRPC = require('discord-rpc');
const config = require('../config.json');

const clientId = config.clientId;

DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
    console.log('Connecté au client RPC Discord!');

    rpc.setActivity({
        details: config.details,
        state: config.state,
        largeImageKey: config.largeImageKey,
        largeImageText: config.largeImageText,
        smallImageKey: config.smallImageKey,
        smallImageText: config.smallImageText,
        startTimestamp: new Date(),
        instance: config.instance,
        buttons: [
            {
                label: config.buttons[0].label,
                url: config.buttons[0].url,
            },
            {
                label: config.buttons[1].label,
                url: config.buttons[1].url,
            }
        ],
    });
});

rpc.login({ clientId }).catch(console.error);