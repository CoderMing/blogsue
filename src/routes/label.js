import React from 'react'

import SectionItem from '../components/SectionItem'
import MainLayout from '../components/MainLayout'
import UserSection from '../features/UserSection'
import LinkSection from '../features/LinkSection'
import Post from '../features/Post'
import Loading from '../features/Loading'

export default class extends React.Component {
  render() {
    const label = this.props.match.params.label || ''
    const page = this.props.match.params.page || 1
    return (
      <div>
        <Loading />
        <MainLayout>
          <SectionItem>
            <Post label={label} page={page} />
          </SectionItem>
          <div>
            <UserSection />
            <LinkSection />
          </div>
        </MainLayout>
      </div>
    )
  }
}
