import Github from 'github-api'
import _config from '../config'

const gh = new Github(_config.github.initConf)

export default gh
