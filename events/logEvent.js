module.exports = (bet, winlose, rolledAmount, message, hosteduser) => {
let logChannel = message.guild.channels.get(message.client.settings.logchannelId);


switch(winlose) {
    case "win": {
        logChannel.send({
            embed: {
                title: "LOGGER | WIN",
                color: 123465,
                description: `Hosted By : **${message.author.username}**\nBet : **${bet}**\nRolledAmount : **${rolledAmount}**\nUser : **${hosteduser.username}**`
            }
        })
    }
    break;
    case "lose": {
        logChannel.send({
            embed: {
                title: "LOGGER | LOSE",
                color: 16734003,
                description: `Hosted By : **${message.author.username}**\nBet : **${bet}**\nRolledAmount : **${rolledAmount}**\nUser : **${hosteduser.username}**`
            }
        })
    }
    break;
    case "draw": {
        logchannel.send({
            embed: {
                title: "LOGGER | DRAW",
                color: 15767561,
                description: `Hosted By : **${message.author.username}**\nBet : **${bet}**\nRolledAmount : **${rolledAmount}**`
            }
        })
    }
}
}