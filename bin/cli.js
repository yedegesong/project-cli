#! /usr/bin/env node
const program = require('commander')
program
  .version(require('../package').version)
  .description('构建工程模板')
program
  .command('create <app-name>')
  .action((name) => {
    // 接收command 接收的指令
    if (name) {
      require('../packages/@react/cli/init.js')(name, {})
    }
  })
program
  .command('mock')
  .action(() => {
    console.log('进来触发mock')
  })
program.parse(process.argv)
