module.exports = async (client, guild) => {
  let channel = guild.channels.cache.find(
    channel =>
    channel.type === "text" &&
    channel.permissionsFor(guild.me).has("SEND_MESSAGES")
  );
  channel.send(`**Thank you for adding me! :white_check_mark:**
     \`-\` My prefix here is \`s!\`
     \`-\` You can see a list of commands by typing \`s!help\` / \`s!commands\`
     \`-\` You can change my prefix with \`!settings prefix <New Prefix>\`
     \`-\` If you need help, feel free to join our support server at **https://echobot.gq/**`);

}
