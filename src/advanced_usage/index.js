export default [
    {
        path: '/advanced_usage/custom_isomorphic_method',
        controller: require('./custom_isomorphic_method/Controller')
    },
    {
        path: '/advanced_usage/page_transition/a',
        controller: require('./page_transition/page_a/Controller')
    },
    {
        path: '/advanced_usage/page_transition/b',
        controller: require('./page_transition/page_b/Controller')
    },
    {
        path: '/advanced_usage/page_transition/c',
        controller: require('./page_transition/page_c/Controller')
    },
    {
        path: '/advanced_usage/page_transition/d',
        controller: require('./page_transition/page_d/Controller')
    }
]