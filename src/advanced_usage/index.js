export default [
    {
        path: '/advanced_usage/custom_isomorphic_method',
        controller: require('./custom_isomorphic_method/Controller')
    },
    {
        path: '/advanced_usage/use_keep_alive/a',
        controller: require('./use_keep_alive/page_a/Controller')
    },
    {
        path: '/advanced_usage/use_keep_alive/b',
        controller: require('./use_keep_alive/page_b/Controller')
    },
    {
        path: '/advanced_usage/use_nav_link_component/:type',
        controller: require('./use_nav_link_component/Controller')
    }
]