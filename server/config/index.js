import pkg from '../../package'

const fat = {
    locationOrigin: '//localhost:3003',
	restfulApi: '',
	serverRestfulApi: '',
}

const uat = {
    locationOrigin: '//localhost:3003',
	restfulApi: '',
	serverRestfulApi: '',
}

const prod = {
    locationOrigin: '//localhost:3003',
	restfulApi: '',
	serverRestfulApi: '',
}

const basename = pkg.config.vd
const env = pkg.config.env.toLowerCase()
const envConfigMap = {fat, uat, prod}
const envConfig = envConfigMap[env] || envConfigMap.prod

const config = {
    title: 'test',
    description: 'test-description',
    keywords: 'test',
    basename: basename,
    publicPath: basename + '/static',
    staticPath: '../static',
    initialState: 'undefined',
    content: '',
    appSettings: {...envConfig},
    ...envConfig,
}

export default config
