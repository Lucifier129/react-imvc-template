import Controller from 'react-imvc/controller'

/**
 * 1 秒钟之后重定向到首页
 */
export default class IsomorphicRedirect extends Controller {
    async shouldComponentCreate() {
        await delay(1000)
        this.redirect('/')
        return false
    }
}

function delay(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}