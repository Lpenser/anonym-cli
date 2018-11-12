// import webpackCompiler from './webpackCompiler';
// import webpackConfig from '../../webpack.config';
import { log } from '../utils/logs';
import WebpackDevServer from 'webpack-dev-server';
import AnonymConfig from '../restrict/anonym-config';
const anonymConfig = AnonymConfig.getInstance();

/**
 * 启动webpack服务器
 */
export default function startWebpackDevServer() {
    return new Promise((resolve, reject) => {
        const {server} = anonymConfig;
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