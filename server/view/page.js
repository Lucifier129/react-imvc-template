import React from 'react'
import DefaultLayout from './layouts/default'

export default function Page (props) {
  let { content, ...layoutProps } = props
  return (
    <DefaultLayout {...layoutProps}>
      <div id='root' dangerouslySetInnerHTML={{ __html: content }} />
      <div id='modal' />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function() {
            window.__INITIAL_STATE__ = ${JSON.stringify(props.initialState)}
            window.__APP_SETTINGS__ = ${JSON.stringify(props.appSettings)}
            window.__PUBLIC_PATH__ = '${props.publicPath}'
          })()
        `
        }}
      />
      <script src={`${props.publicPath}/${props.assets.vendor}`} />
      <script src={`${props.publicPath}/${props.assets.index}`} />
    </DefaultLayout>
  )
}
