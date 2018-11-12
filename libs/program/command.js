"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const commander = require("commander");
const logs_1 = require("../utils/logs");
class Command {
    constructor() {
        this.commanders = ['start'];
        this.commander = commander;
    }
    start() {
        this.commander
            .command('start')
            .option('-n, --project [value]', 'webpack Build a specified app name')
            .description('start webpack dev server for develoment mode')
            .action(options => {
            //   let env='dev';
            console.log(options.names);
        });
    }
    options() {
        const pkg = require(path.resolve(__dirname, '../../package.json'));
        this.commander.version(pkg.version, '-v, --version');
    }
    parse() {
        this.commander.parse(process.argv);
    }
    command() {
        this.commanders.forEach(item => {
            if (this[item]) {
                this[item].apply(this);
            }
            else {
                logs_1.error(`该指令 [${item}] 不存在!`);
            }
        });
    }
    run() {
        this.options();
        this.command();
        this.parse();
    }
}
exports.default = Command;
