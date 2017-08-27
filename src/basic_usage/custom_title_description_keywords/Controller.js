import Controller from 'react-imvc/controller'
import View from './View'
import * as Model from './Model'

export default class CustomTDK extends Controller {
    View = View
    Model = Model
}