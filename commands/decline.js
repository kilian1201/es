const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
  
  
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("No can do pal!");

let queue = await db.fetch(`queue_${message.guild.id}`)
if(queue == null) queue = []

let reason = args.join(" ")
if(!reason) return message.channel.send("you need specific a reason")

let embed = new Discord.RichEmbed()
    .setDescription("Bot Declined")
    .setColor("#15f153")
    .addField("Declined By", `${message.author}`)
    .addField("Bot", `<@${queue[0].id}> (${queue[0].id})`)
    .addField("Prefix", queue[0].prefix)
    .addField("Bot Owner", queue[0].owners.map(x => `<@${x}>`).join(", "))
    .addField("Reason", reason)

    let channel = message.guild.channels.find(channel => channel.name == "logs");


channel.send(embed);
queue[0].owners.map(x => client.users.get(x).sendMessage(`Your Bot <@${queue[0].id}> got Declined by ${message.author}, Reason: ${reason}`))
message.delete();
message.reply(`You Declined <@${queue[0].id}>`)

message.guild.member(queue[0].id).kick(reason)

db.delete(`bots_${message.guild.id}_${queue[0].id}`)

const removeItem = (items, i) =>
  items.slice(0, i-1).concat(items.slice(i, items.length))

let filteredItems = removeItem(queue, 1)

db.set(`queue_${message.guild.id}`, filteredItems)


      
      
  
  }
 
module.exports.help = {
  name: "decline"
}