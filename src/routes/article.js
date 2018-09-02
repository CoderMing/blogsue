import React from 'react'

import SectionItem from '../components/SectionItem'
import MainLayout from '../components/MainLayout'
import Article from '../features/Article'
import Gitalk from '../components/Gitalk'
import UserSection from '../features/UserSection'
import LinkSection from '../features/LinkSection'
import Loading from '../features/Loading'

export default class extends React.Component {
  render() {
    const issueId = this.props.match.params.id
    return (
      <div>
        <Loading />
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
