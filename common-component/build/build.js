const { resolve, getComponentEntries } = require("./utils");

let buildConfig = {
  productionSourceMap:false,
  //  输出文件目录
  outputDir: resolve("lib"),
  //  webpack配置
  configureWebpack: {
    //  入口文件
    entry: getComponentEntries("packages"),
    //  输出配置
    output: {
      //  文件名称
      filename: "[name]/index.js",
      //  构建依赖类型
      libraryTarget: "umd",
      //  依赖输出
      libraryExport: "default",
      //  依赖名称
      library: "vesync-ui"
    },
    externals: {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
      },
    }
  },
  //  样式输出
  css: {
    sourceMap: true,
    extract: {
      filename: "css/[name].css"
    }
  },
  chainWebpack: config => {
    // 去掉一些默认的不必要的配置
    config.optimization.delete("splitChunks"); // 关闭代码分离，只生成一个js和一个css，异步组件import无效
    config.plugins.delete("copy"); 
    config.plugins.delete("preload");
    config.plugins.delete("prefetch"); // 删除懒加载模块的prefetch，降低带宽压力
    config.plugins.delete("html");
    config.plugins.delete("hmr"); //热更新
    config.entryPoints.delete("app");
  }
};

module.exports = buildConfig;