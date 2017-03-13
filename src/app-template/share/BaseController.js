/**
 * 继承框架层的 BaseController
 */
import Controller from 'react-imvc/controller'
import shareInitialState from './initialState'

export default class BaseController extends Controller {
  getInitialState (initialState) {
    return {
      ...initialState,
      ...shareInitialState
    }
  }
}
