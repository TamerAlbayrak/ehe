const Discord = require("discord.js");
const loglar = require("../loglar.json");
ayarlar = require("../ayarlar.json"),
db = require('quick.db');
const { MessageButton } = require("discord-buttons") 

exports.run = async (client, message, params) => {
	 let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  const embedyardim = new Discord.MessageEmbed()
    .setAuthor(" Taxperia   |   Seviye Sistemi ")
    .setThumbnail(`https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png`)
    .setDescription("")
    .setColor(0x00ffff)
    .setDescription(
      `**<a:logo:751689078679797770>** **${prefix}seviye-ayarla durum aç** Seviye sistemini açar. \n**<a:logo:751689078679797770>** **${prefix}seviye-ayarla durum kapat** Seviye sistemini kapatır. \n**<a:logo:751689078679797770>** **${prefix}seviye-ayarla log kanal #logkanalı** Seviye sistemi için log kanalı ayarlar. \n**<a:logo:751689078679797770>** **${prefix}seviye-ayarla log mesaj seviye "mesajınız"** Günlük kanalına yazılacak mesajı ayarlar. \n**<a:logo:751689078679797770>** **${prefix}seviye-kart-özelleştirme renk (#a700a4 veya renk ismi olarak yazmalısın. Not: Parantezleri yazmamalısın.) ** Seviye kartının rengini değiştirir. \n**<a:logo:751689078679797770>** **${prefix}seviye-kart-özelleştirme resim (URL)** Seviye kartının arkasındaki resmi değiştirir. Not: png veya jpeg olan resimleri tercih etmeniz gerekmektedir. Eğer farklı uzantılı bir resim koyduysanız seviye kartınız gelmeyecektir. \n**<a:logo:751689078679797770>** **${prefix}sıralama** Sunucudaki kişilere göre seviye sıralamasını gösterir. \n**<a:logo:751689078679797770>** **${prefix}seviye** Seviye kartınızı gösterir. Not: 5-15 sn arasında gelmektedir. `
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
  aliases: ["rank-system"],
  permLevel: 0
};

exports.help = {
  name: "seviye-sistemi",
  description: "Tüm komutları gösterir.",
  usage: "yetkili "
};
