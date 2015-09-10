import Router from './router';
import App from './app';
import navigation from '../core/components/navigation';

export default function() {
    App.addRegions({
        mainRegion: '#pageContent'
    });

    App.addInitializer(function() {
        var router = new Router();
        //var workspace = new currentModule.Workspace();

        //currentModule.App.init();
        initComponents();
        Backbone.history.start();
    });

    App.start();
}

/** @access private */
function initComponents() {
    $('.js-testNav').navigation();
}