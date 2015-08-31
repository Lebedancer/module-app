(function(mainModule) {
    'use strict';

    var sandboxEngine = mainModule.Sandbox;
    var moduleEngine = mainModule.Module;

    mainModule.AppEngine = {
        init: init
    };

    function init(app) {
        if (!app) {
            return;
        }

        $.extend(app, engineMethods);

        //sandboxEngine.initializeSandboxes(mainModule.Sandboxes.Descriptions);
        //moduleEngine.initializeModules(mainModule.Modules);

    };

    var engineMethods = {
        getFirstRouterModuleId: getFirstRouterModuleId,
        setSandbox: setSandbox,
        runRouterModule: runRouterModule,
        destroySandbox: destroySandbox,
        destroyRunModule: destroyRunModule,
        isRunSandbox: isRunSandbox,
        getBox: getBox
    };

    function getFirstRouterModuleId() {
        if (appModule.RunSandbox.description.RouterModules) {
            return appModule.RunSandbox.description.RouterModules[0].Id;
        }

        return null;
    }

    function setSandbox(sandboxName, options) {
        appModule.RunSandbox = sandboxEngine.createSandbox(sandboxName, options);
        initializeModules(appModule.RunSandbox);

        return appModule.RunSandbox;
    }

    function runRouterModule(routerModuleId) {
        if (appModule.RunSandbox.description.RouterModules) {
            var routerModule = getRouterModule(routerModuleId);
            initializeModule(routerModule.Name, appModule.RunSandbox);
        }
    }

    function destroySandbox() {
        if (appModule.RunSandbox) {
            appModule.RunSandbox.destroy();
            appModule.RunSandbox = null;
        }
    }

    function destroyRunModule() {
        moduleEngine.deleteAllRunningModules();
    };

    function isRunSandbox(sandboxName) {
        return appModule.RunSandbox && appModule.RunSandbox.Name === sandboxName;
    };

    function getBox(boxId, parentSelector) {
        if (parentSelector) {
            return $(parentSelector).find('#' + boxId);
        }

        return $('#' + boxId);
    };

    function initializeModules(sandbox) {
        var modulesName = sandbox.description.Modules;
        for (var i = 0, module = modulesName[0]; i < modulesName.length; i++, module = modulesName[i]) {
            initializeModule(module.Name, sandbox);
        }
    }

    function initializeModule(moduleName, sandbox) {
        moduleEngine.createModule(moduleName, sandbox);
    }

    function getRouterModule(moduleId) {
        for (var i = 0; i < appModule.RunSandbox.description.RouterModules.length; i++) {
            if (appModule.RunSandbox.description.RouterModules[i].Id === moduleId) {
                return appModule.RunSandbox.description.RouterModules[i];
            }
        }
    }

})(Md.Engines);