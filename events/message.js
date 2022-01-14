let ayarlar = require('../ayarlar.json')   
const Discord = require("discord.js")
const client = new Discord.Client();
const db = require("quick.db") 
module.exports = async message => {
  let client = message.client;
  if (message.author.bot) return;
 let aa = require('../ayarlar.json')
 let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix             
let csdb = require("quick.db")    
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
    if (!client.commands.has(command)) {
    if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    } else {
      if(command == '') return;
const pixel = new Discord.MessageEmbed()
.setDescription("Botta `" + command + '` Adında Bir Komut Bulunamadı.')
.setColor('RANDOM')
.setTimestamp()
    message.channel.send(pixel).then(x => x.delete({timeout: 5000}))
  }
  }


  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {

  

	
	  let karaliste = db.fetch(`kliste.${message.author.id}`);
   const karalistedesin = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Hata!')
    .setDescription('Kara listeye alındığın için botun hiç bir komudunu kullanamazsın !')
    .addField('Kara listeye alınma sebebin', karaliste)
   if(karaliste) return message.channel.send(karalistedesin)
    
      if(db.has(`bakım_${client.user.id}`)){
        if (db.fetch(`admin${message.author.id}`) !== "admin") return message.channel.send(
        new Discord.MessageEmbed()
          .setColor('BLACK')
          .setAuthor(`${client.user.username} Bakım`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
          .setTitle("Botumuz bakımdadır! Lütfen daha sonra tekrar deneyiniz.")
          .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
        )
      }

    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};