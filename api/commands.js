
require('org.pinf.genesis.lib/lib/api').forModule(require, module, function (API, exports) {

	var SINGLETONS = null;
	if (!API.SINGLETONS["tools.pinf.CloudCommands/commands/0"]) {
		API.SINGLETONS["tools.pinf.CloudCommands/commands/0"] = {};
	}
	SINGLETONS = API.SINGLETONS["tools.pinf.CloudCommands/commands/0"];

	var Commands = function () {
		var self = this;

		self.$PLComponent = "tools.pinf.CloudCommands/commands/0";

		var registeredCommands = {};

		self.registerCommands = function (commands) {
			Object.keys(commands).forEach(function (commandId) {
				if (
					commands[commandId]['@impl'] &&
					commands[commandId]['@impl']['$tools.pinf.CloudCommands/command/0']
				) {
					registeredCommands[commandId] = commands[commandId]['@impl']['$tools.pinf.CloudCommands/command/0'];
				}
			});
		}

		self.getAll = function () {
			return registeredCommands;
		}
	}

	exports.PLComponent = function (config, groupConfig) {

		if (!SINGLETONS.commands) {
			SINGLETONS.commands = new Commands();
		}

		if (config.commands) {
			SINGLETONS.commands.registerCommands(config.commands);
		}

		var api = {
			"$tools.pinf.CloudCommands/commands/0": SINGLETONS.commands
		};

		return api;
	}

});
