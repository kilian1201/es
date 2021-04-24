const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do pal!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
let warns = await bot.db.fetch(`warns_${message.guild.id}_${wUser.user.id}`)
if(warns == null) warns = 0
let warnsr = await bot.db.fetch(`warnsr_${message.guild.id}_${wUser.user.id}`)
if(warnsr == null) warnsr = []

let number = 1
  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warnings")
  .setAuthor(wUser.user.username)
  .setColor("#fc6400")
  .addField("Number of Warnings", warns)
  warnEmbed.addField("Reasons:", warnsr.length !== 0 ? warnsr.map(x => `${number++}. ${x}`).join("\n") : "none")

  message.channel.send(warnEmbed);

}

module.exports.help = {
  name: "warnings"
}