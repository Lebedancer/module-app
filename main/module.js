(function(mainModule) {

    'use strict';

    if (!mainModule) {
        throw 'Md namespace to be defined';
    }

    mainModule.TestApp = {
        Description: {},
        App: {
            Router: {},
            Controller: {},
            CurrentApp: {},
            Workspace: {},
            Engines: {},

            RunModules: {}
        },
        Sandboxes: {
            Descriptions: {},
            Implementations: {}
        },
        Modules: {
            Descriptions: {},
            Implementations: {}
        },

        Options: {},
        Functions: {},
        Controls: {},
        Components: {
            Diagrams: {}
        },
        Data: {},
        Mixins: {}
    };


})(window);