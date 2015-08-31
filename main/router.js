(function(mainModule) {

    'use strict';

    var router = {
        appRoutes: {
            '': 'mainPage',
            '(/)': 'mainPage',
            'second(/)': 'secondUrl',

            '*notFound': 'mainPage'
        },

        initialize: function() {
            this.controller = new mainModule.Controller();
            return this;
        }
    };

    mainModule.Router = Marionette.AppRouter.extend(router);

})(window.TestApp);