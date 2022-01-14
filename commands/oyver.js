const  Discord = require("discord.js"); 

exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {


  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Taxperia")
  .setDescription("[__**Botumuza Oy Vermek İçin Buraya Tıkla**__](https://top.gg/bot/693134673450106890/vote)")
  .setFooter('Botumuza Oy Verdiğiniz İçin Şimdiden Teşekkür Ederim..')
  message.channel.send(davet)

} else {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Taxperia")
  .setDescription("[__**Click Here To Vote For Our Bot**__](https://top.gg/bot/693134673450106890/vote)")
  .setFooter('Thank you in advance for voting for our bot..')
  message.channel.send(davet)

}
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vote"],
  permLevel: 0
};

exports.help = {
  name: 'oyver',
  description: '',
  usage: ''
};