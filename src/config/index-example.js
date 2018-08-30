import pageConfApi from '../common/pageConfApi'
import pageConf from './pageConf'

const config = {
  title: 'CoderMing的个人博客',

  description: '保持主动，保持热情',

  homePage: 'https://www.coderming.com',
  /**
   * 仓库如果在用户下，填 users
   * 如果在组织下，填 orgs
   */
  userType: 'users',
  /**
   * issue 仓库所在地
   */
  user: 'coderming',

  repo: 'blog',
  // 请申请一个clientID
  clientID: 'your client id',
  clientSecret: 'your client secret',
  /**
   * Gitalk 配置项
   * 请不要填写 owner，repo，clientID，clientSecret 字段
   * 会自动引用本config的 user，repo，clientID，clientSecret 字段以对应
   * 如何配置请访问 https://github.com/gitalk/gitalk/blob/master/readme-cn.md
   */
  gitalk: {
    distractionFreeMode: false
  },

  /**
   * Github 用户配置项
   */
  linkSections: [
    {
      title: '友情链接',
      linkList: [
        {
          name: '红岩网校工作站',
          href: 'http://hongyan.cqupt.edu.cn/aboutus'
        },
        {
          name: '红岩网校工作站',
          href: 'http://hongyan.cqupt.edu.cn/aboutus'
        }
      ]
    },
    {
      title: '友情链接',
      linkList: [
        {
          name: '红岩网校工作站',
          href: 'http://hongyan.cqupt.edu.cn/aboutus'
        },
        {
          name: '红岩网校工作站',
          href: 'http://hongyan.cqupt.edu.cn/aboutus'
        }
      ]
    }
  ],

  pageConf,

  pageConfApi
}

export default config
