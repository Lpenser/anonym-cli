
import chalk from 'chalk';
export function error(info) {
    console.log(chalk.red(`该指令 [${info}] 不存在!`));
}
export function warning(message) {
    console.warn(chalk.yellow(`${message}`));
}
export function log(info, color = 'green') {
    console.log(chalk.blue(`${chalk[color](info)}`));
}