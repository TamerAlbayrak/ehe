const Discord = require('discord.js')
const db = require("quick.db")
const ayarlar = require('../ayarlar.json');
const ms = require('ms');
const moment = require('moment');
exports.run = async(client, message, args) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  const üye = message.mentions.members.first()

let ownerid = `352036341153923072`
//--------------------------------------------------------------------------------------

  
if(args[0] == 'ekle') {
  let owner = [ownerid];
  if (owner.includes(message.author.id)) {
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
  if (!user) return message.reply(
    new Discord.MessageEmbed()
    .setColor("RANDOM")
   .setDescription("Gold üye olacak kişiyi etiketlemedin!")
  )


  üye.roles.add("708986399365529641")
  db.set(`gold${user.id}`, 'gold')
message.channel.send(
    new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${user} adlı kişi gold üye oldu. Yaşasın...`))
  
}}

if (args[0].toLowerCase() === 'süreli') {
  if (message.author.id != ownerid) return;
  if (args[1].toLowerCase() === 'ver') {
    const üye = message.mentions.members.first()
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[2]);
    let Argümanlar = ['saniye', 'dakika', 'saat', 'gün'];
    if (!args[2]) return message.channel.send(`${message.author} Gold üyelik vereceğin kullanıcı ID'si girmelisin.`).then(m => m.delete({ timeout: 5000 }));
    if (!Number(args[2])) return message.channel.send(`${message.author} Kullanıcı ID'leri sayı ile yazılmalı.`).then(m => m.delete({ timeout: 5000 }));
    if (!args[3]) return message.channel.send(`${message.auhtor} Geçerli bir zaman belirtmelisin. \nÖrnek: !goldsistem süreli ver ${user} 5 gün`).then(m => m.delete({ timeout: 5000 }));
    if (!args[4]) return message.channel.send(`${message.author} Geçerli bir zaman belirtmelisin. Mevcut olan zamanlar: saniye, dakika, saat, gün`).then(m => m.delete({ timeout: 5000 }));
    if (!Argümanlar.includes(args[4])) return message.channel.send(`${message.author} ${args[4]} Adında bir zaman yok geçerli zaman belirtmelisin. Mevcut olan zamanlar: saniye, dakika, saat, gün`).then(m => m.delete({ timeout: 5000 }));
    let BitişSüresiHesaplayıcı = Date.now() + ms(args[3] + ' ' + args[4].replace('dakika', 'minutes').replace('saat', 'hours').replace('saniye', 'seconds').replace('gün', 'day'))
    user.roles.add("708986399365529641")
    db.set(`gold${user.id}`, 'gold'), {
      Bitiş: BitişSüresiHesaplayıcı,
      Başlangıç: Date.now()
    };
    message.channel.send(`${user} Adlı kişiye ${args[3]} ${args[4]} boyunca gold üyelik verildi. \nKullanıcının gold bitiş tarihi: ${moment(BitişSüresiHesaplayıcı).format('DD.MM.YYYY - HH:mm:ss')}`).then(m => m.delete({ timeout: 5000 }));
    setTimeout(() => {
      user.roles.remove("708986399365529641")
      db.delete(`gold${user.id}`)
    }, ms(args[3] + ' ' + args[4].replace('dakika', 'minutes').replace('saat', 'hours').replace('saniye', 'seconds').replace('gün', 'day')));
  }
  if (args[1].toLowerCase() === 'al') {
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[2]);
    if (message.author.id != ownerid) return;
    if (!args[2]) return message.channel.send(`${message.author} Süreli gold üyeliği alacağın kullanıcı ID'si girmelisin.`).then(m => m.delete({ timeout: 5000 }));
    if (!Number(args[2])) return message.channel.send(`${message.author} Kullanıcı ID'leri sayı ile yazılmalı.`).then(m => m.delete({ timeout: 5000 }));
    if (!db.has(`gold${user.id}`, 'gold')) return message.channel.send(`${message.author} Bu kullanıcıda gold üyelik yok.`).then(m => m.delete({ timeout: 5000 }));
    user.roles.remove("708986399365529641")
    db.delete(`gold${user.id}`)
    return message.channel.send(new Discord.MessageEmbed().setDescription(`${user} Kullanıcısından gold üyelik başarıyla alındı.`)).then(m => m.delete({ timeout: 5000 }));

  }
}

if(args[0] === 'kod-oluştur' || args[0] === 'kodoluştur'){
  let owner = [ownerid];
    function rasteleSembol(length) {
       var result           = '';
       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
       var charactersLength = characters.length;
       for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    }
    console.log(rasteleSembol(5));
  
    console.log(rasteleSembol(5));
          
        let kod1 = rasteleSembol(5, '0A')
        let kod2 = rasteleSembol(5, '0A')
        let kod3 = rasteleSembol(5, '0A')
        
        let goldkod = kod1 + '-' + kod2 + '-' + kod3
        db.set(goldkod,"gold")
         message.channel.send(goldkod)
    
     }
  
     if(args[0] === 'kod'){
  
      let kupon = args[1]
      message.delete()
      if(!kupon) return message.reply("Kuponu yazmayı unutma!");
      if(db.fetch(`gold${message.author.id}`) == "gold") {
         
          message.channel.send("Zaten premium üyesin!")
      
      } else {
      if(db.fetch(kupon) == "gold") {
         message.reply("Artık gold üyesin ^^")
      
         db.set(`gold${user.id}`, 'gold')
         
  
         db.delete(kupon)
         let argüman = args[1];
        db.set(kupon, "kullanılmış")
      
      } else if(db.fetch(kupon) == "kullanılmış") { 
          message.reply(":x: | Bu kod daha önce başka bir kullanıcı tarafından kullanılmış!")
      } 
      else {
        message.channel.send(':x: | Bu kod hatalı.')
      }
      }
    }
  
if(args[0] == 'kaldır') {
let owner = [ownerid];
if (owner.includes(message.author.id)) {
let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
if (!user) return message.reply(
  new Discord.MessageEmbed()
  .setColor("RANDOM")
 .setDescription("Gold üyeliği alınacak kişiyi etiketlemedin!")
);
üye.roles.remove("708986399365529641")
db.delete(`gold${user.id}`)
message.channel.send(
  new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${user} adlı kişi artık gold üye değil.`)

)
}}
  
  
if(args[0] == 'sorgula') {
  var user = message.mentions.users.first() || message.author;
  let kurucu = db.fetch(`gold${user.id}`)
  let u = message.mentions.users.first() || message.author;
  if(u.bot === true) {message.channel.send(new Discord.MessageEmbed()
  .setDescription("Botlar yetkili olamaz!")
  .setColor("ff0000"))}  
  else {
  var ks = [];  
  if(kurucu == null) ks = ` \`Hayır. Bu kullanıcı gold üye değildir!\``
  if(kurucu != null) ks = ` \`Evet. Bu kullanıcı gold üyedir.\``
  message.channel.send(new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`${user.username}`, user.avatarURL())
  .setThumbnail(user.avatarURL())                     
  .setTitle(`Gold üyelik sorgulama bilgisi:`)                 
  .addField(`**Kullanıcı:**`, `<@${user.id}>`, true)
  .addField("**Kullanıcı gold üye mi?**", ks, true)
  .setFooter(`${client.user.username} gold üye sistemi`)   
  .setTimestamp())}    }
    

}
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'goldsistem'
};