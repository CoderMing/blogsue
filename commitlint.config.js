/**
 * 中文化 commitlit 规范
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0, 'never', ['lower-case']] // 为了适配中文
  }
}
