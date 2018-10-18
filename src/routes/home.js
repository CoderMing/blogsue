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
    const page = this.props.match.params.page || 1
    return (
      <React.Fragment>
        <Loading />
        <MainLayout>
          <SectionItem>
            <Post page={page} />
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
    const { page } = { page: 1, ...this.props.match.params }
    const { title, titleSuffix } = { titleSuffix: 'Blogsue', ..._config }
    window.document.title = `${title}${page === 1 ? '' : ` · 第${page}页 `} - ${titleSuffix}`
  }
}
