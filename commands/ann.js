const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal!");
          
  let AnnEmbed = new Discord.RichEmbed()
  .setColor("#15f153")
.setFooter(`from ${message.author.username}`, message.author.avatarURL)
  .setDescription(args.join(" "));
  
    
await message.guild.channels.get('539098448029548546').send('New announcement, <@&539503792949821461>', AnnEmbed);
  await message.delete();
  await message.guild.roles.get('438296134071484417').setMentionable(false).catch(e => {return message.channel.send('Failed to set role ping to false')});
      
      
    }

module.exports.help = {
  name:"ann"
}