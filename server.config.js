import path from 'path'
import pkg from './package'

const port = process.env.PORT || pkg.config.port || 3000

const fat = {
  port: port,
  locationOrigin: `//localhost:${port}`,
  restfulApi: '',
  serverLocationOrigin: `//localhost:${port}`,
  serverRestfulApi: ''
}

const uat = {
  port: port,
  locationOrigin: `//localhost:${port}`,
  restfulApi: '',
  serverLocationOrigin: `//localhost:${port}`,
  serverRestfulApi: ''
}

const prod = {
  port: port,
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
  env: env,
  title: 'test',
  description: 'test-description',
  keywords: 'test',
  basename: basename,
  publicPath: basename + '/static',
  staticPath: path.join(__dirname, 'dest'),
  initialState: undefined,
  content: '',
  appSettings: { ...envConfig },
  ...envConfig
}

export default config
