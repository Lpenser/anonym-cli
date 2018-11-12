"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anonym_config_1 = require("../restrict/anonym-config");
const anonymConfig = anonym_config_1.default.getInstance();
/**
 * 启动webpack服务器
 */
function startWebpackDevServer() {
    return new Promise((resolve, reject) => {
        const { server } = anonymConfig;
        // const config = webpackConfig(anonymConfig);
        // new WebpackDevServer(webpackCompiler(), config.devServer).listen(eConfig.defaultPort, server, (err) => {
        //     if (err) {
        //         reject(err);
        //     }
        //     log(`监听本地 ${server}:${eConfig.defaultPort}`)
        //     //console.log(`监听本地 ${server}:${eConfig.defaultPort}`);
        //     resolve();
        // });
    });
}
exports.default = startWebpackDevServer;
