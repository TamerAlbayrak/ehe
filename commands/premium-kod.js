const Discord = require('discord.js');
const { JSON } = require('odies.database');
const dbb = new JSON('database')
const db = require('quick.db');
exports.run = async (client, message, args) => {
  
  let kupon = args[0]
  message.delete()
  if(!kupon) return message.reply("Kodu yazmayı unutma!");
  if(db.fetch(`premium_${message.author.id}`) == "premium") {
     
      message.channel.send("Zaten premium üyesin!")
  
  } else {
  if(db.fetch(kupon) == "premium") {
     message.reply("Artık premium üyesin ^^")
  
     db.set(`premium_${message.author.id}`,"premium")
     db.delete(kupon)
     let argüman = args[0];
    db.set(kupon, "kullanılmış")
  
  } else if(db.fetch(kupon) == "kullanılmış") { 
      message.reply(":x: | Bu kod daha önce başka bir kullanıcı tarafından kullanılmış!")
  } else {
    message.channel.send(':x: | Bu kod hatalı.')
  }}
  
};   
  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['premiumkod'],
  permLevel: 0 
};

exports.help = {
  name: 'premium-kod', 
  description: 'Botun pingini gösterir',
  usage: 'ping'
};