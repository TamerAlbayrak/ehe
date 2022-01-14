const Discord = require("discord.js");
const loglar = require("../loglar.json");
ayarlar = require("../ayarlar.json"),
db = require('quick.db');
const { MessageButton } = require("discord-buttons") 

exports.run = async (client, message, params) => {
	 let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  const embedyardim = new Discord.MessageEmbed()
    .setAuthor(" Taxperia   |   Kullanıcı Komutları ")
    .setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
    .setDescription("")
    .setColor(0x00ffff)
    .setDescription(
    `**<a:logo:751689078679797770>** **${prefix}ekran-paylaş** Seslide ekran paylaşır. \n**<a:logo:751689078679797770>** **${prefix}istatistik** Bot istatistiklerini gösterir. \n**<a:logo:751689078679797770>** **${prefix}kullanıcı-bilgi** Kullanıcı bilginizi gösterir. \n**<a:logo:751689078679797770>** **${prefix}sunucu-resmi** Sunucunuzun resmini gösterir.  \n**<a:logo:751689078679797770>** **${prefix}website** Bot web sitesine giden bağlantıyı gösterir. \n**<a:logo:751689078679797770>** **${prefix}yavaşmod** Yazdığınız kanala ayarladığınız süre kadar yavaşlık uygular. Kullanıcılar belirttiğiniz süre sonunda mesaj yazabilir. \n**<a:logo:751689078679797770>** **${prefix}sa-as aç** Sohbet kanalına **sa** veya **selam** gibi mesajlar yazdığınızda **Aleyküm Selam** gibi cevaplar verir.  \n**<a:logo:751689078679797770>** **${prefix}kanalbilgi** Kanal bilgisini gösterir. \n**<a:logo:751689078679797770>** **${prefix}afk** AFK moduna geçersiniz. Sunucu sahibi değil iseniz kullanıcı adınızın başına afk yazısı ekler ve sizi etiketleyen olur ise afk nedeninizi gösterir. \n**<a:logo:751689078679797770>** **${prefix}avatar** Etiketlediğiniz kullanıcının profil resmini yazdığınız kanala atar. \n**<a:logo:751689078679797770>** **${prefix}ping** Botun gecikme sürelerini gösterir. \n**<a:logo:751689078679797770>** **${prefix}desteksunucusu** Destek sunucumuzu gösterir. \n**<a:logo:751689078679797770>** **${prefix}sunucubilgi** Sunucunuz hakkında bilgileri gösterir. \n**<a:logo:751689078679797770>** **${prefix}oyverdim** Botumuza top.gg üzerinden oy verdiysen destek sunucumuza bu komutu yazarak <@&828711960450170901> rolünü alabilirsiniz.  \n**<a:logo:751689078679797770>** **${prefix}sunucuresmi** Yazdığınız kanala sunucunun resmini atar.  \n**<a:logo:751689078679797770>** **${prefix}rol-bilgi** Etiketlediğiniz rol hakkında bilgi verir. \n**<a:logo:751689078679797770>** **${prefix}ses** Sesli kanalda youtube vb. aktiviteleri yapmanızı sağlar. \n**<a:logo:751689078679797770>** **${prefix}profil-sistemi** Yazdığınız bilgilere göre yeni bir profil erkanı gösterir. \n**<a:logo:751689078679797770>** **${prefix}emoji-al** Başka sunucuya ait emojiyi koyduğunuzda o emojiyi sizin sunucunuza ekler. `
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
  aliases: ["member"],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  description: "Tüm komutları gösterir.",
  usage: "yetkili "
};
