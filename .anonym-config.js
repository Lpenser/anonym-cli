module.exports = {
    name: "test",
    open: true,
    defaultPort: 8001,
    server: "0.0.0.0",
    devServer: {
        noInfo: true,
        proxy: {
            // '/cia-j': {
            //     target: 'http://192.168.1.181:8081',
            //         onProxyReq: (proxyReq, req, res) => {
            //         }
            // },
        }
    },
    projects: ['app2','app1'] 
};