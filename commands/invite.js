const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
  
let bot = message.guild.member(message.guild.members.find(member => member.toString() == args[0]) || message.guild.members.find(member => member.id == args[0]))
if(!bot) return message.channel.send("i dont find this bot")

if(bot.user.id == client.user.id) return message.channel.send("you cant invite our bot")

let embed = new Discord.RichEmbed()
    .setDescription("Invite Link for "+bot.user.username)
    .setColor("#15f153")
    .addField("Invite", `[Invite](https://discordapp.com/oauth2/authorize?client_id=${bot.id}&scope=bot)`)


message.channel.send(embed);
      
      
  
  }
 
module.exports.help = {
  name: "invite"
}