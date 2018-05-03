module.exports = (permissions, message) => {
    if (!message) return;
  
    message.channel.send({
      embed: {
        color: message.client.colors.RED,
        description: `I need **${permissions.replace('_', ' ')}** permission to run this command.`
      }
    }).catch(e => {
      message.client.log.error(e);
    });
  };
  