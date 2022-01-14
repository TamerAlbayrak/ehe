const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('croxydb')

exports.run = async(client, message) => {
    const üye = message.mentions.members.first()

    var kasa = [
        "Tekrar dene",
        "1 günlük altın üyelik",
        "Birşey kazanamadın",
        "1 günlük premium üyelik",
        "5 günlük altın üyelik ",
        "10.000 tax parası",
        "50.000 tax parası",
        "1 haftalık altın üye",
        "100.000 tax parası",
        "1 haftalık premium üye",
     ]
    
  

message.channel.send(
    new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/865509623753867264/907279323310993408/kasa-cilingir-anahtarci.gif')


).then(message => {

    setTimeout(function(){

    var kasa1 = kasa[Math.floor(Math.random() * kasa.length)];

    message.edit(`${kasa1}`);

}, 5000)

})

}







exports.conf = {
    guildOnly: "false",
    enabled: "true",
    aliases: ["case", "kasa"],
    permlevel: 0,
    }

exports.help = {
    name: "sandık",
    description: "Rasgele Eşya Verir.",
    usage: "sandık"
}