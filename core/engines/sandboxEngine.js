import templateEngine from './templateEngine';
import moduleEngine from './moduleEngine';

export default function() {
    var sandboxes = {},
        workingSandbox;

    function createSandboxInstance(sandboxDescription, initOptions) {

        function Sandbox(settings) {
            this.Name = sandboxDescription.Name;
            this.description = settings;
            this.options = initOptions;
            this.layout = createLayoutView(initOptions.$box, sandboxDescription);
            this.vent = initOptions.app.Vent;
        }

        function getModuleDescription(moduleName) {
            var i, currentModule;

            for (i = 0, currentModule = this.description.Modules[0]; i < this.description.Modules.length; i++, currentModule = this.description.Modules[i]) {
                if (currentModule.Name === moduleName) {
                    return currentModule;
                }
            }

            for (i = 0, currentModule = this.description.RouterModules[0]; i < this.description.RouterModules.length; i++, currentModule = this.description.RouterModules[i]) {
                if (currentModule.Name === moduleName) {
                    return currentModule;
                }
            }

            return null;
        }

        function createLayoutView($box, description) {
            var layout = new Marionette.LayoutView({
                template: '#' + description.PageTemplateId,
                regions: description.regions,
                className: description.LayoutClass || ''
            });
            $box.html(layout.render().$el);

            return layout;
        }

        Sandbox.prototype.getIdRootElement = function(moduleName) {
            var module = getModuleDescription.call(this, moduleName);

            if (module) {
                return module.InsertionPoint;
            }

            return null;
        };

        Sandbox.prototype.getBox = function(moduleName) {
            var rootEl = this.getIdRootElement(moduleName);

            if (rootEl) {
                return initOptions.$box.find('#' + rootEl);
            }

            return null;
        };

        Sandbox.prototype.getTemplate = function(templateId) {
            return templateEngine.get(templateId);
        };

        Sandbox.prototype.getLayoutRegion = function(moduleName) {
            var currentModule = getModuleDescription.call(this, moduleName);

            if (currentModule && this.layout) {
                return this.layout[currentModule.LayoutRegion];
            }

            return null;
        };

        Sandbox.prototype.getDescriptionName = function(moduleName) {
            var currentModule = getModuleDescription.call(this, moduleName);

            if (currentModule) {
                return currentModule.Descriptions;
            }

            return null;
        };

        Sandbox.prototype.bind = function(event, callback) {
            this.vent.on(event, callback);
            return this;
        };

        Sandbox.prototype.unbindAllNamespace = function(namespace) {
            this.vent.off(namespace);
            return this;
        };

        Sandbox.prototype.unbind = function(event, callback) {
            this.vent.off(event, callback);
            return this;
        };

        Sandbox.prototype.trigger = function(event, data) {
            this.vent.trigger(event, data);
            return this;
        };

        Sandbox.prototype.destroy = function() {

        };

        return new Sandbox(sandboxDescription);
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
