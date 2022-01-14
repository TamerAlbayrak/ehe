const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  
let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

message.channel.send({embed: {
    color: 0xD97634,
    title: "Şuan Hiçbir Sponsorumuz Yoktur.",
    url: "https://www.taxperia.tk",
    description: "Sponsorluk İçin talbayrak9243@gmail.com Adresine E-posta Göndererek Ulaşabilirsiniz.",
            }});
          } else {

            message.channel.send({embed: {
              color: 0xD97634,
              title: "We Have No Sponsors Right Now.",
              url: "https://www.taxperia.tk",
              description: "You can reach talbayrak9243@gmail.com for sponsorship by sending an e-mail.",
                      }});
          }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sponsor'],
  permLevel: 0
};

exports.help = {
  name: 'sponsor',
  description: 'sponsorları gösterir.',
  usage: 'sponsor'
};



