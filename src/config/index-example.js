import pageConfApi from '../common/pageConfApi'
import pageConf from './pageConf'

const config = {
  title: 'aha的博客',

  titleSuffix: 'Blogsue',

  description: '副标题',

  homePage: 'https://coderming.github.io',

  userLinks: [
    {
      title: 'GitHub',
      icon: 'user',
      url: 'https://github.com/coderming'
    }
  ],
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
  clientID: '',
  clientSecret: '',
  /**
   * 在本博客显示的其他issue创建者
   * 项目所有者（组织仓库的话为所有组织成员）及COLLABORATOR默认会显示
   * 主要目的是为了方式他人恶意发issue污染博客内容
   */
  otherAuthors: [''],
  /**
   * 网易云音乐组件
   * 打开你想要的音乐，找到其 ID（在 URL 中有），填入进去
   * 不会自动播放，这样影响用户体验
   */
  netEaseMusicID: '1711024',
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
   * 顶部状态栏的链接
   * 链接有两种属性，一种是url，一种是to
   * 前者对应直接刷新跳转链接，后者对应react-router的Link标签链接（不会触发页面刷新，不能指向其他域名）
   */
  navItem: [
    {
      name: 'Github',
      url: 'https://github.com/xxx',
      icon: 'person'
    },
    {
      name: 'ZHIHU',
      icon: 'user',
      url: 'https://www.zhihu.com/people/xxx/activities'
    }
  ],

  /**
   * Github 用户配置项
   */
  linkSections: [
    {
      title: '友情链接',
      linkList: [
        {
          name: 'CoderMing的个人博客',
          href: 'https://coderming.com/'
        }
      ]
    }
  ],
  /**
   * 右侧sections的空白处
   * 注意！此处是直接插入html字段，目的是为了支持更高的用户自定义度（例如使用a标签
   * 请勿插入危险的标签
   */
  blankSections: ['Write with ❤️ by xxx'],

  footers: [
    '本博客系统由 <a href="http://www.reactjs.org">React.js</a> 驱动',
    '评论系统由 <a href="https://github.com/gitalk/gitalk">Gitalk</a> 驱动'
  ],
  /**
   * 是否使用serviceWorker缓存文件
   * 如果你的文件将会经常变动，或者是在同一域名下有其它项目在运行，请填false
   */
  isUseServiceWorker: false,

  pageConf,

  pageConfApi
}

export default config
