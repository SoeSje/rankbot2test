var Discord = require('discord.js')
var Roblox = require('noblox.js')

const Client = new Discord.Client();

var Token = "NTkzMzcyMDYyMjIzOTU4MDE2.XRM7Mg.a3FHIuWA5UoT5YGnWm7IwcM_U0Y";

Client.login(Token)

var Cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_CEC62D4F77B584D0E3033AEB5E214E09E69E0F12882B9072BEAD96357FD34D131B1E919F6912A53077C3C552DA96677D1B165ABD4821CCA61C301EF4DA20DF60553B03D3D655D085725CA651431D2466498D29C0FF0EC84A4F3E39F4A1A6509784457B3F0AEF60529A858874D2F1C2F84FB881AD302EBEA3347F437ADE6528C4E5E1B6FDC3A9F38E191A80CE3EB5AAB35901775D382F31EF9F8A100C55ED88B8C05C0EE0E19378C99E8D61AC7E9069A649254D12A2CD2AF898F823694FDFA3523811266E0070BD534D1829A1F77BC4860409B977CE32D2A74385915F0C7A9B1DCD506380844680C5D402CB69DBE493D43476CCF89E49E2C59A4D84DE49E96BF3394E82A03B7DFE315A343B85A217FDB53F458C81665A06D0E69BAA09AC6AF19E53EBF325"

var IdPolitie = 4349881;
var Student = 6;
var ChanPol = "rank-politie";

function Login() {
  return Roblox.cookieLogin(Cookie);
}

Login() 
  .then(function(){
    console.log("Ingelogt")
  })
  .catch(function(){
    console.log(`Login error: ${error}`)
  })


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