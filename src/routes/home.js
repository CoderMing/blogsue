import React from 'react'

import SectionItem from '../components/SectionItem'
import MainLayout from '../components/MainLayout'
import UserSection from '../features/UserSection'
import LinkSection from '../features/LinkSection'
import Post from '../features/Post'
import Loading from '../features/Loading'

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
}
