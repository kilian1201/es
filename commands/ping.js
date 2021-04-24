const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
 message.channel.send(`:ping_pong:pong! ${bot.ping}ms`);
}

module.exports.help = {
  name:"ping"
}