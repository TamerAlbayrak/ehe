const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Yönetici` Yetkisine Sahip Olmalısınız**"))


  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.MessageEmbed()
           .setTitle(`Banlanan Kullanıcı bulunamadı`)
       .setColor("RANDOM");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.MessageEmbed()
           .setTitle("Ban Listesi: Sunucudan Banlananlar. ")
       .setColor("RANDOM");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
   });
  } else {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Administrator` permission.**"))


    var userlist = message.guild.fetchBans();
    userlist.then(collection =>
    {
      if(collection.first() == null)
      {
        const embed = new Discord.MessageEmbed()
            .setTitle(`The Banned User was not found.`)
        .setColor("RANDOM");
        message.channel.send({embed});
      }
      else
      {
        const embed = new Discord.MessageEmbed()
            .setTitle("Ban List: Those That Are Banned From The Server.")
        .setColor("RANDOM");
        for(userlist of collection)
        {
            var user = userlist[1];
            embed.addField(` **${user.tag}**`, `_________ _____________`);
        }
        message.channel.send({embed});
      }
    });
  };

 }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlılar","banliste","ban liste"],
  permLevel: 0
};
module.exports.help = {
  name: 'banlist',
  description: 'Sunucundan Banlanan üyeleri gösterir.',
  usage: 'banlananlar'
};
