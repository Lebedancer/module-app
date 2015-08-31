(function(mainModule) {

    'use strict';

    mainModule.Module = function() {

        var modules = {},
            descriptions = {},
            runModules = {};

        function getDescriptionModule(moduleName, sandbox) {
            var descriptionName = sandbox.getDescriptionName(moduleName);

            if (descriptionName === undefined || descriptionName === null) {
                return descriptions[moduleName];
            }

            return descriptions[descriptionName];
        }

        function setModulesList(modulesList) {
            for (var moduleName in modulesList) {
                if (modulesList.hasOwnProperty(moduleName)) {
                    modules[moduleName] = modulesList[moduleName];
                }
            }
        }

        return {
            initializeModules: function(modulesList) {
                setModulesList(modulesList);
                if (modulesList.Implementations) {
                    setModulesList(modulesList.Implementations);
                }

                for (var moduleDescription in modulesList.Descriptions) {
                    if (modulesList.Descriptions.hasOwnProperty(moduleDescription)) {
                        descriptions[moduleDescription] = modulesList.Descriptions[moduleDescription];
                    }
                }

                return this;
            },
            createModule: function(moduleName, sandbox) {
                var currentModule = modules[moduleName],
                    description = getDescriptionModule(moduleName, sandbox),
                    workingModule = runModules[moduleName];

                if (!description) throw 'module ' + moduleName + ' description must be defined';

                if (currentModule) {
                    if (workingModule && typeof workingModule.refresh === 'function') {
                        workingModule.refresh(sandbox, description);
                    } else {
                        runModules[moduleName] = new currentModule.init(sandbox, description);
                    }
                }

                return this;
            },
            deleteModule: function(nameModule) {

            },
            deleteAllRunningModules: function() {
                for (var moduleItem in runModules) if (runModules.hasOwnProperty(moduleItem)) {
                    runModules[moduleItem].destroy();
                    runModules[moduleItem] = null;
                    delete runModules[moduleItem];
                }
            },
            getAllRunModule: function() {
                return runModules;
            }
        };

    }();

})(Md.Engines);