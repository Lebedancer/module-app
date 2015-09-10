import templateEngine from './../templateEngine';
import moduleEngine from './../moduleEngine';
import Sandbox from './sandbox';

export default function() {
    var sandboxes = {};
    var workingSandbox;
    var runningSandboxDispatcher;

    return {
        initializeSandbox,
        getSandboxInstance,
        createSandbox,
        deleteSandbox,
        deleteAllRunningSandboxes,
        setSandbox
    };

    function initializeModules(sandbox) {
        var modules = sandbox.description.Modules;
        var module = modules[0];

        for (var i = 0; i < modules.length; i++, module = modules[i]) {
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

            if(sandboxDescription.Dispatcher) {
                runningSandboxDispatcher = new sandboxDescription.Dispatcher(options);
            }

            return workingSandbox;
        }
    }

    /** @access public */
    function deleteSandbox(nameSandbox) {

    }

    /** @access public */
    function deleteAllRunningSandboxes() {
        runningSandboxDispatcher && runningSandboxDispatcher.destroy();
    }

    /** @access public */
    function setSandbox(sandboxDescription, options) {
        options.channel = Backbone.Wreqr.radio.channel(sandboxDescription.Name);

        var runningSandbox =  this.createSandbox(sandboxDescription, options);

        initializeModules(runningSandbox);
    }
}();
