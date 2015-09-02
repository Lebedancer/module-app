import Controller from './controller'

export default  Marionette.AppRouter.extend({
    appRoutes: {
        '': 'mainPage',
        '(/)': 'mainPage',
        'second(/)': 'secondUrl',

        '*notFound': 'mainPage'
    },

    initialize: function() {
        this.controller = new Controller();
        return this;
    }
});

