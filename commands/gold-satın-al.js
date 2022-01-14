const Discord = require('discord.js')
const db = require("quick.db")
exports.run = async(client, message, args) => {
var id = message.author.id
var gid = message.guild.id;
var para = await db.fetch(`para_${id}_${gid}`)
let gold = await db.fetch(`gold${message.author.id}`, 'gold')

if(args[0] == '1') {
  let user = message.guild.member(message.mentions.users.first());
if(para < 50000) return message.channel.send("Paranız Yok! Gereken Para: \`50.000\`₺ Senin Paran: \`"+ para + "\`₺")
if(gold) return message.channel.send("Zaten Gold Üyeliğin Bulunuyor!")
user.roles.add("708986399365529641")
db.set(`gold${message.author.id}`, 'gold')
db.subtract(`para_${id}_${gid}`, 50000)
message.channel.send(`<@${message.author.id}> Başarıyla Gold Üye Oldunuz. Hesabınızdan \`50000\`₺ Alındı!`)} 
}

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'satınal'
};