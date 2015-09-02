export default (settings, initOptions) => {
    return {
        Name: settings.Name,
        description: settings,
        options: initOptions,
        layout: createLayoutView(initOptions.$box, settings),
        vent: initOptions.app.Vent,

        getIdRootElement: getIdRootElement,
        getBox: getBox,
        getTemplate: getTemplate,
        getLayoutRegion: getLayoutRegion,
        getDescriptionName: getDescriptionName,
        bind: bind,
        unbind: unbind,
        unbindAllNamespace: unbindAllNamespace,
        trigger: trigger
    };
}

/** @access public */
function getIdRootElement(moduleName) {
    var module = getModuleDescription.call(this, moduleName);

    if (module) {
        return module.InsertionPoint;
    }

    return null;
}

/** @access public */
function getBox(moduleName) {
    var rootEl = this.getIdRootElement(moduleName);

    if (rootEl) {
        return initOptions.$box.find('#' + rootEl);
    }

    return null;
}

/** @access public */
function getTemplate(templateId) {
    return templateEngine.get(templateId);
}

/** @access public */
function getLayoutRegion(moduleName) {
    var currentModule = getModuleDescription.call(this, moduleName);

    if (currentModule && this.layout) {
        return this.layout[currentModule.LayoutRegion];
    }

    return null;
}

/** @access public */
function getDescriptionName(moduleName) {
    var currentModule = getModuleDescription.call(this, moduleName);

    if (currentModule) {
        return currentModule.Descriptions;
    }

    return null;
}

/** @access public */
function bind(event, callback) {
    this.vent.on(event, callback);
    return this;
}

/** @access public */
function unbind(event, callback) {
    this.vent.off(event, callback);
    return this;
}

/** @access public */
function unbindAllNamespace(namespace) {
    this.vent.off(namespace);
    return this;
}

/** @access public */
function trigger(event, data) {
    this.vent.trigger(event, data);
    return this;
}

/** @access public */
function destroy() {}

/** @access private */
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

/** @access private */
function createLayoutView($box, description) {
    var layout = new Marionette.LayoutView({
        template: '#' + description.PageTemplateId,
        regions: description.regions,
        className: description.LayoutClass || ''
    });
    $box.html(layout.render().$el);

    return layout;
}
