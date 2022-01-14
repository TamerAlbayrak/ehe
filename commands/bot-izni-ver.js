const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
	let kontrol = await db.fetch(`dil_${message.guild.id}`);
	if (kontrol == "TR_tr") {
		if (db.fetch(`premium_${message.author.id}`) !== "premium") return message.channel.send( new Discord.MessageEmbed().setColor('BLACK').setDescription("Bu komutu kullanabilmek için Premium Üye olmalısınız!"))


	if (!db.fetch(`antiraidK_${message.guild.id}`)) return
  if(!args[0]) {
		
		message.channel.send(`Bir bot **ID**'si yazmalısın!`)
		return
	}
  
  if(!client.users.cache.has(args[0])) {
					message.channel.send(`Bu **ID**'ye ait kullanıcı bulamadım'!`)
		return
	}
  
  if(!client.users.cache.get(args[0]).bot) {
		message.channel.send(`Bu kişi bot değil!`)
		return
	}
  		
  message.channel.send(`Başarıyla bota izin verdiniz.`)
	
  db.set(`botizin_${message.guild.id}.${args[0]}`, "aktif")

	} else {
		if (db.fetch(`premium_${message.author.id}`) !== "premium") return message.channel.send( new Discord.MessageEmbed().setColor('BLACK').setDescription("You must be a Premium Member to use this command!"))


		if (!db.fetch(`antiraidK_${message.guild.id}`)) return
		if (!args[0]) {

			message.channel.send(`You have to write a bot **ID**!`)
			return
		}

		if (!client.users.cache.has(args[0])) {
			message.channel.send(`I couldn't find a bot belonging to this **ID**!'`)
			return
		}

		if (!client.users.cache.get(args[0]).bot) {
			message.channel.send(`This person is not a bot!`)
			return
		}

		message.channel.send(`Successfully obtained permission from the bot.`)

		db.set(`botizin_${message.guild.id}.${args[0]}`, "active")

	}
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ["bot-izni-ver", "botizniver", "botizniver", "givebotpermission", "give-bot-permission"],
	permLevel: '4',
	kategori: 'yetkili'
}

exports.help = {
	name: 'bot-izni-ver',
	description: '',
	usage: ''
}