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
            description: "I'll Fetch the Latest Data!",
            quotedStringSupport: false,
            usage: '',
            usageDelim: ` `,
            extendedHelp: 'Go Make Fetch The Latest Data ASAP. (could of just waited every 5 Minutes)'
        });
    }

    async run() {
       message.send("Fetching Latest Data! You should See it in your desinated News Channel.");
    }

};