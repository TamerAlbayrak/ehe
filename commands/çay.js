const Discord = require('discord.js');
const db = require("quick.db");
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

  var cevaplar = ['https://cdn.discordapp.com/attachments/382580600697126924/382594899242909696/tumblr_ops716T3QY1sujdjco1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594868549255168/tumblr_om9ir6PSas1vy1wx4o1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594845895688192/tumblr_o0wnt6Ut3F1s22rc8o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594842171146250/tumblr_ott4yltJG81ukqbp7o1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594829701349376/tumblr_o8rb7zELcf1u46qteo1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594813276585994/tumblr_ot0tg7c8Sr1vy1wx4o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594804711686145/tumblr_ol45svaSEO1w4spvvo1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594804091191306/tumblr_ol0xwczy8i1vy1wx4o1_500.gif',
   'https://cdn.discordapp.com/attachments/382580600697126924/382594796092522497/tumblr_nl4dy2fh821rj305uo1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594713074532363/tumblr_outqqelDD81w0p0qno1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594590143938560/tumblr_nk88nbfV8w1sjt6sco1_500.gif' ];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
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
      var cevaplar = ['https://cdn.discordapp.com/attachments/382580600697126924/382594899242909696/tumblr_ops716T3QY1sujdjco1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594868549255168/tumblr_om9ir6PSas1vy1wx4o1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594845895688192/tumblr_o0wnt6Ut3F1s22rc8o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594842171146250/tumblr_ott4yltJG81ukqbp7o1_400.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594829701349376/tumblr_o8rb7zELcf1u46qteo1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594813276585994/tumblr_ot0tg7c8Sr1vy1wx4o1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594804711686145/tumblr_ol45svaSEO1w4spvvo1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594804091191306/tumblr_ol0xwczy8i1vy1wx4o1_500.gif',
      'https://cdn.discordapp.com/attachments/382580600697126924/382594796092522497/tumblr_nl4dy2fh821rj305uo1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594713074532363/tumblr_outqqelDD81w0p0qno1_500.gif','https://cdn.discordapp.com/attachments/382580600697126924/382594590143938560/tumblr_nk88nbfV8w1sjt6sco1_500.gif' ];
      var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
      message.reply(cevap);
    };
  });
};
  };
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['çayic', 'cayic','tea'],
 permLevel: 0 ,
};

exports.help = {
 name: 'çay',
 description: 'Çay İçiliyor...',
 usage: 'çay'
};