const Discord = require("discord.js");
const loglar = require("../loglar.json");
ayarlar = require("../ayarlar.json"),
db = require('quick.db');
const { MessageButton } = require("discord-buttons") 

exports.run = async (client, message, params) => {
	 let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix

   let kontrol = await db.fetch(`dil_${message.guild.id}`);
   if (kontrol == "TR_tr") {

  const embedyardim = new Discord.MessageEmbed()
    .setAuthor(" Taxperia   |   Bilgi  ")
    .setDescription("")
    .setColor(0x00ffff)
    .setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
    .setDescription(
      `Herkese merhaba. Bu kısımda bot ile ilgili bazı ayarları nasıl yapacağınızı ve belki de hiç bilmediğiniz bazı komutları göstereceğiz. \n\n**<a:logo:751689078679797770>** **${prefix}dil** Botumuz Türk botu olmasına rağmen ilk ingilizce dili ile başlar. Bunun amacı botumuzu global bir bot yapmaya çalıştığımızdandır. \n**<a:logo:751689078679797770>** **${prefix}hata-bildir** Botumuz ile ilgili hataları bu komut sayesinde bize ulaştırabilir ve bizde bu hataları en kısa süre içinde düzeltmeye çalışabiliriz. \n**<a:logo:751689078679797770>** **${prefix}prefix** Botun prefixini kendinize özel bir şekilde değiştirebilirsiniz. Eğer botunuz başka botlar ile karışıyorsa bu komut tam size uygundur. \n\n**<a:logo:751689078679797770>** **${prefix}günlük** Bot üzerinden günlük olarak para kazanırsınız. Biriktirdiğiniz paralar ile gold üyelik satın alabilirsiniz. Gold üyelik paketlerini görmek için **${prefix}market** yazarak paketlerimizi görebilirsiniz. Gold üyelik satın almak için **${prefix}satınal <ürün kodu>** yazarak istediğiniz paketi satın alabilirsiniz. Biriktirdiğiniz para miktarını görebilmek için ise **${prefix}para** yazarak öğrenebilirsiniz. \n**<a:logo:751689078679797770>** **${prefix}kurallar** Sunucunuzun kurallar kanalına yazar iseniz sunucunuz için gerekli olan kurallar mesajını embedli bir şekilde yazar. \n\n**<a:logo:751689078679797770>** **${prefix}ayarlar** Sunucunuzda hangi sistemin açık olduğunu gösterir.`
    )

    .addField(
      `__Not__`,
 `📌  \`Çoğu botta olduğu gibi bizim botumuzda sizin bazı verilerinizi kaydetmektedir. Botumuz sunucu bilgileri, kullanıcı bilgileri, kullanıcı mesaj bilgileri ve mesaj içerği gibi bazı bilgileri sizlerin güvenliği için kayıt altına almaktadır. ` 
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
  .setFooter("Taxperia Bilgi Komutları", client.user.avatarURL('https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png'));
  
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
  .setAuthor(" Taxperia   |   İnfo  ")
  .setDescription("")
  .setColor(0x00ffff)
  .setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
  .setDescription(
    `Hello everyone. How about some bot-related settings?`
  )

  .addField(
    `__Note__`,
`📌  \`Like most bots, our bot saves some of your data. Our bot records some information such as server information, user information, user message information and message content for your security.` 
  )
  .addField(
    `__İnformation__`,
    `📌  \`${prefix}info\` | Shows some information about the bot. \n 📌 \`${prefix}sponsor\` | Shows the bot's sponsors.  \n 📌 \`${prefix}invite\` | Shows the invite part.` 
  )

.setImage("https://cdn.discordapp.com/attachments/865509623753867264/892504709905145897/standard_2.gif")
.setFooter("Taxperia info commands", client.user.avatarURL('https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png'));

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

}}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["info"],
  permLevel: 0
};

exports.help = {
  name: "bilgi",
  description: "Tüm komutları gösterir.",
  usage: "yetkili "
};
