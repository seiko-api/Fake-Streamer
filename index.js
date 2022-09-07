const keepAlive = require("./server")
let discord = require('discord.js-selfbot-v11')
let rpcGenerator = require("discordrpcgenerator")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))
let client = new discord.Client()

keepAlive()
client.login("OTc2NDQ4NDQyNTQzMDA1Njk2.GRisZz.EifYo87heOsw77Betk07Fk8L6JbuSKIHUdZWsg")
 
client.on("ready", () => {
    rpcGenerator.getRpcImage("", "")
    .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("twitch")
        .setUrl("https://twitch.tv/rafasurya")
        .setType("STREAMING")
        .setApplicationId("")
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText("youtube.com/SealedSaucer")
        .setDetails("Subscribe!")
 
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  console.log(`${client.user.username} Successfully Logged in!`)
})
