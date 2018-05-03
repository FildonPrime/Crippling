const Discord = require('discord.js')
exports.run = async(Bot, message, args) => {
    if(message.author.id != 199570626724233216) {
        return;
    }
    let msg = args.slice(1).join(' ');
    const mainEmb = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(`${msg}`)
    .setColor(0x00AE86)
    .setTimestamp()
    .setFooter(`React`)

    const sentEmb = await message.channel.send({embed: mainEmb})
        await sentEmb.react(`1⃣`)
        await sentEmb.react(`2⃣`)
    
    const collector = sentEmb.createReactionCollector((reaction, user) => [`1⃣`, `2⃣`].includes(reaction.emoji.name))
    collector.on("collect", (reaction) => {
        const user = reaction.users.last();
        if (user.bot) return;
        if(reaction.emoji.name === '1⃣') {
            message.channel.send(`FIRST : ${user.username}`)
        }
        if(reaction.emoji.name === '2⃣') {
            message.channel.send(`SECOND : ${user.username}`)
        }
        
    })
}


exports.config = {
    aliases: ['dbc'],
    enabled: true
};

exports.help = {
    name: 'setup',
    botPermission: 'EMBED_LINKS',
    userPermission: 'EMBED_LINKS',
    usage: 'ping',
    example: []
};