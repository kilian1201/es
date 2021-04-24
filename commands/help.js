const Discord = require("discord.js") 


module.exports.run = async (bot, message, args,) => {
  
let helpembed = new Discord.RichEmbed()
  .setDescription("help")
  .setColor("#15f153")
  .setFooter("Developed by CodeFamily")
  .addField("+submit","To Submit your bot")
  .addField("+ping","For Ping Pong")
  .addField("+report","To Report Rule Breakers")

  message.delete().catch(O_o=>{});
  return message.author.send(helpembed)
    
    return;
  }
module.exports.help = {
  name:"help"
}