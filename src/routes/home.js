import React from 'react'

import Nav from '../features/Nav'
import SectionItem from '../components/SectionItem'
import MainLayout from '../components/MainLayout'
import UserSection from '../features/UserSection'
import LinkSection from '../features/LinkSection'

export default () => (
  <div>
    <Nav />
    <MainLayout>
      <SectionItem>123213</SectionItem>
      <div>
        <UserSection />
        <LinkSection>890</LinkSection>
      </div>
    </MainLayout>
  </div>
)
