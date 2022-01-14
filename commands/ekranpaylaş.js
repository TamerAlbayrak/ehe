const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`)
    if (kontrol == "TR_tr") {

        if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed().setDescription("Bir sesli kanalda değilsiniz!").setColor('RANDOM'));
        else message.channel.send(new Discord.MessageEmbed().setDescription(`**[Ekran Paylaşımı](https://discordapp.com/channels/${message.guild.id}/${message.member.voice.channel.id})**`).setColor('RANDOM'));
    

    } else {

        if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed().setDescription("You are not on a voice channel!").setColor('RANDOM'));
        else message.channel.send(new Discord.MessageEmbed().setDescription(`**[Screen Share](https://discordapp.com/channels/${message.guild.id}/${message.member.voice.channel.id})**`).setColor('RANDOM'));




} 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["screen-share"],
  permLevel: 0
};

exports.help = {
  name: 'ekran-paylaş',
  description: 'Sesli kanalda ekran paylaşmanızı sağlar.',
  çalma: 'ekran-paylaş',
};