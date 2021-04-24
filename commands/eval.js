const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
if(!bot.config.devs.includes(message.author.id)) return;

const db = require("quick.db")

    try {
        let codein = args.join(" ").replace(bot.token, "Bot Token hiding")
        let code = eval(codein)

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });

        message.channel.send(`
**Input:**
\`\`\`js\n${codein}\`\`\`
`)
message.channel.send(`
**Output:**
\`\`\`js\n${code.replace(bot.token, "Bot Token hiding")}\n\`\`\`
`)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
      
    }

module.exports.help = {
  name:"eval"
}