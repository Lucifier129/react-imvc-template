import Controller from 'react-imvc/controller'
import * as Model from './Model'
import View from './View'

export default class Home extends Controller {
    Model = Model;
    View = View;
}