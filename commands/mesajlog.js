const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))


    let log = message.mentions.channels.first();
    let logkanal = await db.fetch(`dcslog_${message.guild.id}`)
      
    if (args[0] === "sıfırla" || args[0] === "deaktif") {
    if(!logkanal) {
      
    let dcs1 = new Discord.MessageEmbed()
    .setDescription(`Günlük kanalı ayarlı değil`)
    .setColor("RANDOM")
    
    return message.channel.send(dcs1)
    }
        
    db.delete(`dcslog_${message.guild.id}`)
      
    let dcs = new Discord.MessageEmbed()
    
    .setDescription(`Günlük kanalı başarıyla sıfırlandı`)
    .setColor("RANDOM")
    
    return message.channel.send(dcs)
    }
      
    if (!log) {
      
    let dcs4 = new Discord.MessageEmbed()
    
    .setDescription(`Bir günlük kanalı belirt`)
    .setColor("RANDOM")
    
    return message.channel.send(dcs4)
    }
    
    db.set(`dcslog_${message.guild.id}`, log.id)
    
    let dcs2 = new Discord.MessageEmbed()
    
    .setDescription(`Günlük kanalı başarıyla ${log} olarak ayarlandı`)
    .setColor("RANDOM")
    
    message.channel.send(dcs2);
    



  } else {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))

    let log = message.mentions.channels.first();
    let logkanal = await db.fetch(`dcslog_${message.guild.id}`)
      
    if (args[0] === "reset" || args[0] === "deactive") {
    if(!logkanal) {
      
    let dcs1 = new Discord.MessageEmbed()
    .setDescription(`The log Channel is not already set`)
    .setColor("RANDOM")
    
    return message.channel.send(dcs1)
    }
        
    db.delete(`dcslog_${message.guild.id}`)
      
    let dcs = new Discord.MessageEmbed()
    
    .setDescription(`Log Channel reset successfully`)
    .setColor("RANDOM")
    
    return message.channel.send(dcs)
    }
      
    if (!log) {
      
    let dcs4 = new Discord.MessageEmbed()
    
    .setDescription(`Specify a log channel`)
    .setColor("RANDOM")
    
    return message.channel.send(dcs4)
    }
    
    db.set(`dcslog_${message.guild.id}`, log.id)
    
    let dcs2 = new Discord.MessageEmbed()
    
    .setDescription(`Log channel successfully set to ${log}`)
    .setColor("RANDOM")
    
    message.channel.send(dcs2);

  }


};
    exports.conf = {
        enabled: true,
        guildOnly: false, 
        aliases: ["sohbet-log", "chat-log"], 
        permLevel: 0 
      };
      
      exports.help = {
        name: 'mesaj-log',
        description: 'Shows all commands.',
        usage: 'help'
      };
      // Dcs By ? Tedoa#0001


 

