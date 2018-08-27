import React from 'react'

import Nav from '../features/Nav'
import SectionItem from '../components/SectionItem'
import MainLayout from '../components/MainLayout'
import UserSection from '../features/UserSection'
import LinkSection from '../features/LinkSection'
import Post from '../features/Post'

export default class extends React.Component {
  render() {
    const page = this.props.match.params.page || 1
    return (
      <div>
        <Nav />
        <MainLayout>
          <SectionItem>
            <Post page={page} />
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
