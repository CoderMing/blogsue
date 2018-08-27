import React from 'react'

import Nav from '../features/Nav'
import SectionItem from '../components/SectionItem'
import MainLayout from '../components/MainLayout'
import Article from '../features/Article'
import Gitalk from '../components/Gitalk'
import UserSection from '../features/UserSection'
import LinkSection from '../features/LinkSection'

export default class extends React.Component {
  render() {
    const issueId = this.props.match.params.id
    return (
      <div>
        <Nav className="bp3-dark" />
        <MainLayout>
          <SectionItem>
            <Article id={issueId} />
            <Gitalk id={issueId} />
          </SectionItem>
          <div>
            <UserSection />
            <LinkSection>890</LinkSection>
          </div>
        </MainLayout>
      </div>
    )
  }
}
