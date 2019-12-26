module.exports = {
	name: 'kick',
	description: 'kicks mentioned user from server',
	args: false,
	usage: '<user> <role>',
	execute(message, args) {
		if (!message.mentions.users.size)
		{
			return message.reply('please tag a user to kick.');
		}
		const taggedUser = message.mentions.users.first();

		taggedUser.kick();

		message.channel.send('Cya later cunt!');
	},
};