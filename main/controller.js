import sandboxEngine from '../core/engines/sandboxEngine/';
import mainSandbox from '../sanboxes/mainSandbox/index';
import secondSandbox from '../sanboxes/secondSandbox/index';
import App from './app';

export default {
    mainPage: function() {
        sandboxEngine.setSandbox(mainSandbox, {
            $box: App.mainRegion.$el,
            app: App
        });
    },

    secondUrl: function(query) {
        sandboxEngine.setSandbox(secondSandbox, {
            $box: App.mainRegion.$el,
            query,
            app: App
        });
    }
};
