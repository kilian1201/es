const discord = require("discord.js")
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("No can do pal!");
if(!tomute) return message.reply("Couldn't find user.");
if(tomute.hasPermission("MUTE_MEMBERS")) return message.reply("Can't mute them!");
    
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));

   let muteembed = new discord.RichEmbed()
        .setDescription(`Mod ${message.author}`)
        .setColor("#FFA500")
        .setFooter("CodeFamily")
        .addField("Gemuted player:", tomute)
        .addField("Mute Channel", message.channel)
        .addField("Muted at", message.createdAt)
        .addField("Time", mutetime)

    let incidentschannel = message.guild.channels.finame`, "logs");
    if (!incidentschannel) return message.reply("Créer un salon logs !");nd(`
    incidentschannel.send(muteembed);
    message.channel.send(`<@${tomute.id}> got muted for ${mutetime}`)
    await (tomute.addRole(muterole.id));

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> Got been unmuted !`);
    }, ms(mutetime));
}

module.exports.help = {
  name:"tempmute"
}