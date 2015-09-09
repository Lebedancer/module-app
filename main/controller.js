import sandboxEngine from '../core/engines/sandboxEngine/';
import mainSandbox from '../sanboxes/mainSandbox/index';
import secondSandbox from '../sanboxes/secondSandbox/index';
import App from './app';

export default Marionette.Controller.extend({
    mainPage: function() {
        sandboxEngine.setSandbox(mainSandbox, {
            $box: App.mainRegion.$el,
            app: App
        });
    },

    secondUrl: function() {
        sandboxEngine.setSandbox(secondSandbox, {
            $box: App.mainRegion.$el,
            app: App
        });
    }
});
