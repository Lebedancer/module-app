import Router from './router';
import App from './app';
require('./style.css');
export default function() {
    App.addRegions({
        mainRegion: '#pageContent'
    });

    App.addInitializer(function() {
        App.Vent = new Backbone.Wreqr.EventAggregator();
        var router = new Router();
        //var workspace = new currentModule.Workspace();

        //currentModule.App.init();
        Backbone.history.start();
    });

    App.start();
}

