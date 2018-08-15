import React, { Component } from 'react'
import gh from '../../interfaces/github'
import Markdown from 'markdown'

export default class Article extends Component {
  state = {
    data: '123'
  }

  render () {
    return (
      <div>
        <section></section>
      </div>
    )
  }

  async componentDidMount () {
    const toHtml = Markdown.markdown.toHTML
    const art = gh.getIssues('coderming', 'blog')

    let issues = (await art.listIssues())

    let issueData = await art.listIssueComments(issues.data[1].number)

    console.log(issueData)
  //   this.setState({
  //     data: toHtml(issueData.data.find(el => el.number === 4).body)
  //   })
  }

}