const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do pal!");
    message.channel.send("we have clear,ban,kick,tempmute")
}
    module.exports.help = {
        name: "staff"
      }