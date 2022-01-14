const Discord = require('discord.js');
const db = require('quick.db');
const bot = new Discord.Client();
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json") // eğer ayarlar.json değilse değiştirin burayı

module.exports.run = async (bot, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

  if (db.fetch(`admin${message.author.id}`) !== "admin") return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription('Bu komutu kullanabilmek için botun yetkilisi olmalısınız!'))
    
    message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setTitle("Sevgili Kurucum").setDescription(`Ben yeniden başlıyorum. Lütfen bekleyiniz...`).setFooter("© 2021 Taxperia")).then(msg => {
    console.log(`Konsol: Yeniden başlatılıyor...`);
    process.exit(0);
  })

} else {

  if (db.fetch(`admin${message.author.id}`) !== "admin") return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription('You must be an administrator of the bot to use this command!'))
    
  message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Taxperia Bot Restarting...`)).then(msg => {
  console.log(`Konsol: Yeniden başlatılıyor...`);
  process.exit(0);
})
};
          
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r","reboot","yenile","yeniden başlat"],
  permLevel: 4
};

module.exports.help = {
  name: 'reboot',
  description: 'Şşş!',
  usage: 'reboot'
};