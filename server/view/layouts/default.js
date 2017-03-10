import React from 'react'

export default function DefaultLayout (props) {
  return (
    <html>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui'
        />
        <meta content='yes' name='apple-mobile-web-app-capable' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <meta content='black' name='apple-mobile-web-app-status-bar-style' />
        <title>{props.title}</title>
        <meta name='description' content={props.description} />
        <meta name='keywords' content={props.keywords} />
      </head>
      <body>
        {props.children}
      </body>
    </html>
  )
}
