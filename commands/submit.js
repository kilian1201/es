const Discord = require("discord.js")
const config = require("../config")
const db = require("quick.db")
let blacklist = config.blacklist


module.exports.run = async (client, message, args) => {

if(blacklist.includes(message.author.id)) return message.channel.send("you dont have access to this command you are on blacklist dude")

let role = message.guild.roles.find(role => role.name == "Bot Moderator")

let user = message.author
let bot = args[0]
let prefix = args.slice(1).join(" ")

let embed = new Discord.RichEmbed()
    .setDescription("New Bot Submited")
    .setColor("#15f153")
    .addField("Submited By", `${user} (${user.id})`)
    .addField("Bot", `<@${bot}> (${bot})`)
    .addField("Prefix", prefix)
    .addField("Invite", `[Invite](https://discordapp.com/oauth2/authorize?client_id=${bot}&permissions=0&scope=bot&guild_id=${message.guild.id})`)

    let channel = message.guild.channels.find(`name`, "logs");


    message.delete().catch(O_o=>{});
    channel.send(`${role.toString()}`, embed);
    message.author.send(`Your Bot <@${bot}> has been added to queue`)

db.set(`bots_${bot}`, {
id: args[0],
owners: [user.id],
prefix: prefix,
certified: false
})

db.push(`queue_${message.guild.id}`, {
id: args[0],
owners: [user.id],
prefix: prefix,
certified: false
})

  
  }
 
module.exports.help = {
  name: "submit"
}