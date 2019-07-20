const path = require('path')
const fse = require('fs-extra')
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')
const inquirer = require('inquirer')
const { baseTelPath } = require('./config')
const error = chalk.bold.red

/**
 *
 * @param {*} fromPath 下载的路径
 * @param {*} toPath 安装的路径
 */
function downloadTel(fromPath, toPath) {
  return new Promise((resolve, reject)=>{
    download(fromPath, toPath, { clone: true }, (err)=>{
      if (err) {
        reject(err)
      }
      resolve('success')
    })
  })
}

async function create(projectName) {
  const cwd = process.cwd() // 当前目录
  const inCurrent = projectName === '.' // 是否在当前目录
  const name = inCurrent ? path.relative('../', cwd) : projectName // 项目名称
  const targetDir = path.resolve(cwd, projectName || '.') // 生成项目的目录 */
  const { actions } = await inquirer.prompt([
    {
      name: 'actions',
      type: 'list',
      message: '请选择拉取模板类型',
      choices: [
        { name: '默认', value: 0 },
        { name: 'webpack + react + react-router', value: 1 }
      ]
    }
  ])
  /**
   * 处理终端指令
   */
  if (actions && actions === 1) {
    // 判断文件不存在
    if (!fse.existsSync(targetDir)) {
      const spinner = ora('模板拉取中...').start()
      try {
        await downloadTel(baseTelPath.githubPath, `${cwd}/${name}`)
        spinner.succeed('模板拉取成功')
      } catch (e) {
        console.log(error(e))
        spinner.fail('模板拉取失败')
      }
    } else {
      console.log(error('目录名已存在!'))
    }
  }
}

module.exports = (...args) => {
  create(...args)
}
