const Discord = require("discord.js");
const axios = require("axios");
const bot = new Discord.Client();
const token = "NjY1NjA3MTg5ODI1ODQ3MzA3.XhoKRA.dxKWd-IoHxnLK4P5DonmOqse-EM";
const prefix = "-=";
const { RichEmbed } = require("discord.js");
bot.on("ready", () => {
  console.log("bot is working");
});

bot.on("message", async msg => {
  bot.user
    .setActivity("robbing links", { type: "WATCHING" })
    .catch(console.error);
  var msgContent = msg.content;
  var linkCmd = msgContent.split("/");
  console.log(linkCmd[0]);
  console.log(linkCmd);
  console.log(msg.content);
  if (
    linkCmd[0] === "https:" ||
    linkCmd[0] === "diep.io" ||
    linkCmd[0] === "https:/"
  ) {
    const channelSbx = msg.guild.channels.find(ch => ch.name === "links");
    const discMsg = msgContent.split(" ");
    if (!channelSbx) return;
    if (linkCmd[0] === "diep.io") {
      const linkEmbed = new RichEmbed()
        .setTitle(`⏫ LINK ⏫ ${msg.author.tag}`)
        .setColor(0xff0000)
        .setDescription("https://" + discMsg[0]);
      msg.channel.bulkDelete(1);
      channelSbx.send(linkEmbed);
    } else if (linkCmd[0] === "https:") {
      if (linkCmd[2] === "diep.io") {
        const linkEmbed = new RichEmbed()
          .setTitle(`⏫ LINK ⏫ ${msg.author.tag}`)
          .setColor(0xff0000)
          .setDescription(discMsg[0]);
        msg.channel.bulkDelete(1);
        channelSbx.send(linkEmbed);
      }
    }

    if (!msg.content.startsWith(prefix)) {
      return;
    }
    const args = msg.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
    console.log(args);

    if (command === "emoji") {
      msg.react("😀");
    }
    if (command === "avatar") {
      msg.reply(msg.author.avatarURL);
    }
  }
});
bot.login(token);
