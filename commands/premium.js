const { JSON } = require('odies.database');
const Discord = require('discord.js')
const dbb = new JSON('database')
const ms = require('ms');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
 exports.run = async(client, message, args) => {
  if (db.fetch(`admin${message.author.id}`) !== "admin") return message.reply('Bu komutu kullanabilmek için botun yetkilisi olmalısınız!')
 
  if(args[0] === 'ekle'){
if(!args[1]) return message.channel.send('Bir kullanıcı ID\'si belirtmen gerekiyor.')
db.set(`premium_${args[1]}`,"premium")
 message.channel.send(`${args[1]} ID'li kullanıcı premium üye oldu.`)
 }

 if(args[0] === 'sil'){
	 let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
  if(!args[1]) return message.channel.send('Bir kullanıcı ID\'si belirtmen gerekiyor.')
  db.delete(`premium_${user.id}`)
   message.channel.send(`${args[1]} ID'li kullanıcı artık premium üye değil.`)

 }

 if(args[0] === 'kod-oluştur' || args[0] === 'kodoluştur'){


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
    
    let prekod = kod1 + '-' + kod2 + '-' + kod3
    db.set(prekod,"premium")
     message.channel.send(prekod)

 }

 if(args[0] === 'kod'){

  let kupon = args[1]
  message.delete()
  if(!kupon) return message.reply("Kuponu yazmayı unutma!");
  if(db.fetch(`premium_${message.author.id}`) == "premium") {
     
      message.channel.send("Zaten premium üyesin!")
  
  } else {
  if(db.fetch(kupon) == "premium") {
     message.reply("Artık premium üyesin ^^")
  
     db.set(`premium_${message.author.id}`,"premium")
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
  
  
    
  };
 }
exports.conf = {
  enabled : true,
  guildOnly: true,
  aliases: ["pre", "premium","premium"],
  permlevel: 4
}
exports.help = {
  name: "presistem",
  description: "Premium üyelik sistemi",
  usage: "+premium ekle/kaldır <kullanıcı idsi>"
}