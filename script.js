let discord = require('discord.js-selfbot-v11');
let rpcGenerator = require("discordrpcgenerator");
const dotenv = require('dotenv');
dotenv.config();
const TOKEN = process.env.TOKEN;
var uuid = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16));
let client = new discord.Client();

client.login(TOKEN);

client.on("ready", () => {
  rpcGenerator.getRpcImage("1017617990331666442", "off")
    .then(image => {
      let presence = new rpcGenerator.Rpc()
        .setName("ㅤ")
        .setUrl("https://www.twitch.tv/syahrills")
        .setType("WATCHING")
        .setApplicationId("1017617990331666442")
        .setDetails("</>")
        .setAssetsLargeImage(image.id)
        .setState("Inactive")
        .setStartTimestamp(Date.now());
        
      client.user.setPresence(presence.toDiscord());
    }).catch(console.error);
  console.log(`I have been logged in as ${client.user.username}`);
});
