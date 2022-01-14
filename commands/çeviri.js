const Discord = require("discord.js");
const db = require('quick.db');
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MzEzNDY3MzQ1MDEwNjg5MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA0ODQ1NDIwfQ.2ICPif8BteUS7pyvPQo9QAlSeLntlDAXbjsGgsmSEM4', client);

module.exports.run = async (client, message, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
            message.channel.send(new Discord.MessageEmbed()
                .setTitle("UYARI")
                .setColor("RANDOM")
                .setFooter(client.user.username)
                .setThumbnail(client.user.avatarURL())
                .setDescription("Bu Komutu Kullanabilmek icin Botumuza Oy Vermelisiniz!")
                .addField("Oy Vermek icin:", `[Bana Tikla!](https://top.gg/bot/693134673450106890/vote)`)
            )

        } else {



    let google = args.slice(0).join('+');

        let link = `https://translate.google.com/?hl=tr#tr/en/` + google;
        if(!link)return message.reply("Hata !")
  if(!google) return message.reply("**Lütfen Ne Çevireceğimi Yaz**")
        let embed = new Discord.MessageEmbed()
    
    .setColor("0xe2ff00")
    .setTimestamp()
    
    .addField("Kelime:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
.setFooter('Tax | Google Çeviri Sistemi')    
          
        message.channel.send(embed);


    

}
});

} else {
    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
            message.channel.send(new Discord.MessageEmbed()
                .setTitle("Warning")
                .setColor("RANDOM")
                .setFooter(client.user.username)
                .setThumbnail(client.user.avatarURL())
                .setDescription("To Use This Command You Must Vote Our Bot!")
                .addField("To vote:", `[Click Me!](https://top.gg/bot/693134673450106890/vote)`)
            )

            let google = args.slice(0).join('+');

            let link = `https://translate.google.com/?hl=tr#tr/en/` + google;
            if(!link)return message.reply("Error!")
      if(!google) return message.reply("**Please Write What To Translate**")
            let embed = new Discord.MessageEmbed()
        
        .setColor("0xe2ff00")
        .setTimestamp()
        
        .addField("Word:", `${args.slice(0).join(' ')}`)
        .addField('Link:', `${link}`)
    .setFooter('Tax | Google Translation System')    
              
            message.channel.send(embed);
    
    
        
    
    }
    });
};
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['g-çeviri'],
  permLevel: 0
};

exports.help = {
  name: 'çeviri',
  description: 'Bot sunucudan ayrılır.',
  usage: 'çevir'
};