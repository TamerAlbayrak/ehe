const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('croxydb')

exports.run = async(client, message) => {
    const üye = message.mentions.members.first()

    var iq = [
    "İQ Seviyesi %0",
    "İQ Seviyesi %5",
    "İQ Seviyesi %10",
    "İQ Seviyesi %15",
    "İQ Seviyesi %20",
    "İQ Seviyesi %25",
    "İQ Seviyesi %30",
    "İQ Seviyesi %35",
    "İQ Seviyesi %40",
    "İQ Seviyesi %45",
    "İQ Seviyesi %50",
    "İQ Seviyesi %55",
    "İQ Seviyesi %60",
    "İQ Seviyesi %65",
    "İQ Seviyesi %70",
    "İQ Seviyesi %75",
    "İQ Seviyesi %80",
    "İQ Seviyesi %85",
    "İQ Seviyesi %90",
    "İQ Seviyesi %95",
    "İQ Seviyesi %100"
     ]
    
  


message.channel.send(
  new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('İq Seviyesi Ölçülüyor...')
    .setImage('https://c.tenor.com/LXUFRoeaoWwAAAAd/astra-iq.gif')


).then(message => {

    setTimeout(function(){

    var iq1 = iq[Math.floor(Math.random() * iq.length)];

    message.edit(

        new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('İq Seviyesi Ölçüldü...')
       .setDescription( `:brain: ${iq1}`)
        
        );

}, 3000)

})

}







exports.conf = {
    guildOnly: "false",
    enabled: "true",
    aliases: ["iq-ölç", "iq-ölçer"],
    permlevel: 0,
    }

exports.help = {
    name: "iq",
    description: "Rasgele Eşya Verir.",
    usage: "iq"
}