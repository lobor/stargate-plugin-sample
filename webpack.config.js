var webpack = require(process.cwd() + '/webpack.config.js');

webpack.entry = "./plugins/pluginsample/front/src/index.jsx";
webpack.output = {
	path: "./plugins/pluginsample/front/assets",
	filename: "pluginsample.js"
}

module.exports = webpack;
