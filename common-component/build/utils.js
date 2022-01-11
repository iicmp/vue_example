const fs = require('fs')
const path2 = require('path')
const join = path2.join

const resolve = (dir) => path2.join(__dirname, '../', dir);

/**
 * @desc 大写转横杠
 * @param {*} str
 */
function upperCasetoLine(str) {
  let temp = str.replace(/[A-Z]/g, function (match) {
    return "-" + match.toLowerCase();
  });
  if (temp.slice(0, 1) === '-') {
    temp = temp.slice(1);
  }
  return temp;
}

module.exports = {
  resolve,
  upperCasetoLine,
  /**
   * @desc 获取组件入口
   * @param {*} path
   */
  getComponentEntries(path) {
    let files = fs.readdirSync(resolve(path));
    // let files = ['test1', 'index.js']

    const arg = process.argv.splice(2)
    if (arg[2]) {
      files = ['index.js']
      const name = arg[2].substring(2);
      files.push(name)
    }

    return files.reduce((fileObj, item) => {
      const itemPath = join(path, item);
      const isDir = fs.statSync(itemPath).isDirectory();
      const [name, suffix] = item.split('.');

      if (isDir) {
        fileObj[`vs-${upperCasetoLine(item)}`] = resolve(join(itemPath, 'index.js'))
      }
      else if (suffix === "js") {
        fileObj[name] = resolve(`${itemPath}`);
      }
      return fileObj
    }, {});
  }
}