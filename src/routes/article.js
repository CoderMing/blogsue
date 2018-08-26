import React from 'react'

import Nav from '../features/Nav'
import SectionItem from '../components/SectionItem'
import MainLayout from '../components/MainLayout'
import Article from '../features/Article'
export default class extends React.Component {
  render() {
    const issueId = this.props.match.params.id
    return (
      <div>
        <Nav className="bp3-dark" />
        <MainLayout>
          <SectionItem>
            <Article id={issueId} />
          </SectionItem>
          <div>
            <SectionItem>890</SectionItem>
            <SectionItem>890</SectionItem>
          </div>
        </MainLayout>
      </div>
    )
  }
}
