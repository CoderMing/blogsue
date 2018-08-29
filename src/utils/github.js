import Github from 'github-api'
import axios from 'axios'
import _config from '../config'

const repoBaseApi = `https://api.github.com/repos/${_config.user}/${_config.repo}`

const { clientID, clientSecret } = _config
const params = {
  client_id: clientID,
  client_secret: clientSecret,
  t: Date.now()
}

// gh 为通用的工具，仅供拓展。一般情况下勿使用
export const gh = new Github()

export const listIssues = async conf => {
  return await axios.get(`${repoBaseApi}/issues`, {
    params: { ...params, ...conf }
  })
}

listIssues()
export const getIssue = async num => {
  return await axios.get(`${repoBaseApi}/issues/${num}`, { params })
}

export const getUser = async id => {
  return await axios.get(`https://api.github.com/${_config.userType}/${id}`, {
    params
  })
}
