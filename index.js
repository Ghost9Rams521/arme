// Charger la bibliothèque Discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// Créer une nouvelle instance du client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
  ],
});

// Le token du bot (remplace par ton propre token)
const TOKEN = 'VOTRE_TOKEN_IÇI'; // Remplace par le token de ton bot

// Événement : lorsque le bot est prêt
client.once('ready', () => {
  console.log('Le bot est prêt !');
});

// Fonction pour envoyer un message direct à un utilisateur via son ID Discord
function sendDirectMessage(discordId, message) {
  // Chercher l'utilisateur par son ID
  client.users.fetch(discordId)
    .then(user => {
      user.send(message)
        .then(() => {
          console.log(`Message envoyé à ${user.tag}`);
        })
        .catch(error => {
          console.error('Erreur lors de l\'envoi du message :', error);
        });
    })
    .catch(error => {
      console.error('Utilisateur non trouvé :', error);
    });
}

// Exemple d'écoute d'un message dans un canal (facultatif)
client.on('messageCreate', message => {
  // Si le message commence par "!ping", le bot répond "Pong!"
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

// Connexion du bot à Discord
client.login(TOKEN);