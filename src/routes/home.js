import React from 'react'

import Nav from '../features/Nav'
import SectionItem from '../components/SectionItem'
import MainLayout from '../components/MainLayout'

export default () => (
  <div>
    <Nav />
    <MainLayout>
      <SectionItem>123213</SectionItem>
      <SectionItem>890</SectionItem>
    </MainLayout>
  </div>
)
