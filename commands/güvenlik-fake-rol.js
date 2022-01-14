const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
 
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (kontrol == "TR_tr") {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

    let c =
      message.mentions.roles.first() ||
      message.guild.roles.cache.find(rol => rol.name === args[0]);
    if (!c) return message.channel.send("Lütfen bir rol belirtiniz!");
    db.set(`güvenlikfake_${message.guild.id}`, c.id);
    message.channel.send(
      `Güvenlik fakelere verilecek rol <@&${c.id}> olarak ayarlandı!`
    );
  } else {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

    let c =
      message.mentions.roles.first() ||
      message.guild.roles.cache.find(rol => rol.name === args[0]);
    if (!c) return message.channel.send("Please specify a role!");
    db.set(`güvenlikfake_${message.guild.id}`, c.id);
    message.channel.send(
      `Security is set to <@&${c.id}> the role to be given to the fakes!`
    );
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security-fake-role"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-sahte-rol",
  description: "güvenlik-sahte-rol",
  usage: "güvenlik-sahte-rol"
};
