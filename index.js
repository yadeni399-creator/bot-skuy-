cat << 'EOF' > index.js
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const quotesList = [
    { quote: "Hidup bukan tentang menemukan diri sendiri, tetapi tentang menciptakan diri sendiri.", author: "George Bernard Shaw" },
    { quote: "Lakukan apa yang bisa kamu lakukan dengan apa yang kamu miliki, di mana pun kamu berada.", author: "Theodore Roosevelt" },
    { quote: "Kesuksesan bukanlah akhir, kegagalan bukanlah hal yang fatal: yang terpenting adalah keberanian untuk terus melanjutkan.", author: "Winston Churchill" }
];

client.once('clientReady', () => {
    console.log(`✅ Sukses! Bot ${client.user.tag} sudah online dan siap.`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    const content = message.content.toLowerCase();

    if (content === 'ping' || content === '!ping') {
        message.reply('Pong! 🏓 Bot SKUY aktif dan merespons!');
    }

    if (content === 'halo' || content === '!halo') {
        message.reply('Halo juga! Ada yang bisa SKUY bantu hari ini? 😊');
    }

    if (content === 'quote' || content === '!quote') {
        const randomQuote = quotesList[Math.floor(Math.random() * quotesList.length)];
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('💡 Kutipan Santai dari SKUY')
            .setDescription(`"${randomQuote.quote}"`)
            .setFooter({ text: `- ${randomQuote.author} | Diminta oleh ${message.author.username}` });

        message.reply({ embeds: [embed] });
    }
});

client.login(process.env.TOKEN);
EOF
                        
