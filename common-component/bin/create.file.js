
const fs = require("fs")
const PATH = require('path')
const resolve = (dir) => PATH.join(__dirname, '../', dir);
const { upperCasetoLine } = require("../build/utils");

function createTemplate(path, name) {
  if(fs.existsSync(path)){
    console.log('该组件名称已存在')
    return       
  } else {
    fs.mkdirSync(path);
  }
  IndexTemplate(path, name)
  vueTemplate(path, name)
  changeRoute(name)
  changeIndexJs(name)
}

//修改组件总入口文件index.js
function changeIndexJs(name) {
  const upperName = upperNameFun(name)
  const fileUrl = resolve('./packages/index.js');
  const content = fs.readFileSync(fileUrl).toString();
  const newContent = content.replace(/(import\s)/,
  `import ${upperName} from './${name}/index'
`
+'$1'
  ).replace(/(components\s=\s\[)/,
  '$1' + `
  ${upperName},`
  ).replace(/(export\sdefault\s\{)/, 
  '$1' + `
  ${upperName},`
  )
  fs.writeFileSync(fileUrl, newContent, { encoding: 'utf-8' })
}

// 修改路由
function changeRoute(name) {
  const fileUrl = resolve('route.js')
  const content = fs.readFileSync(fileUrl).toString();
  const routeContnet = content.replace(/(\[)/,
    '$1' + `{
      path: '/vs-${name}',
      name: 'vs-${name}',
      component: () => import('./packages/${name}/src/${name}.vue')
    },`
  )
  fs.writeFileSync(fileUrl, routeContnet, { encoding: 'utf-8' })
}

// 创建vue文件
function vueTemplate(path, name) {
  const lineName = upperCasetoLine(name)
  const vueFileUrl = `${path}/src`
  let temp = `<template>
    <div class="${name}">
    </div>
</template>
  
<script>
  export default {
    name: 'vs-${lineName}',
  }
</script>`
  fs.mkdirSync(vueFileUrl);
  fs.writeFile(`${vueFileUrl}/${name}.vue`, temp, (err) => {
      if(err) {
        return console.log(err);
      } 
  })
}

// 将首字母转成大写
function upperNameFun(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

// 创建index.js的模板
function IndexTemplate(path, name) {
  const upperName = upperNameFun(name)
  let temp = `import ${upperName} from './src/${name}.vue'
    ${upperName}.install = function (vue) {
      vue.component(${upperName}.name, ${upperName})
    }
  export default ${upperName}`
  fs.writeFile(`${path}/index.js`, temp, function(err) { if (err) {console.log(err)} })
}

// 创建vue模板

module.exports = {
  createTemplate
}