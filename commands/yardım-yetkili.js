const Discord = require("discord.js");
const loglar = require("../loglar.json");
ayarlar = require("../ayarlar.json"),
db = require('quick.db');
const { MessageButton } = require("discord-buttons") 

exports.run = async (client, message, params) => {
	 let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  const embedyardim = new Discord.MessageEmbed()
    .setAuthor(" Taxperia   |   Yetkili Komutları ")
    .setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
    .setDescription("")
    .setColor(0x00ffff)
    .setDescription(
      `\n**<a:logo:751689078679797770>** **${prefix}odayaçek** Seslideki kişiyi sizin odanıza çeker. \n**<a:logo:751689078679797770>** **${prefix}oto-tag** Sunucuya gelen kişiye belirlediğiniz tagı verir. \n**<a:logo:751689078679797770>** **${prefix}reklam-taraması** Oynuyor kısmında ve kullanıcı isminde reklam olanları listeler. \n**<a:logo:751689078679797770>** **${prefix}tag-taraması** Belirttiğiniz tagın sunucunuzda kimin kullandığını gösterir. \n**<a:logo:751689078679797770>** **${prefix}temizle** 0-99 arasında belirtiğiniz sayı kadar mesaj siler. \n**<a:logo:751689078679797770>** **${prefix}otobotsiliciaç** Yazdığınız kanaldaki bot mesajlarını 2 dakika sonra siler. \n**<a:logo:751689078679797770>** **${prefix}cezalı-rol** Cezalı rol ayarlar. \n**<a:logo:751689078679797770>** **${prefix}isim-değiştir** Etiketlediğiniz kullanıcının ismini belirlediğiniz isimle değiştirir. \n**<a:logo:751689078679797770>** **${prefix}mesaj-log** Mesaj silme ve düzenlenme durumunda ayarlanan kanala bilgi mesajı atar. \n**<a:logo:751689078679797770>** **${prefix}süreli-rol** Etketlediğiniz kullanıcıya etiketlediğiniz rolü belirlediğiniz süre kadar verir ve süre bitiminde o rolü o kullanıcıdan geri alır.`
    )
    .addField(
      `__Bilgilendirme__`,
      `📌  \`${prefix}bilgi\` | Bot ile ilgili bazı bilgileri gösterir. \n 📌 \`${prefix}sponsor\` | Botun Sponsorlarını Gösterir.  \n 📌 \`${prefix}davet\` | Davet Kısmını Gösterir.` 
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
  aliases: ["authorized"],
  permLevel: 0
};

exports.help = {
  name: "yetkili",
  description: "Tüm komutları gösterir.",
  usage: "yetkili "
};
