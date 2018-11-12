


export default class AnonymConfig {
    // 项目名称
    name: string;
    // 是否默认打开
    open: boolean;
    // 默认端口号
    defaultPort: number;
    // 启动ip
    server: string;
    devServer: {
       
    };
    // 项目文件夹名称
    projects: string[];

    /********************/

    static instance: AnonymConfig;
    static getInstance() {
        if (!AnonymConfig.instance) {
            AnonymConfig.instance = new AnonymConfig();
        }
        return AnonymConfig.instance;
    }
}