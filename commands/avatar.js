const {
    RichEmbed
} = require('discord.js')
const embed = new RichEmbed()

exports.run = (client, message, args) => {
    embed.setColor(0x00AE86).setImage(message.author.avatarURL)
    message.channel.send(embed).catch(err => console.error(err))
};

exports.help = {
    name: 'avatar'
}