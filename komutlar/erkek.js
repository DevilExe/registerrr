const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  
 if(!message.member.roles.has('767457582305640459')) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')
  
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
  let al = "767150026261528627"; ///alınacak rol idsi
  let ver = "767455798178611210"; ///verilecek rol idsi
  if (!member) return message.channel.send("Bir Kullanıcı Etiketle");
  if (!isim) return message.channel.send("Bir İsim Girmelisin!");
  member.setNickname(`え ${isim} | ${yaş}`);
  
    member.addRole(ver);
    member.removeRole(al);
  

  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle("Merciless Kayıt")
    .setThumbnail(message.author.avatarURL)
    .setDescription( `*Kayıt Edilen* : **${member.user}** \n
*Kayıt Eden Yetkili* : ${message.author.username} 
\n *Verilen Rol* : <@&${ver}> 
\n *Alınan Rol* : <@&${al}>`)
client.channels.get('776576816713826304').send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["erkek" , "e"],
  permLevel: 0
}
exports.help = {
  name: 'Erkek',
  description: "Erkek Kayıt Sıstemı",
  usage: 'Erkek isim yaş'
} 