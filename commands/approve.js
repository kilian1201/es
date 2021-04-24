const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("No can do pal!");
  
let queue = await db.fetch(`queue_${message.guild.id}`)
if(queue == null) queue = []

let role = message.guild.roles.find(role => role.name == "Bots")
let role2 = message.guild.roles.find(role => role.name == "unapproved")
let role3 = message.guild.roles.find(role => role.name == "Bot Developer")

let embed = new Discord.RichEmbed()
    .setDescription("New Bot Approved")
    .setColor("#15f153")
    .addField("Approved By", `${message.author}`)
    .addField("Bot", `<@${queue[0].id}> (${queue[0].id})`)
    .addField("Prefix", queue[0].prefix)
    .addField("Bot Owner", queue[0].owners.map(x => `<@${x}>`).join(", "))

    let channel = message.guild.channels.find(channel => channel.name == "logs");
  
channel.send(embed);
queue[0].owners.map(x => client.users.get(x).sendMessage(`Your Bot <@${queue[0].id}> got approved by ${message.author}`))
message.delete();
message.reply(`You Approved <@${queue[0].id}>`)

await message.guild.member(queue[0].id).addRole(role.id)
await message.guild.member(queue[0].id).removeRole(role2.id)
queue[0].owners.map(x => message.guild.members.get(x).addRole(role3.id))

const removeItem = (items, i) =>
  items.slice(0, i-1).concat(items.slice(i, items.length))

let filteredItems = removeItem(queue, 1)

db.set(`queue_${message.guild.id}`, filteredItems)
      
      
  
  }
 
module.exports.help = {
  name: "approve"
}