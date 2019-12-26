module.exports = {
	name: 'server',
	description: 'checks server details',
	args: false,
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nMembers: ${message.guild.memberCount}\nRegion: ${message.guild.region}`);
	},
};