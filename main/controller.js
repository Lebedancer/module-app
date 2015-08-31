(function(mainModule, coreModule) {

    'use strict';

    var sandboxEngine = coreModule.Engines.Sandbox;

    mainModule.Controller = Marionette.Controller.extend({
        mainPage: function() {
            var currentSandbox = sandboxEngine.setSandbox('MainSandbox', {
                module: mainModule,
                $box: mainModule.App.mainRegion.$el
            });

        },

        secondUrl: function() {
            var currentSandbox = sandboxEngine.setSandbox('SecondSandbox', {
                module: mainModule,
                $box: mainModule.App.mainRegion.$el
            });

        }
    });

})(window.TestApp, Md);