
const path = require('path')
const inquirer = require('inquirer')
const resolve = (dir) => path.join(__dirname, '../', dir);
const { createTemplate } = require('./create.file.js')

const CREATE_QUESTIONS = [
  {
    type: 'input',
    message: '请输入组件名称',
    name: 'name'
  },
];

(async () => {
  const answers = await inquirer.prompt(CREATE_QUESTIONS)
  let { name } = answers
  const fileUrl = resolve('packages')
  let temPath = `${fileUrl}/${name}`;
  createTemplate(temPath, name)
})()

