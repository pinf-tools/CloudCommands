

exports.for = function (API) {

	var exports = {};

	exports.resolve = function (resolver, config, previousResolvedConfig) {

		return resolver({}).then(function (resolvedConfig) {

			// NOTE: Commands are declared in the config files.

			// TODO: Record registered commands in resolvedConfig.
			//       That way we can track registred commands by all components easily
			//       in program.rt.json.

			return resolvedConfig;
		});
	}

	exports.spin = function (resolvedConfig) {

		if (resolvedConfig['$tools.pinf.CloudCommands/commands/0']) {

			var commands = resolvedConfig['$tools.pinf.CloudCommands/commands/0'].getAll();

			var aliases = Object.keys(commands);
			aliases.sort();
			aliases.forEach(function (alias) {
				API.registerCommand(alias, commands[alias]);
			});
		}

	}

	return exports;
}

