const Discord = require("discord.js")
const client = new Discord.Client()
const frases = require("./phrases.json")
client.on('ready', ()=>{
  console.log("Bot Iniciado")
  client.emit("guildMemberAdd",client.user)
})

client.on('guildMemberAdd',(member)=>{
  //Mira Deilu, sin switch B)
  let frase = frases.phra[Math.floor((Math.random() * frases.phra.length))]

  let resultado = frase.replace("{member}", client.users.cache.get(member.id).username)
  client.channels.cache.get("803012004750557227").send(resultado)
})

client.on('guildMemberRemove',(member)=>{
  let frase = frases.phra[Math.floor((Math.random() * frases.phra.length))]

  let resultado = frase.replace("{member}", client.users.cache.get(member.id).username)
  client.channels.cache.get("803012004750557227").send(resultado)
})

client.login("Token-Usar-Archivo-ENV-para-que-no-se-filtre-el-token")