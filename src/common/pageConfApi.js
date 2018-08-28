import pageConf from '../config/pageConf'

const { localStorage } = window

const getObjItem = key => JSON.parse(localStorage.getItem(key) || '{}')
const setObjItem = (key, objVal) =>
  localStorage.setItem(key, JSON.stringify(objVal))

const confKey = '__config__'

setObjItem(confKey, {
  ...pageConf,
  ...getObjItem(confKey)
})

export default {
  get: () => getObjItem(confKey),

  set: obj =>
    setObjItem(confKey, {
      ...getObjItem(confKey),
      ...obj
    })
}
