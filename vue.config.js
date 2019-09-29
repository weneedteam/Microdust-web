const path = require("path");
const fs = require("fs");

module.exports = { 
	chainWebpack: config => {
		config.resolve.alias.set("@", path.resolve(__dirname, "src"));
		config.resolve.alias.set("@Style", path.resolve(__dirname, "src/Styles"));
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		host: "0.0.0.0",
		port: 9000,
		proxy: {
			"api": {
				target: "http://localhost:8080",
				changeOrigin: true
			}
		}
	},
	css: {
		loaderOptions: {
			sass: {
				data: `
					@import "@/Styles/normalized.scss";
					@import "@/Styles/layout.scss";
				`
			}
		}
	}
};