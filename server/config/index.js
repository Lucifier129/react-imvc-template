import pkg from '../../package'

const port = process.env.PORT || pkg.config.port || 3000

const fat = {
  locationOrigin: `//localhost:${port}`,
  restfulApi: '',
  serverLocationOrigin: `//localhost:${port}`,
  serverRestfulApi: ''
}

const uat = {
  locationOrigin: `//localhost:${port}`,
  restfulApi: '',
  serverLocationOrigin: `//localhost:${port}`,
  serverRestfulApi: ''
}

const prod = {
  locationOrigin: `//localhost:${port}`,
  restfulApi: '',
  serverLocationOrigin: `//localhost:${port}`,
  serverRestfulApi: ''
}

const basename = pkg.config.vd
const env = pkg.config.env.toLowerCase()
const envConfigMap = { fat, uat, prod }
const envConfig = envConfigMap[env] || envConfigMap.prod

const config = {
  title: 'test',
  description: 'test-description',
  keywords: 'test',
  head: '',
  header: '',
  footer: '',
  ending: '',
  basename: basename,
  publicPath: basename + '/static',
  staticPath: '../dest',
  initialState: undefined,
  content: '',
  appSettings: { ...envConfig },
  ...envConfig
}

export default config
