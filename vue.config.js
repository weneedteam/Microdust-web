const path = require("path");
const fs = require("fs");

module.exports = { 
	chainWebpack: config => {
		config.resolve.alias.set("@", path.resolve(__dirname, "src"));
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		host: "0.0.0.0",
		port: 9000
	},
	css: {
		loaderOption: {
			sass: {
				data: `@import "@/Styles/_normalized.scss";`
			}
		}
	}
};