const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
        let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
      if (!dUser) return message.channel.send("Can't find user!")
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
      let dMessage = args.join(" ").slice(22);
      if(dMessage.length < 1) return message.reply('You must supply a message!')
      message.delete().catch(O_o=>{});
      
      dUser.send(`${dUser} The Administration from CodeFamily sent you: ${dMessage}`)
      
      message.author.send(`${message.author} You have sent your message to ${dUser}`)
      
        
      }

      module.exports.help = {
        name: "msg"
      }