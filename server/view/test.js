import React from 'react'
import DefaultLayout from './layouts/default'

export default function Test (props) {
  let { content, ...layoutProps } = props
  return (
    <DefaultLayout {...layoutProps}>
      <div id='root' dangerouslySetInnerHTML={{ __html: content }} />
    </DefaultLayout>
  )
}
