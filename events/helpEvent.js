module.exports = (usage, channel) => {
  if (channel) {
    channel.send({
      embed: {
        color: channel.client.colors.RED,
        title: `Command Usage`,
        description: `${usage}`
      }
    }).catch(e => {
      channel.client.log.error(e);
    });
  }
};
