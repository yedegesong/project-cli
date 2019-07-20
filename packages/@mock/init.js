const fse = require('fs-extra')
const chokidar = require('chokidar')
const { execFile } = require('child_process')
const ora = require('ora')
const path = require('path')
const mockDir = path.resolve(process.cwd(), './mock')
const telPath = path.resolve(__dirname, 'tel')

let child = null
function createChild() {
  child = execFile('node', [path.resolve(__dirname, './app.js')])
  child.stdout.pipe(process.stdout)
  child.stderr.pipe(process.stderr)
}

function reload() {
  if (child) {
    child.kill()
    child.on('exit', () => {
      console.log('restart')
      createChild()
    })
  } else {
    createChild()
  }
}

if (fse.existsSync(mockDir)) {
  reload()
  // 存在启动子进程mock
  const watcher = chokidar.watch(mockDir, {
    persistent: true
  })
  watcher.on('change', ()=>{
    reload()
  })
} else {
  // 不存在mock目录将mock模板拷贝到cli执行的工程目录下
  const spinner = ora('create mock template').start()
  fse.copy(telPath, mockDir)
    .then(()=>{
      spinner.succeed('success')
    })
    .catch(err => spinner.warn(err))
}
