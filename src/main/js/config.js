/**
 * This is for getting configuration that has been passed into the app. The "_config" scope has
 * already been setup by build system and seeded with whatever values were present during the build.
 */

/**
 * Get a config value if it is set. Otherwise, return a default value.
 */
function get(key, default_value) {
	if ( typeof _config === "undefined" || typeof _config[key] === "undefined" ) {
		return default_value
	} else {
		return _config[key]
	}
}

exports.app_name = _config.app_name
exports.version = _config.version

exports.timer_seconds = get("timer_seconds", 5)
