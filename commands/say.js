const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'say',
            enabled: true,
            runIn: ['text', 'dm'],
            cooldown: 60,
            deletable: false,
            bucket: 1,
            aliases: [],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: '',
            quotedStringSupport: false,
            usage: '<thing:string> [...]',
            usageDelim: ` `,
            extendedHelp: 'say.'
        });
    }

    async run(message, [...thing]) {
       message.send(thing);
    }

};