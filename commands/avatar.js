const Discord = require('discord.js');
const db = require("quick.db");
const client = new Discord.Client();
const { MessageActionRow, MessageSelectMenu } = require('discord.js');



exports.run = async (client, message, args, interactionCreate) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
if (kontrol == "TR_tr") {

    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }


    
            const infinityavatar = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setAuthor("İşte Avatarın")
                .setImage(user.avatarURL({size: 2048}))

                

                
            message.channel.send({embeds: [infinityavatar] })

            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: await createAPIMessage(interaction, embed)
                }
            });
            async function createAPIMessage(interaction, content) {
                const apiMessage = await Discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
                    .resolveData()
                    .resolveFiles();
                return { ...apiMessage.data, files: apiMessage.files };
            }
        
		
 
} else {

    


    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const infinityavatar = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor("Here is your picture")
        .setImage(user.avatarURL())
    message.channel.send(infinityavatar)

    client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
            type: 4,
            data: await createAPIMessage(interaction, embed)
        }
    });
    async function createAPIMessage(interaction, content) {
        const apiMessage = await Discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
            .resolveData()
            .resolveFiles();
        return { ...apiMessage.data, files: apiMessage.files };
    }
}
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["pp", "picture"],
  permLevel: 0, 
};

exports.help = {
  name: 'avatar',
  options: [
    {
        name: 'User',
        description: 'If mentioned, shows the information about the user.',
        type: 6,
        required: false
    }
]
};