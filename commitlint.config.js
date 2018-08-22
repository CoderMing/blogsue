/**
 * 中文化 commitlit 规范
 * changelog 只会显示 feat 和 fix 的msg
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0, 'never', ['lower-case']] // 为了适配中文
  }
}
