import controller from './controller'

export default  Marionette.AppRouter.extend({
    controller,
    appRoutes: {
        '(/)': 'mainPage',
        'second(/)*params': 'secondUrl',

        '*notFound': 'mainPage'
    }
});

