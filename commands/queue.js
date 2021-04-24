const Discord = require("discord.js")
const config = require("../config")
const db = require("quick.db")
let blacklist = config.blacklist


module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("No can do pal!");
  

if(blacklist.includes(message.author.id)) return message.channel.send("you dont have access to this command you are on blacklist dude")

let role = message.guild.roles.find(role => role.name == "Bot Moderator")

let queue = await db.fetch(`queue_${message.guild.id}`)
if(queue == null) queue = []



let embed = new Discord.RichEmbed()
.setTitle("Bots Queue")
.setColor("RANDOM")
.setDescription(queue.length == 0 ? "Queue is empty" : queue.map(bot => `<@${bot.id}> <@${bot.owners[0]}> ${bot.prefix} [Invite](https://discordapp.com/oauth2/authorize?client_id=${bot.id}&permissions=0&scope=bot&guild_id=${message.guild.id})`))
message.channel.send(embed)

  
  }
 
module.exports.help = {
  name: "queue"
}