

require('org.pinf.genesis.lib/lib/api').forModule(require, module, function (API, exports) {


	var Commands = function () {
		this.$PLComponent = "tools.pinf.CloudCommands/commands/0";
	}
/*
		if (resolvedConfig.commands) {
			Object.keys(resolvedConfig.commands).forEach(function (commandAlias) {
				Object.keys(resolvedConfig.commands[commandAlias]["@impl"]).forEach(function (impl) {
					API.registerCommand(
						commandAlias,
						resolvedConfig.commands[commandAlias]["@impl"][impl]
					);
				});
			});
		}
*/

	Commands.prototype.getAll = function () {

//console.log("HGET ALL", this);

	}


	exports.PLComponent = function (config, groupConfig) {

//console.log("Commands config", JSON.stringify(config, null, 4));

//console.log("GET LABEL", config.commands["root.space.invite"]["@impl"]["$space.pinf.genesis/origin.get-invite-token/0"].getLabel());

		return {
			"$tools.pinf.CloudCommands/commands/0": API.EXTEND(true, new Commands(), config)
		};
	}

});

