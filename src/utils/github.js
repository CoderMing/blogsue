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
const userFilter = el =>
  ['OWNER', 'COLLABORATOR', 'MEMBER'].includes(el.author_association) ||
  _config.otherAuthors.includes(el.user.login)

// gh 为通用的工具，仅供拓展。一般情况下勿使用
export const gh = new Github()

export const listIssues = async (conf = {}) => {
  return await axios
    .get(`${repoBaseApi}/issues`, {
      params: { ...params, ...conf }
    })
    .then(res => {
      res.data = res.data.filter(userFilter)
      return res
    })
}

export const getIssue = async num => {
  return await axios.get(`${repoBaseApi}/issues/${num}`, { params }).then(async res => {
    if (userFilter(res.data)) return res
    return Promise.reject('issue author is invaid!')
  })
}

export const getUser = async id => {
  return await axios.get(`https://api.github.com/${_config.userType}/${id}`, {
    params
  })
}

export const listLabels = async (conf = {}) => {
  return await axios.get(`${repoBaseApi}/labels`, {
    params: { ...params, ...conf }
  })
}
