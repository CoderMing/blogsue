module.exports = {
  extends: 'react-app',
  plugins: [ 'prettier' ],
  rules: {
    'prettier/prettier': process.env.NODE_ENV ? 'warn' : 'error'
  }
}