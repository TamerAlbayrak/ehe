const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {

  message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription('Dlive: https://dlive.tv/Tamer_Albayrak \nYoutube:https://www.youtube.com/channel/UCc8WglU19Jo1UgI7BJKukpA'))
  
};

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['sosyalmedya', 'social-media', 'socialmedia'],
   permLevel: 0
 };

 exports.help = {
   name: 'sosyal-medya',
   description: 'Instagram Adresini Atar',
   usage: 'sosyal-medya'
}