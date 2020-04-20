const Discord = require("discord.js");
const colors = require("./colors.json");
const { token, prefix } = require("./config.json");
const bot = new Discord.Client();

//welcome
bot.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.find(
    (channel) => channel.name === "welcome"
  );

  if (!channel) return;

  message.channel.send(
    `Welcome To Our Server ${member}, Please See The Rules In The #Rules Channel`
  );
});

//bye bye

bot.on("guildMemberDelete", (member) => {
  const channel = member.guild.channels.find(
    (channel) => channel.name === "welcome"
  );

  if (!channel) return;

  message.channel.send(`${member}, Went Bye Bye :(`);
});

//clear
bot.on("message", (message) => {
  if (message.content === prefix + "clear") {
    message.channel.bulkDelete(100);
    message.channel.send({
      embed: {
        title: "Bulk Delete",
        color: 3447003,
        description: "Deleted Messages",
      },
    });
  }
});

//help
bot.on("message", (message) => {
  if (message.content === prefix + "help") {
    message.channel.send({
      embed: {
        color: 3447003,
        author: {
          name: bot.user.username,
          icon: bot.user.avatarURL,
        },
        title: "Help",
        thumbnail: "bot.user.avatarURL",
        url: "https://www.youtube.com/channel/UCMxl3ZqLxKMbWmUuYGDNHCg",
        description: "Commands - CLEAR | .clear    POLL | .poll [ Question ]",
        // fields: [
        //   {
        //     name: "Regular field title",
        //     value: "Some value here",
        //   },
        //   {
        //     name: "\u200b",
        //     value: "\u200b",
        //     inline: false,
        //   },
        //   {
        //     name: "Inline field title",
        //     value: "Some value here",
        //     inline: true,
        //   },
        //   {
        //     name: "Inline field title",
        //     value: "Some value here",
        //     inline: true,
        //   },
        //   {
        //     name: "Inline field title",
        //     value: "Some value here",
        //     inline: true,
        //   },
        // ],
        timestamp: new Date(),
        footer: {
          text: "© UNS Storm",
        },
      },
    });
  }
});

//poll
bot.on("message", (message) => {
  const args = message.content.slice(prefix.length).split(/ +/);

  switch (args[0]) {
    case "poll":
      if (!args[1]) {
        message.channel
          .send({
            embed: {
              title: "POLL",
              color: "#00ff00",
              description: "A Simple Poll usage: .poll [Question]",
            },
          })
          .then(message.channel.delete(1));

        break;
      }
      let msgArgs = args.splice(1).join(" ");

      message.channel
        .send({
          embed: {
            title: "📊 Question: " + "***" + msgArgs + "***",
            color: "#6cc5d3",
            image: "",
          },
        })
        .then((messageReaction) => {
          messageReaction.react("👍");
          messageReaction.react("👎");
          message.delete(500);
        });

      break;
  }
});

bot.on("ready", () => {
  console.log("active");
});

bot.login(token);
