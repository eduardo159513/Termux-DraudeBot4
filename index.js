const lolcatjs = require('lolcatjs')
const figlet = require('figlet')

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

lolcatjs.fromString('[INFO] SE MEU SCRIPT ESTIVER COM ERROS, INFORME-ME')
lolcatjs.fromString('[SYSTEM]  INICIANDO O BOT...')
console.log('------------------------------------------------')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')
CFonts.say('WHATSAPP BOT', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say('\'Termux-DraudeBot4\' By @eduardo159513', {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
console.log('------------------------------------------------')

function start() {
  let args = [path.join(__dirname, 'nzwa.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })
}

start()
console.log('------------------------------------------------')
lolcatjs.fromString('[DEV] EDUARDO159513')
