const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MzEzNDY3MzQ1MDEwNjg5MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA0ODQ1NDIwfQ.2ICPif8BteUS7pyvPQo9QAlSeLntlDAXbjsGgsmSEM4', client);
const db = require('quick.db');



//TOKEN Ne Olduğunu bilmiyorsan https://top.gg/api/docs#mybots Sitesinden DBL Tokeninizi alabilirsiniz


exports.run = (client, message) => {
    if(message.guild.id != "638780452643274763") return message.reply(new Discord.MessageEmbed().setDescription("Bu komutu sadece destek sunucumuzda kullanabilirsin! Gelmek icin [TIKLA](https://discord.gg/Er9jD2efgc)"));
   dbl.hasVoted(message.author.id).then(voted => { 
        if (!voted) {
            message.channel.send( new Discord.MessageEmbed()
            .setTitle("Hata")
            .setColor("RED")
            .setDescription("Sunucumuz da özel role sahip olabilmen için ilk öncelikle oy vermen gerekiyor!")
            .addField("Oy Vermek için:", `[Buraya Tıkla!](https://top.gg/bot/693134673450106890/vote)`)
            .setFooter(client.user.username)
            )
        } else {
  message.channel.send( new Discord.MessageEmbed()
.setTitle("Başarılı!")
.setDescription("Sunucumuz da başarılı bir şekilde rolünüz verildi!")
.setColor("GREEN")
)
            message.member.roles.add("828711960450170901")    //Vericek rol id.
        }
    })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oyverdim"],
  permLevel: 0,
   
};

exports.help = {
  name: 'oy-verdim',
 description: 'Bota oy verirseniz rolü kaparsınız',
 usage: 'oyverdim'
};