const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "invite",
    category: "Information",
    aliases: ["i", "inv"],
    cooldown: 4,
    usage: "invite",
    description: "Helps You Invite Me!",
    run: async (client, message, args, user, text, prefix) => {
      try{
        let string = `**CLICK HERE TO INVITE ME!**-[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=898452834557755392&permissions=415604539232&scope=bot)`
        let embed = new MessageEmbed()
        .setTitle("EchoBot")
        .setDescription(string)
        if(message.guild.me.permissionsIn(message.channel).has("EMBED_LINKS")){
          message.reply(embed)
        }else{
          message.reply(string)
        }
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}