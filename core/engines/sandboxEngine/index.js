import templateEngine from './../templateEngine';
import moduleEngine from './../moduleEngine';
import Sandbox from './sandbox';

export default function() {
    var sandboxes = {},
        workingSandbox;

    function createSandboxInstance(sandboxDescription, initOptions) {
        return new Sandbox(sandboxDescription, initOptions);
    }

    return {
        initializeSandboxes: function(sandboxesList) {
            for (var sandboxName in sandboxesList) {
                if (sandboxesList.hasOwnProperty(sandboxName)) {
                    sandboxes[sandboxName] = sandboxesList[sandboxName];
                }
            }

            return this;
        },
        initializeSandbox: function(sandboxDescription) {
            var box = sandboxes[sandboxDescription.Name];

            if (!box) {
                sandboxes[sandboxDescription.Name] = sandboxDescription;
            }

            return this;
        },
        getSandboxInstance: function(nameSandbox) {
        },
        createSandbox: function(sandboxDescription, options) {
            if (sandboxDescription) {
                if (workingSandbox) {
                    workingSandbox.destroy();
                    workingSandbox = null;
                }

                workingSandbox = createSandboxInstance(sandboxDescription, options);
                return workingSandbox;
            }

            return null;
        },
        deleteSandbox: function(nameSandbox) {

        },
        deleteAllRunningSandboxes: function() {

        },
        setSandbox: function(sandboxDescription, options) {
            var runingSandbox =  this.createSandbox(sandboxDescription, options);
            initializeModules(runingSandbox);
        }
    };

    function initializeModules(sandbox) {
        var modules = sandbox.description.Modules;
        var i;
        var module = modules[0];

        for (i = 0; i < modules.length; i++, module = modules[i]) {
            initializeModule(module, sandbox);
        }
    }

    function initializeModule(module, sandbox) {
        moduleEngine.createModule(module, sandbox);
    }
}();
