import React from 'react'

import SectionItem from '../components/SectionItem/index'
import MainLayout from '../components/MainLayout/index'
import Article from '../features/Article/index'
import Gitalk from '../components/Gitalk/index'
import UserSection from '../features/UserSection/index'
import LinkSection from '../features/LinkSection/index'

export default class extends React.Component {
  render() {
    const issueId = this.props.match.params.id
    return (
      <div>
        <MainLayout>
          <SectionItem>
            <Article id={issueId} />
            <Gitalk id={issueId} />
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
