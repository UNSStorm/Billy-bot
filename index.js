const Discord = require("discord.js");
const client = new Discord.Client();

const { PREFIX, TOKEN, VERSION } = require("./.gitignore/config.json");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence("Ender MC");
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.channel.send({
      embed: {
        color: "#f5f5f5",

        title: "Pong!",

        description: "Ping Pong Ping Pong!",
        timestamp: new Date(),
        footer: {
          text: "© billy bot",
        },
      },
    });
  }
});

client.on("message", (message) => {
  const args = message.content.slice(PREFIX.length).split(/ +/);
  switch (args[0]) {
    case "poll":
      if (!args[1]) {
        message.channel.send({
          embed: {
            title: "POLL",
            color: "#00ff00",
            description: "A Simple Poll usage: .poll [Question]",
            timestamp: new Date(),
            footer: {
              text: "© billy bot",
            },
          },
        });

        break;
      }
      let msgArgs = args.splice(1).join(" ");

      message.channel
        .send({
          embed: {
            title: "📊 Question: " + "***" + msgArgs + "***",
            color: "#6cc5d3",
            image: "",
            timestamp: new Date(),
            footer: {
              text: "© billy bot",
            },
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
client.on("message", (msg) => {
  if (msg.content === ".avatar") {
    msg.channel.send({
      embed: {
        color: "#5dbcd2",
        Title: "I heared you want to see your profile picture",
        thumbnail: `${msg.author.displayAvatarURL()}`,
        timestamp: new Date(),
        footer: {
          text: "© billy bot",
        },
      },
    });
  }
});

client.on("message", (msg) => {
  const args = msg.content.slice(PREFIX.length).split(/ +/);

  switch (args[0]) {
    case "help":
      if (!args[1]) {
        msg.channel
          .send({
            embed: {
              color: 3447003,
              author: {
                name: client.user.username,
              },
              title: `weewoo weewoo`,
              description: `${msg.author.username}, Help is on its way! Just stay calm.`,
              timestamp: new Date(),
              footer: {
                text: "© billy bot",
              },
            },
          })
          .then((messageReaction) => {
            messageReaction.react("🚑");
          });

        break;
      }
      let msgArgs = args.splice(1).join(" ");

      if (msgArgs === "commands") {
        msg.channel
          .send({
            embed: {
              title: `${msgArgs}`,
              color: "#ff0000",
              description: `CLEAR - Clear Messages | usage : .clear
              POLL - Ask Questions | usage : .poll { question }
              Avatar - See Your Avatar | usage : .avatar`,
              image: "",
              timestamp: new Date(),
              footer: {
                text: "© billy bot",
              },
            },
          })
          .then((messageReaction) => {
            messageReaction.react("👏");
          });
      } else {
        msg.channel
          .send({
            embed: {
              color: "#fbff00",
              title: `Try Using .help commands`,
              image: "",
              timestamp: new Date(),
              footer: {
                text: "© billy bot",
              },
            },
          })
          .then((messageReaction) => {
            messageReaction.react("😊");
          });
      }

      break;
  }
});

client.on("message", (msg) => {
  if (msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (msg.content === ".clear") {
      // Bulk delete messages
      msg.channel.bulkDelete(100);
      msg.channel
        .send({
          embed: {
            color: 3447003,
            title: `Cleared Messages`,
            description: `Cleared 100 Messages, ${msg.author.username}`,
            timestamp: new Date(),
            footer: {
              text: "© billy bot",
            },
          },
        })
        .then((messageReaction) => {
          messageReaction.react("👍");
        });
    }
  }
});

client.login(TOKEN);
