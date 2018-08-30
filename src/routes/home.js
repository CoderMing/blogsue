import React from 'react'

import SectionItem from '../components/SectionItem/index'
import MainLayout from '../components/MainLayout/index'
import UserSection from '../features/UserSection/index'
import LinkSection from '../features/LinkSection/index'
import Post from '../features/Post/index'

export default class extends React.Component {
  render() {
    const page = this.props.match.params.page || 1
    return (
      <div>
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
