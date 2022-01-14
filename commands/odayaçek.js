const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
if (kontrol == "TR_tr") {

  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**Bu Komutu Kullanmak İçin `Sunucuyu Yönet` Yetkisine Sahip Omalısınız**"))

  if (!message.member.voice.channel) {
    return message.channel.send("Ses kanalında olman lazım!");
  }

  let kullanıcı = message.mentions.members.first();
  if (!kullanıcı) return message.channel.send("**Kullanıcıyı etiketlemelisin.**");

  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);

  if (!member.voice.channel) return message.channel.send("Etiketlenen kullanıcı bir ses kanalında değil").then(x => x.delete({timeout: 5000}))

  const voiceChannel = message.member.voice.channel.id;
  if (!voiceChannel) return;

  member.voice.setChannel(voiceChannel);

  const voiceChannel1 = message.member.voice.channel.name;
  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(
      message.author +
        " **Tarafından** " +
        kullanıcı +
        " **Kullanıcısı** `" +
        voiceChannel1 +
        "`** Sesli Kanalına Çekildi.**"
    )
    .setFooter(
      `${message.author.tag}`,
      `${message.author.displayAvatarURL()}`
    )
    .setTimestamp();
  message.channel.send(embed).then(x => x.delete({timeout: 5000}))
    } else {
      if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("**To use this command, you must have the `Manage Guild` permission.**"))


      if (!message.member.voice.channel) {
        return message.channel.send("You're supposed to be on the voice channel!");
      }
    
      let kullanıcı = message.mentions.members.first();
      if (!kullanıcı) return message.channel.send("**You must tag the user.**");
    
      let rol = message.mentions.roles.first();
      let member = message.guild.member(kullanıcı);
    
      if (!member.voice.channel) return message.channel.send("Tagged user is not on an audio channel").then(x => x.delete({timeout: 5000}))
    
      const voiceChannel = message.member.voice.channel.id;
      if (!voiceChannel) return;
    
      member.voice.setChannel(voiceChannel);
    
      const voiceChannel1 = message.member.voice.channel.name;
      let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          message.author +
            " **By** " +
            kullanıcı +
            " **Users** `" +
            voiceChannel1 +
            "`**Drawn to the voice channel.**"
        )
        .setFooter(
          `${message.author.tag}`,
          `${message.author.displayAvatarURL()}`
        )
        .setTimestamp();
      message.channel.send(embed).then(x => x.delete({timeout: 5000}))
        };

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çek"],
  permLevel: 0
};
exports.help = {
  name: "odayaçek",
  description: "çek",
  usage: "odayaçek"
};