let descriptions = {};
let runModules = {};

export default {
    getDescriptionModule,
    getAllRunModule,
    deleteModules,
    createModule
};

function getDescriptionModule(moduleName, sandbox) {
    var descriptionName = sandbox.getDescriptionName(moduleName);

    if (descriptionName === undefined || descriptionName === null) {
        return descriptions[moduleName];
    }

    return descriptions[descriptionName];
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
        sandbox.addActiveModule(runModules[moduleName]);
    }

    return this;
}

function deleteModule(nameModule) {
    if (nameModule.destroy) {
        nameModule.destroy();
    } else {
        console.warn(nameModule, 'This module does not method destroy');
    }
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

/** @access private */
function deleteModules(modulesList) {
    var length = modulesList.length;

    for (var i = 0; i < length; i++) {
        deleteModule(modulesList[i]);
    }
}
