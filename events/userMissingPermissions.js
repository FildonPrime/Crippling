module.exports = (permissions, channel) => {
  channel.send({
    embed: {
      title: "User Missing Permissions",
      description: `The user requires ${permissions} to use the command`
    }
  })
    console.log(`User needs ${permissions.replace('_', ' ')} permission to use this command.`);
  };
  