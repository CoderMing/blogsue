import Github from 'github-api'
import axios from 'axios'
import _config from '../config'

const baseApi = `https://api.github.com/repos/${_config.articleRepo.user}/${_config.articleRepo.repo}`

export const gh = new Github(_config.github.initConf)

export const listIssues = async conf => {
  let res = await axios.get(`${baseApi}/issues`, conf)
  
  return res
}

export const getIssue = async num => {
  let res = await axios.get(`${baseApi}/issues/${num}`)
  
  return res
}
