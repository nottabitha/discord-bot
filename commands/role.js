module.exports = {
	name: 'role',
	description: 'assign a role to mentioned user',
	args: true,
	usage: '<user> <role>',
	execute(message, args) {
		const role = message.guild.role.find(role => role.name === '')
		const taggedUser = message.mentions.users.first();

		message.taggedUser.addRole(args);
	},
};