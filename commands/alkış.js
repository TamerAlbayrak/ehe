const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MzEzNDY3MzQ1MDEwNjg5MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA0ODQ1NDIwfQ.2ICPif8BteUS7pyvPQo9QAlSeLntlDAXbjsGgsmSEM4', client);
 
exports.run = async (client, message, args) => {
   
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
		
		const Yardım = new Discord.MessageEmbed()
		.setTitle('Alkışlanıyor.')
		.setImage('https://img-s2.onedio.com/id-52ecfaa04ffe10be7f00001b/rev-0/w-500/s-b0690d41b2b515af32376cc5987345242fbb908f.gif', 'http://giphygifs.s3.amazonaws.com/media/srg19CG0cKMuI/giphy.gif', 'https://thumbs.gfycat.com/WarpedAdmiredCormorant-size_restricted.gif', 'https://media1.tenor.com/images/8c8f18bec7ba6a1b7ddc2ef76664e9ae/tenor.gif?itemid=10584134')
message.channel.send(Yardım)
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

} else {
  const Yardım = new Discord.MessageEmbed()
  .setTitle('Applauded.')
  .setImage('https://img-s2.onedio.com/id-52ecfaa04ffe10be7f00001b/rev-0/w-500/s-b0690d41b2b515af32376cc5987345242fbb908f.gif', 'http://giphygifs.s3.amazonaws.com/media/srg19CG0cKMuI/giphy.gif', 'https://thumbs.gfycat.com/WarpedAdmiredCormorant-size_restricted.gif', 'https://media1.tenor.com/images/8c8f18bec7ba6a1b7ddc2ef76664e9ae/tenor.gif?itemid=10584134')

.setTimestamp() //Saat gösterimi
message.channel.send(Yardım)

    }
  });
    };
};

 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['alkiş', 'alkişla','bravo', 'clap' ],
 permLevel: 0 ,
};

exports.help = {
 name: 'alkış',
 description: 'Alkışlanıyor...',
 usage: 'alkış'
};