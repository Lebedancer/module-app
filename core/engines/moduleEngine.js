export default function() {
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

    function createModule(module, sandbox) {
        var description = module;
        var moduleInstance = module.Instance;
        var moduleName = module.Name;
        var workingModule = runModules[moduleName];

        if (!description) {
            throw 'module ' + moduleName + ' description must be defined';
        }

        if (workingModule && typeof workingModule.refresh === 'function') {
            workingModule.refresh(sandbox, description);
        } else {
            runModules[moduleName] = new moduleInstance(sandbox, description);
        }

        return this;
    }

    function deleteModule(nameModule) {

    }

    function deleteAllRunningModules() {
        for (var moduleItem in runModules) if (runModules.hasOwnProperty(moduleItem)) {
            runModules[moduleItem].destroy();
            runModules[moduleItem] = null;
            delete runModules[moduleItem];
        }
    }

    function getAllRunModule() {
        return runModules;
    }

    return {
        getDescriptionModule: getDescriptionModule,
        getAllRunModule: getAllRunModule,
        createModule: createModule
    };

}();
