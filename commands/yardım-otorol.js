const Discord = require("discord.js");
const loglar = require("../loglar.json");
ayarlar = require("../ayarlar.json"),
db = require('quick.db');
const { MessageButton } = require("discord-buttons") 

exports.run = async (client, message, params) => {
	 let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  const embedyardim = new Discord.MessageEmbed()
    .setAuthor(" Taxperia   |   Otorol Sistemi ")
    .setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
    .setDescription("")
    .setColor(0x00ffff)
    .setDescription(
      `**<a:logo:751689078679797770>** **${prefix}otorol-ayarla** Sunucudaya gelen kişiye otomatik rol verir. \n**<a:logo:751689078679797770>** **${prefix}otorol-kapat** Otorol sistemini kapatır. \n**<a:logo:751689078679797770>** **${prefix}otorol-mesaj** Otorol mesajı ayarlar. `
    )
    .addField(
      `__Bilgilendirme__`,
      `📌  \`${prefix}bilgi\` | Bot ile ilgili bazı bilgileri gösterir. \n 📌 \`${prefix}sponsor\` | Botun sponsorlarını gösterir.  \n 📌 \`${prefix}davet\` | Davet kısmını gösterir.` 
    )
  
  .addField(
    "__Linkler__",
    `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=693134673450106890&scope=bot&permissions=805314622)` +
      "**\n**" +
      `[Bota Oyver](https://top.gg/bot/693134673450106890/vote)` +
      "**\n**" +
      `[Destek Sunucusu](https://discord.gg/bwbqtjBYr8)`,
    false
  )
  .setImage("https://cdn.discordapp.com/attachments/865509623753867264/892504709905145897/standard_2.gif")
  .setFooter("Taxperia Yardım Komutları", client.user.avatarURL('https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png'));
  
  let oy = new MessageButton()
  .setStyle('url')
    .setLabel(`Oy Linki`)
    .setURL('https://top.gg/bot/693134673450106890/vote') 

    let website = new MessageButton()
    .setStyle('url')
    .setLabel(`Website`)
    .setURL('https://taxperia.tk') 

    let botekle = new MessageButton()
    .setStyle('url')
    .setLabel(`Botu ekle`)
    .setURL('https://discordapp.com/oauth2/authorize?client_id=693134673450106890&scope=bot&permissions=805314622') 

    let sunucu = new MessageButton()
    .setStyle('url')
    .setLabel(`Destek`)
    .setURL('https://discord.gg/wRbgTkVVB2') 
  
  if (!params[0]) {
  const commandNames = Array.from(client.commands.keys());

  message.channel.send(embedyardim, {
    buttons: [oy, website, botekle, sunucu]} );

  }

  } 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["autorole"],
  permLevel: 0
};

exports.help = {
  name: "otorol-sistemi",
  description: "Tüm komutları gösterir.",
  usage: "yetkili "
};
