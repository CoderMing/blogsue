import React from 'react'

import SectionItem from '../components/SectionItem'
import MainLayout from '../components/MainLayout'
import UserSection from '../features/UserSection'
import LinkSection from '../features/LinkSection'
import Post from '../features/Post'
import Loading from '../features/Loading'

import _config from '../config'

export default class extends React.Component {
  render() {
    const label = this.props.match.params.label || ''
    const page = this.props.match.params.page || 1
    const postConfig = { label, page }
    return (
      <React.Fragment>
        <Loading />
        <MainLayout>
          <SectionItem>
            <Post {...postConfig} />
          </SectionItem>
          <div>
            <UserSection />
            <LinkSection />
          </div>
        </MainLayout>
      </React.Fragment>
    )
  }

  componentDidMount() {
    const { label, page } = { page: 1, ...this.props.match.params }
    const { titleSuffix } = { titleSuffix: 'Blogsue', ..._config }
    window.document.title = `标签：${label}${page === 1 ? '' : ` · 第${page}页 `} - ${titleSuffix}`
  }
}
