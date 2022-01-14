const Discord = require('discord.js'); //dcs ekibi
const db = require('quick.db')
exports.run = async (client, message, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
    if (kontrol == "TR_tr") {
  
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))

  let isimm = args.slice(0).join(' ');
  if(!isimm) return message.channel.send(` Ototag Kullanımı: **${prefix}oto-tag ♛| uye** \n:bulb: Lütfen **uye** Yazan Yere Bir Üye Adı Yazmayınız. Sadece Oradaki Tagı Değiştirmeniz Yeterli Olacaktır.`)
  
   message.channel.send(':green_circle: Oto Tag Sistemi Ayarlanmıştır.\n:bulb: Ototagın Çalışması İçin Sunucuya Yeni Birileri Girmelidir. Kapatmak İçin `!ototagkapat`')
  
        db.set(`ototag_${message.guild.id}`, isimm)  
    } else {

      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

        let isimm = args.slice(0).join(' ');
        if (!isimm) return message.channel.send(` Auto Tag Usage: **${prefix}auto-tag ♛| member** \n:bulb: Please do not write a username where it says **uye"**. It will be enough to just write the tag and uye there.`)

        message.channel.send(':green_circle: Auto Tag system is set. \n:bulb: A new person must enter the server for auto tag to work. To Turn Of: `!ototagkapat`')

        db.set(`ototag_${message.guild.id}`, isimm)  
	}};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'oto-tag',
  description: 'taslak', 
  usage: 'ototag'
};