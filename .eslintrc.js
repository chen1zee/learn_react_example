/**
 * 设置 环境变量 EXTEND_ESLINT="true"
 * 在 项目根目录 编辑 .eslintrc.js 设置额外的 eslint
 * */
module.exports = {
  root: true,
  extends: "react-app",
  plugins: [
    "react-hooks"
  ],
  rules: {
    "no-useless-constructor": 0,
    "eqeqeq": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}