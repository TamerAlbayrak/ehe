const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => { //dcs ekibi
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "TR_tr") {
        let bug = args.join(" ").slice(0);
        let user = message.author.username;
        let guild = message.guild.name;
        let guildid = message.guild.id;
        let kanal = message.channel.name;
        let channel = bot.channels.cache.get("769622706881822720")

        let embed = new Discord.MessageEmbed()
            .setTitle("Report")
            .setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
            .addField("Bug", bug)
            .addField("Report Eden", user, true)
            .addField("Sunucu", guild, true)
            .addField("Sunucu ID", guildid, true)
            .addField("Kanal", kanal, true)
            .setColor("RED")

        message.channel.send("**Bug Report Başarı İle İletildi.**")
        channel.send(embed).then(i => i.react("⏳"))





    } else {

        let bug = args.join(" ").slice(0);
        let user = message.author.username;
        let guild = message.guild.name;
        let guildid = message.guild.id;
        let kanal = message.channel.name;
        let channel = bot.channels.cache.get("769622706881822720")

        let embed = new Discord.MessageEmbed()
            .setTitle("Report")
            .setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
            .addField("Bug", bug)
            .addField("Informing People", user, true)
            .addField("Server", guild, true)
            .addField("Server ID", guildid, true)
            .addField("Channel", kanal, true)
            .setColor("RED")

        message.channel.send("**Error reported successfully**")
        channel.send(embed).then(i => i.react("⏳"))

    }

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bug-report'],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir'
  //dcs ekibi
}