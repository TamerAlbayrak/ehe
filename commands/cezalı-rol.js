  const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {

    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "TR_tr") {

    let p = ayarlar.prefix;
    let ws = args[0];
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
                                         .setDescription(`Bu komutu kullanmak için **Yönetici** iznine sahip olmalısın!`))
  

    if (!ws) return message.channel.send(new Discord.MessageEmbed()
                                         .setDescription(`**Kullanım Şekli:** ${p}cezalırol \`aç\`/\`kapat\` \n**Parametreler:** \`aç\`, \`kapat\``))
  
    if (ws != 'aç' && ws != 'kapat') return message.channel.send(new Discord.MessageEmbed()
                                         .setDescription(`**Kullanım Şekli:** ${p}cezalırol \`aç\`/\`kapat\``))

    if (ws === 'aç') {
        let role = message.mentions.roles.first();
        if (!role) return message.channel.send(new Discord.MessageEmbed()
                                         .setDescription(`Bir rol etiketlemelisin!`));
        let channels = message.mentions.channels.first();
        if (!channels) return message.channel.send(new Discord.MessageEmbed()
                                         .setDescription(`Bir kanal etiketlemelisin!`));
        var a = db.fetch(`koruma_${message.guild.id}`) === 'acik';
        if (a) return message.channel.send(new Discord.MessageEmbed()
                                         .setDescription(`Oppss! Bu sistem zaten açık.`))
        message.channel.send(new Discord.MessageEmbed()
                                         .setDescription(`Koruma sistemini bu sunucuda aktif hale getirdim! Kanalı <#${channels.id}> olarak ayarladım!`))
        db.set(`koruma_${message.guild.id}`, 'acik')
        db.set(`rol_${message.guild.id}`, role.id)
        db.set(`kanal_${message.guild.id}`, channels.id)
    }

    if (ws === 'kapat') {
        var a = db.fetch(`koruma_${message.guild.id}`) === 'kapali';
        if (a) return message.channel.send(new Discord.MessageEmbed()
                                         .setDescription(`Oppss! Bu sistem zaten kapalı.`))
        message.channel.send(new Discord.MessageEmbed()
                                         .setDescription(`Koruma sistemini bu sunucuda deaktif hale getirdim!`))
        db.set(`koruma_${message.guild.id}`, 'kapali')
        db.delete(`kanal_${message.guild.id}`)
        db.delete(`rol_${message.guild.id}`)
        }

    } else {

        let p = ayarlar.prefix;
        let ws = args[0];

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`You must have the **Administrator** permission to use this command!`))


        if (!ws) return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`**Usage:** ${p}penalty-role \`on\`/\`off\` \n**Parametreler:** \`aç\`, \`kapat\``))

        if (ws != 'on' && ws != 'off') return message.channel.send(new Discord.MessageEmbed()
            .setDescription(`*Usage:** ${p}penalty-role \`on\`/\`off\``))

        if (ws === 'on') {
            let role = message.mentions.roles.first();
            if (!role) return message.channel.send(new Discord.MessageEmbed()
                .setDescription(`You have to tag a role!`));
            let channels = message.mentions.channels.first();
            if (!channels) return message.channel.send(new Discord.MessageEmbed()
                .setDescription(`You have to tag a channel!`));
            var a = db.fetch(`koruma_${message.guild.id}`) === 'on';
            if (a) return message.channel.send(new Discord.MessageEmbed()
                .setDescription(`Oppss! This system is already open.`))
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`I have activated the protection system on this server! I set the channel to  <#${channels.id}> `))
            db.set(`koruma_${message.guild.id}`, 'on')
            db.set(`rol_${message.guild.id}`, role.id)
            db.set(`kanal_${message.guild.id}`, channels.id)
        }

        if (ws === 'off') {
            var a = db.fetch(`koruma_${message.guild.id}`) === 'off';
            if (a) return message.channel.send(new Discord.MessageEmbed()
                .setDescription(`Oppss!This system is already closed.`))
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`I deactivated the protection system on this server!`))
            db.set(`koruma_${message.guild.id}`, 'off')
            db.delete(`kanal_${message.guild.id}`)
            db.delete(`rol_${message.guild.id}`)
        }

    }

};

exports.conf = {
    aliases: ["cezalırol", "penalty-role"],
    permLevel: 0
};

exports.help = {
    name: 'cezalı-rol'
};  