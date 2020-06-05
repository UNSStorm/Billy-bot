const Discord = require("discord.js");
const client = new Discord.Client();

const { PREFIX, TOKEN, VERSION } = require("./config.json");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.channel.send({
      embed: {
        color: "#f5f5f5",

        title: "Pong!",

        description: "Ping Pong Ping Pong!",
      },
    });
  }
});

client.on("message", (msg) => {
  if (msg.content === "Stupid Billy") {
    msg.channel.send("ok :(");
  }
});

client.on("message", (msg) => {
  if (msg.content === "Billy is dumb") {
    msg.channel.send("😢").then((messageReaction) => {
      messageReaction.react("☹️");
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
        Title: "I heared you want to see your profile picture",
        description: `${msg.author.displayAvatarURL()}`,
      },
    });
  }
});

client.on("message", (msg) => {
  if (msg.content === ".version") {
    msg.channel.send({
      embed: {
        Title: `Version is ${VERSION}`,
      },
    });
  }
});

client.on("message", (msg) => {
  if (msg.content === ".help") {
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
  }
});

client.on("message", (msg) => {
  if (msg.content === ".clear") {
    // Bulk delete messages
    msg.channel.bulkDelete(100);
    msg.channel
      .send({
        embed: {
          color: 3447003,
          title: `Cleared Messages`,
          description: `Cleared 100 Messages, ${msg.author.username}`,
        },
      })
      .then((messageReaction) => {
        messageReaction.react("👍");
      });
  }
});



client.login(TOKEN);
