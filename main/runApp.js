(function(mainModule) {

    'use strict';

    if (!mainModule) {
        throw 'Md namespace to be defined';
    }

    var currentModule = mainModule.TestApp;
    var app = currentModule.App = new Marionette.Application();

    currentModule.start = function() {
        app.addRegions({
            mainRegion: '#pageContent'
        });

        app.addInitializer(function() {
            var vent = currentModule.Vent = new Backbone.Wreqr.EventAggregator();
            var router = new currentModule.Router();
            //var workspace = new currentModule.Workspace();

            //currentModule.App.init();
            Backbone.history.start();
        });

        app.start();
    };


})(window);