'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{
    path: '/base/static_view',
    controller: require('./static_view/Controller')
}, {
    path: '/base/basic_state',
    controller: require('./basic_state/Controller')
}, {
    path: '/base/basic_state/:custom_param',
    controller: require('./basic_state/Controller')
}, {
    path: '/base/import_css',
    controller: require('./import_css/Controller')
}, {
    path: '/base/use_action',
    controller: require('./use_action/Controller')
}, {
    path: '/base/event_handler',
    controller: require('./event_handler/Controller')
}, {
    path: '/base/life_cycle_method',
    controller: require('./life_cycle_method/Controller')
}, {
    path: '/base/isomorphic_fetch',
    controller: require('./isomorphic_fetch/Controller')
}, {
    path: '/base/simple_mock',
    controller: require('./simple_mock/Controller')
}, {
    path: '/base/isomorphic_cookie',
    controller: require('./isomorphic_cookie/Controller')
}, {
    path: '/base/isomorphic_redirect',
    controller: require('./isomorphic_redirect/Controller')
}, {
    path: '/base/input_component',
    controller: require('./input_component/Controller')
}, {
    path: '/base/custom_title_description_keywords',
    controller: require('./custom_title_description_keywords/Controller')
}];