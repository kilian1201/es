const Discord = require("discord.js")

module.exports.run = (client, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
if(!args[0]) return message.channel.send("no");
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
  });

}
module.exports.help = {
  name:"clear"
}