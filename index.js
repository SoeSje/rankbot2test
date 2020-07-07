var Discord = require('discord.js')
var Roblox = require('noblox.js')

const Client = new Discord.Client();



Client.login(process.env.BOT_TOKEN)

var Cookie = process.env.COOKIE

var IdPolitie = 4349881;
var Student = 6;
var ChanPol = "rank-politie";

async function run() {
  await noblox.setCookie(Cookie);
}

run();

Client.on('message', (message) => {
  if (message.channel.name == ChanPol) {
    var Username = message.content

    Roblox.getIdFromUsername(Username)
    .then(function(Id){
      Roblox.setRank(IdPolitie, Id, Student)
      message.react("✅")
      console.log(`${Username} is gerankt.`)
    })


  }
})
