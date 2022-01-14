const Discord = require("discord.js");
const db =  require("quick.db");

module.exports.run = async (client, message, args,) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {


  const voiceChannels = message.guild.channels.cache.filter(c => c.type === "voice");
  let count = 0;

  let aktif = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;


/*/\`•\` **Sunucudaki aktif kişi sayısı:** \`${aktif}\`
\`•\` **Sunucudaki rahatsız etmeyindeki kişi sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'dnd').size}\`
\`•\` **Sunucudaki boştaki kişi sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'idle').size}\`
\`•\` **Sunucudaki çevrimdışı kişi sayısı:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'offline').size}\`
/*/

//embedin içine koyarsan 

  for (const [id, voiceChannel] of voiceChannels)
  count += voiceChannel.members.size;
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setThumbnail(message.guild.iconURL())
  .setDescription(`
\`•\` **Ses kanallarında \`${count}\` kişi bulunmaktadır!**
\`•\` **Sunucuda \`${message.guild.memberCount}\` kişi bulunmaktadır!**
\`•\` **Sunucudaki bot sayısı:** \`${message.guild.members.cache.filter(m => m.user.bot).size}\`
\`•\` **Sunucudaki takviye seviyesi:**  \`${message.guild.premiumSubscriptionCount}\``)
.setFooter("© 2021 Taxperia", client.user.avatarURL('https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png'))
    .setTimestamp();
    
   
    message.channel.send(embed);

  } else {

    const voiceChannels = message.guild.channels.cache.filter(c => c.type === "voice");
    let count = 0;
  /*/      \n*Number of active people on the server:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'online').size}\`
      \n**Number of dnd contacts on the server:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'dnd').size}\`
      \n**Number of idle people on the server:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'idle').size}\`
      \n**Number of offline people on the server:** \`${message.guild.members.cache.filter(x => x.user.presence.status === 'offline').size}\`
     /*/ //embed içi

    for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
    .setDescription(`
      \`•\` **There are \`${count}\` people in the voice channel!**
      \`•\` **There are \`${message.guild.memberCount}\` people on the server!**
      \`•\` **Number of bots on the server:** \`${message.guild.members.cache.filter(m => m.user.bot).size}\`
      \`•\` **Boost level on the server:**  \`${message.guild.premiumSubscriptionCount}\``)
      .setFooter("© 2021 Taxperia", client.user.avatarURL('https://cdn.discordapp.com/attachments/768490283770839080/842798834420547614/Taxperia1.png'))
          .setTimestamp();
     
      message.channel.send(embed);


  }

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["total", "toplamüye", "toplamkişi", "totalmember"],
  permLevel: 0
};
exports.help = {
  name: "say",
  description: "- ",
  usage: "say"
};