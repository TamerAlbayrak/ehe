const Discord = require("discord.js");
const client = new(require("discord.js").Client)
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
const ayarlar = require('../ayarlar.json');
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MzEzNDY3MzQ1MDEwNjg5MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA0ODQ1NDIwfQ.2ICPif8BteUS7pyvPQo9QAlSeLntlDAXbjsGgsmSEM4', client);
const db = require("quick.db");

exports.run = async (client, message, args) => {

    if (db.fetch(`premium_${message.author.id}`) !== "premium") return message.channel.send( new Discord.MessageEmbed().setColor('BLACK').setDescription("Bu komutu kullanabilmek için Premium Üye olmalısınız!"))


    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
if (kontrol == "TR_tr") {

  if(!message.member.voice.channel) return message.reply('Sesli kanalına girmen gerekiyor.')
if(!args[0]) return message.reply('Bir seçenek seçmen gerekiyor.')
if(args[0] == 'yt') {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755600276941176913",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> Tıklayarak aktif hale getirebilirsin.`)
                    embed.setColor('RANDOM')
                        message.channel.send(embed)
                })
} else if(args[0] == 'bio') {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                  method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                       target_application_id: "773336526917861400",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> Tıklayarak aktif hale getirebilirsin.`)
                    embed.setColor('RANDOM')
                        message.channel.send(embed)
                })
} else if(args[0] == 'pn') {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                  method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755827207812677713",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> Tıklayarak aktif hale getirebilirsin.`)
                    embed.setColor('RANDOM')
                        message.channel.send(embed)
                })
} else if(args[0] == 'fio') {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
             method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "814288819477020702",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> Tıklayarak aktif hale getirebilirsin.`)
                    embed.setColor('RANDOM')
                        message.channel.send(embed)
                })
} else {
  const embed = new MessageEmbed()
  embed.setDescription(`Geçersiz Seçenek, Seçenekler:\nYoutube: yt\nBetrayal.io: bio\nPoker Night: pn\nFishington.io: fio`)
  embed.setColor('RED')
  message.channel.send(embed)
}



} else {
    if (db.fetch(`premium_${message.author.id}`) !== "premium") return message.channel.send( new Discord.MessageEmbed().setColor('BLACK').setDescription("You must be a Premium Member to use this command!"))


    if(!message.member.voice.channel) return message.reply('You need to enter the voice channel.')
    if(!args[0]) return message.reply('You have to choose an option.')
    if(args[0] == 'yt') {
    const embed = new MessageEmbed()
    fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                        method: "POST",
                        body: JSON.stringify({
                            max_age: 86400,
                            max_uses: 0,
                            target_application_id: "755600276941176913",
                            target_type: 2,
                            temporary: false,
                            validate: null
                        }),
                        headers: {
                            "Authorization": `Bot ${client.token}`,
                            "Content-Type": "application/json"
                        }
                    })
                    .then(res => res.json())
                    .then(invite => {
                        embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> You can activate it by clicking.`)
                        embed.setColor('RANDOM')
                            message.channel.send(embed)
                    })
    } else if(args[0] == 'bio') {
    const embed = new MessageEmbed()
    fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                      method: "POST",
                        body: JSON.stringify({
                            max_age: 86400,
                            max_uses: 0,
                           target_application_id: "773336526917861400",
                            target_type: 2,
                            temporary: false,
                            validate: null
                        }),
                        headers: {
                            "Authorization": `Bot ${client.token}`,
                            "Content-Type": "application/json"
                        }
                    })
                    .then(res => res.json())
                    .then(invite => {
                        embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> You can activate it by clicking.`)
                        embed.setColor('RANDOM')
                            message.channel.send(embed)
                    })
    } else if(args[0] == 'pn') {
    const embed = new MessageEmbed()
    fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                      method: "POST",
                        body: JSON.stringify({
                            max_age: 86400,
                            max_uses: 0,
                            target_application_id: "755827207812677713",
                            target_type: 2,
                            temporary: false,
                            validate: null
                        }),
                        headers: {
                            "Authorization": `Bot ${client.token}`,
                            "Content-Type": "application/json"
                        }
                    })
                    .then(res => res.json())
                    .then(invite => {
                        embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> You can activate it by clicking.`)
                        embed.setColor('RANDOM')
                            message.channel.send(embed)
                    })
    } else if(args[0] == 'fio') {
    const embed = new MessageEmbed()
    fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                 method: "POST",
                        body: JSON.stringify({
                            max_age: 86400,
                            max_uses: 0,
                            target_application_id: "814288819477020702",
                            target_type: 2,
                            temporary: false,
                            validate: null
                        }),
                        headers: {
                            "Authorization": `Bot ${client.token}`,
                            "Content-Type": "application/json"
                        }
                    })
                    .then(res => res.json())
                    .then(invite => {
                        embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> You can activate it by clicking.`)
                        embed.setColor('RANDOM')
                            message.channel.send(embed)
                    })
    } else {
      const embed = new MessageEmbed()
      embed.setDescription(`Invalid Option, Options:\nYoutube: yt\nBetrayal.io: bio\nPoker Night: pn\nFishington.io: fio`)
      embed.setColor('RED')
      message.channel.send(embed)
    }

}
    
}
    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ses"],
  permLevel: 0
};

exports.help = {
  name: 'ses',
  description: 'Ses kanalında youtube oyun v.s açmanıza yarar',
  usage: 'ses'
};