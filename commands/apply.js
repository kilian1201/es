const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
  
  let AnnEmbed = new Discord.RichEmbed()
  .setColor("#15f153")
  .setFooter(`from ${message.author.username}`, message.author.avatarURL)
  .setDescription(args.join(" "));
  
    let incidentchannel = message.guild.channels.find(`name`, "applys");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

  message.channel.send("Your Apply Got Submited");
    incidentchannel.send(AnnEmbed);
}



 
module.exports.help = {
  name: "apply"
}