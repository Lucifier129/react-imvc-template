export default [
    {
        path: '/basic_usage/static_view',
        controller: require('./static_view/Controller')
    },
    {
        path: '/basic_usage/use_link_component',
        controller: require('./use_link_component/Controller')
    },
    {
        path: '/basic_usage/basic_state',
        controller: require('./basic_state/Controller')
    },
    {
        path: '/basic_usage/basic_state/:custom_param',
        controller: require('./basic_state/Controller')
    },
    {
        path: '/basic_usage/import_css',
        controller: require('./import_css/Controller')
    },
    {
        path: '/basic_usage/use_action',
        controller: require('./use_action/Controller')
    },
    {
        path: '/basic_usage/event_handler',
        controller: require('./event_handler/Controller')
    },
    {
        path: '/basic_usage/life_cycle_method',
        controller: require('./life_cycle_method/Controller')
    },
    {
        path: '/basic_usage/isomorphic_fetch',
        controller: require('./isomorphic_fetch/Controller')
    },
    {
        path: '/basic_usage/simple_mock',
        controller: require('./simple_mock/Controller')
    },
    {
        path: '/basic_usage/isomorphic_cookie',
        controller: require('./isomorphic_cookie/Controller')
    },
    {
        path: '/basic_usage/isomorphic_redirect',
        controller: require('./isomorphic_redirect/Controller')
    },
    {
        path: '/basic_usage/input_component',
        controller: require('./input_component/Controller')
    },
    {
        path: '/basic_usage/custom_title_description_keywords',
        controller: require('./custom_title_description_keywords/Controller')
    }
]