const Discord = require("discord.js");
const loglar = require("../loglar.json");
ayarlar = require("../ayarlar.json"),
db = require('quick.db');
const { MessageButton } = require("discord-buttons")  

exports.run = async (client, message, params, button) => {
	 let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
   
   let kontrol = await db.fetch(`dil_${message.guild.id}`);
   if (kontrol == "TR_tr") {

  const embedyardim = new Discord.MessageEmbed()
    .setAuthor(` Taxperia   |   Yardım Listesi `)
    .setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
    .setDescription("")
  
    .setDescription(
      `**<a:logo:751689078679797770>** **${prefix}yetkili** Yetkili komutları gösterir.\n**<a:logo:751689078679797770>** **${prefix}kullanıcı** Kullanıcı komutlarını gösterir. \n**<a:logo:751689078679797770>** **${prefix}koruma-sistemi** Koruma komutlarını gösterir.\n**<a:logo:751689078679797770>** **${prefix}sunucu** Sunucu komutlarını gösterir. \n**<a:logo:751689078679797770>** **${prefix}eğlence** Eğlence komutlarını gösterir. \n**<a:logo:751689078679797770>** **${prefix}yenilikler** Bota gelen yeni yenilikleri gösterir. \n**<a:logo:751689078679797770>** **${prefix}oyunlar** Oyun komutlarını gösterir.`
    )

    .addField(
      `__Bilgilendirme__`,
      `📌  \`${prefix}bilgi\` | Bot ile ilgili bazı bilgileri gösterir. \n 📌 \`${prefix}sponsor\` | Botun sponsorlarını gösterir.  \n 📌 \`${prefix}davet\` | Davet kısmını gösterir.` 
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

} else {

  const embedyardim = new Discord.MessageEmbed()
  .setAuthor(" Taxperia   |   Help List ")
  .setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
  .setDescription("")
  .setColor(0x00ffff)
  .setDescription(
    `**<a:logo:751689078679797770>** **${prefix}authorized** Shows authorized commands.\n**<a:logo:751689078679797770>** **${prefix}user** Shows user commands . \n**<a:logo:751689078679797770>** **${prefix}protect-system** Shows protection commands.\n**<a:logo:751689078679797770>** **${prefix}server** Shows server commands. \n**<a:logo:751689078679797770>** **${prefix}entertainment** Shows entertainment commands. \n**<a:logo:751689078679797770>** **${prefix}what's new** Shows what's new in the bot. \n**<a:logo:751689078679797770>** **${prefix}games** Shows game commands.`
  )

  .addField(
    `__İnformation__`,
    `📌  \`${prefix}info\` | Shows some information about the bot. \n 📌 \`${prefix}sponsor\` | Shows the bot's sponsors.  \n 📌 \`${prefix}invite\` | Shows the invite part.` 
  )

.setImage("https://cdn.discordapp.com/attachments/865509623753867264/892504709905145897/standard_2.gif")
.setFooter("Taxperia help commands", client.user.avatarURL('https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png'));

let oy = new MessageButton()
.setStyle('url')
  .setLabel(`Vote`)
  .setURL('https://top.gg/bot/693134673450106890/vote') 

  let website = new MessageButton()
  .setStyle('url')
  .setLabel(`Website`)
  .setURL('https://taxperia.tk') 

  let botekle = new MessageButton()
  .setStyle('url')
  .setLabel(`Bot add`)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=693134673450106890&scope=bot&permissions=805314622') 

  let sunucu = new MessageButton()
  .setStyle('url')
  .setLabel(`Support`)
  .setURL('https://discord.gg/wRbgTkVVB2') 

if (!params[0]) {
const commandNames = Array.from(client.commands.keys());

message.channel.send(embedyardim, {
  buttons: [oy, website, botekle, sunucu]} );



} 


}
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yetkili "
};
