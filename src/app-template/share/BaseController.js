/**
 * 继承框架层的 BaseController
 */
import Controller from '../../share/BaseController'
import shareInitialState from './initialState'

export default class BaseController extends Controller {
  getInitialState (initialState) {
    return {
      ...initialState,
      ...shareInitialState
    }
  }
}
