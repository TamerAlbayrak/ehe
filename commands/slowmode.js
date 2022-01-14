const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`✅ Doğru Kullanım: \`+slowmode <sure>\``)
                .setColor('RANDOM')
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 21600) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("⏰ Süre Limiti Makisimum **21.600** Saniye Olabilir!").setColor('RANDOM'));
} //Dcs Ekibi
    message.channel.send(new Discord.MessageEmbed().setDescription(`✅ Yavaş Mod **${limit}** Saniye Olarak Ayarlandı!`).setColor('RANDOM'));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    }, //Dcs Ekibi
    headers: {
        "Authorization": `Bot ${client.token}`
    },

})
} else {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

  if (message.channel.type !== "text") return;
  const limit = args[0] ? args[0] : 0;
    if(!limit) {
                var embed = new Discord.MessageEmbed()
                  .setDescription(`Correct usage \`!slowmode <time>\``)
                  .setColor('RANDOM')
                  .setTimestamp()
              message.channel.send({embed})
              return
            }
  if (limit > 21600) {
      return message.channel.send(new Discord.MessageEmbed().setDescription("The Time Limit Can Be Maximum ** 21,600 ** Seconds!").setColor('RANDOM'));
  } //Dcs Ekibi
      message.channel.send(new Discord.MessageEmbed().setDescription(`Slow Mode  Set to **${limit}** Seconds`).setColor('RANDOM'));
  var request = require('request');
  request({
      url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
      method: "PATCH",
      json: {
          rate_limit_per_user: limit
      }, //Dcs Ekibi
      headers: {
          "Authorization": `Bot ${client.token}`
      },
  
  })


}
};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 2,
};

exports.help = {
  name: 'slow-mode',
  description: 'Sohbete yazma sınır (süre) ekler.', //Dcs Ekibi
  usage: 'slow-mode [1/10]',
};