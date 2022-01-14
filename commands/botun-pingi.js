const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args, color) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "TR_tr") {


    
            let diff = (Date.now() - start);
            let API = (client.ws.ping).toFixed(0)

            let embed = new Discord.MessageEmbed()
                .setTitle(`Bot Pingim !`)
                .setColor(0xff2f2f)
                .addField("📶 Mesaj Gecikmesi", `${diff}ms`, true)
                .addField("💻 Bot Gecikmesi", `${API}ms`, true)
            message.edit(embed);

        
	

    } else {

        
            let diff = (Date.now() - start);
            let API = (client.ws.ping).toFixed(0)

            let embed = new Discord.MessageEmbed()
                .setTitle(`Ping !`)
                .setColor(0xff2f2f)
                .addField("📶 Message Delay ", `${diff}ms`, true)
                .addField("💻 Bot Delay", `${API}ms`, true)
            message.edit(embed);

    


    }
	
};

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ping"],
    permLevel: 0
  };

module.exports.help = {
    name: 'p',
     description: 'Botun pingini gösterir..',
};
