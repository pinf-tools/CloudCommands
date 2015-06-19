

exports.for = function (API) {

	var exports = {};

	exports.resolve = function (resolver, config, previousResolvedConfig) {

		return resolver({}).then(function (resolvedConfig) {

			// TODO: Index commands here and only register them below.
			//       That way we can track registred commands by this component
			//       in program.rt.json.

			return resolvedConfig;
		});
	}

	exports.spin = function (resolvedConfig) {


//console.log("resolvedConfig in CLOUD COMMANDS", resolvedConfig);

		if (
			resolvedConfig['$tools.pinf.CloudCommands/commands/0'] &&
			resolvedConfig['$tools.pinf.CloudCommands/commands/0'].register === true
		) {

//console.log("ALL", resolvedConfig['$tools.pinf.CloudCommands/commands/0'].getAll());

		}

	}

	return exports;
}

