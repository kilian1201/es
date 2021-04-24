const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
if(!bot.config.devs.includes(message.author.id)) return;

message.author.send("<https://geode-jute.glitch.me/database>")
    }

module.exports.help = {
  name:"database"
}