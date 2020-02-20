const { Client } = require('klasa');

new Client({
    fetchAllMembers: false,
    prefix: '+',
    commandEditing: true,
    typing: true,
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`
}).login('Njc5ODYxNDY5MDkyNzczOTQw.Xk3gZA.NVCPwo8NUs3_N9tuzazGAV86Yyk');