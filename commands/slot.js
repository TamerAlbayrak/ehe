const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const db = require("quick.db");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MzEzNDY3MzQ1MDEwNjg5MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA0ODQ1NDIwfQ.2ICPif8BteUS7pyvPQo9QAlSeLntlDAXbjsGgsmSEM4', client);
const slots = ['🍇', '🍊', '🍐', '🍒', '🍋'];

exports.run = async  (client, message) => {
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

			var slot1 = slots[Math.floor(Math.random() * slots.length)];
			var slot2 = slots[Math.floor(Math.random() * slots.length)];
			var slot3 = slots[Math.floor(Math.random() * slots.length)];

			if (slot1 === slot2 && slot1 === slot3) {
				message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Tebrikler, kazandınız!
		`);
			} else {
				message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Eyvah, kaybettin!
		`);
			}
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
			var slot1 = slots[Math.floor(Math.random() * slots.length)];
			var slot2 = slots[Math.floor(Math.random() * slots.length)];
			var slot3 = slots[Math.floor(Math.random() * slots.length)];

			if (slot1 === slot2 && slot1 === slot3) {
				message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Congratulations, you win!
		`);
			} else {
				message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		You lost!
		`);
			}
		}
	});

}
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'slot', 
  description: 'Slots oyunu oynatır',
  usage: 'slot'
};