const { Client } = require('klasa');

new Client({
    fetchAllMembers: false,
    prefix: '+',
    commandEditing: true,
    typing: true,
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`
}).login('Njc5ODYxNDY5MDkyNzczOTQw.Xk3q9A.DRbPR9T3SBwGn1ojH5O3CiimSnM');