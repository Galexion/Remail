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
            description: "I'll Say it for you! | Usage: !say <MSG>",
            quotedStringSupport: false,
            usage: '<Message:string> [...]',
            usageDelim: ` `,
            extendedHelp: 'I Can Repeat what you say! Just let me wait 1 Minute before you do another one. (we want to prevent spam)'
        });
    }

    async run(message, [...Message]) {
       message.send(Message);
    }

};