

exports.for = function (API) {

	var exports = {};

	exports.resolve = function (resolver, config, previousResolvedConfig) {

		return resolver({}).then(function (resolvedConfig) {

console.log("RESOLVE CloudCommands resolvedConfig", resolvedConfig);

			return resolvedConfig;
		});
	}

	return exports;
}

