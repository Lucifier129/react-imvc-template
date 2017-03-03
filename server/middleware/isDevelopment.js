export default function isDevelopment (req, res, next) {
  if (process.env.NODE_ENV === 'development') {
    next()
  } else {
    next({
      message: '此 api 只在开发模式中可用！'
    })
  }
}
