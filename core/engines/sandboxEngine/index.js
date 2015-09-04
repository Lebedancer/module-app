import templateEngine from './../templateEngine';
import moduleEngine from './../moduleEngine';
import Sandbox from './sandbox';

export default function() {
    var sandboxes = {};
    var workingSandbox;

    return {
        initializeSandboxes: initializeSandboxes,
        initializeSandbox: initializeSandbox,
        getSandboxInstance: getSandboxInstance,
        createSandbox: createSandbox,
        deleteSandbox: deleteSandbox,
        deleteAllRunningSandboxes: deleteAllRunningSandboxes,
        setSandbox:setSandbox
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

    /** @access private */
    function createSandboxInstance(sandboxDescription, initOptions) {
        return new Sandbox(sandboxDescription, initOptions);
    }

    /** @access public */
    function initializeSandboxes(sandboxesList) {
        for (var sandboxName in sandboxesList) {
            if (sandboxesList.hasOwnProperty(sandboxName)) {
                sandboxes[sandboxName] = sandboxesList[sandboxName];
            }
        }

        return this;
    }

    /** @access public */
    function initializeSandbox(sandboxDescription) {
        var box = sandboxes[sandboxDescription.Name];

        if (!box) {
            sandboxes[sandboxDescription.Name] = sandboxDescription;
        }

        return this;
    }

    /** @access public */
    function getSandboxInstance(nameSandbox) {}

    /** @access public */
    function createSandbox(sandboxDescription, options) {
        if (sandboxDescription) {
            if (workingSandbox) {
                workingSandbox.destroy();
                workingSandbox = null;
            }

            workingSandbox = createSandboxInstance(sandboxDescription, options);
            return workingSandbox;
        }
    }

    /** @access public */
    function deleteSandbox(nameSandbox) {

    }

    /** @access public */
    function deleteAllRunningSandboxes() {

    }

    /** @access public */
    function setSandbox(sandboxDescription, options) {
        var runingSandbox =  this.createSandbox(sandboxDescription, options);
        initializeModules(runingSandbox);
    }
}();
