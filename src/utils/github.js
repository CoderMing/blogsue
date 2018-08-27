import Github from 'github-api'
import axios from 'axios'
import _config from '../config'

const repoBaseApi = `https://api.github.com/repos/${_config.articleRepo.user}/${
  _config.articleRepo.repo
}`
// gh 为通用的工具，仅供拓展。一般情况下勿使用
export const gh = new Github()

export const listIssues = async conf => {
  return await axios.get(`${repoBaseApi}/issues`, conf)
}

export const getIssue = async num => {
  return await axios.get(`${repoBaseApi}/issues/${num}`)
}

export const getUser = async id => {
  return await axios.get(`https://api.github.com/users/${id}`)
}
