const path = require('path')

export default {
  "alias": {
    "@": path.resolve(__dirname, './src'),
    "mock": path.resolve(__dirname, './mock')
  },
  "theme": {},
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "style": true }]
  ]
}
