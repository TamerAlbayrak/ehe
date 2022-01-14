const Discord = require('discord.js')
const db = require("quick.db")
exports.run = async(client, message, args) => {
var id = message.author.id
var gid = message.guild.id;
var para = await db.fetch(`para_${id}_${gid}`)
let gold = await db.fetch(`gold${message.author.id}`, 'gold')
message.channel.send(new Discord.MessageEmbed()
.setColor("GOLD")
.setAuthor(`${client.user.username} Gold Market!`, client.user.avatarURL())
.setDescription(`Gold Üyelik => \`50.000\`₺ (Ürün Kodu: \`1\`)`)
.setFooter(`!satınal <ürün_kodu> Yazarak Ürünü Satın Alabilirsiniz!`))   
}

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'market'
};