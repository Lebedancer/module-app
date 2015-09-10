import moduleEngine from './../moduleEngine';

export default (settings, initOptions) => {

    return {
        Name: settings.Name,
        description: settings,
        options: initOptions,
        layout: createLayoutView(initOptions.$box, settings),
        vent: initOptions.app.Vent,
        activeModules: [],

        getIdRootElement,
        getBox,
        getTemplate,
        getLayoutRegion,
        getDescriptionName,
        bind,
        unbind,
        unbindAllNamespace,
        addActiveModule,
        destroy,
        trigger
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
function destroy() {
    moduleEngine.deleteModules(this.activeModules);

    this.activeModules = [];
}

/** @access private */ 
function addActiveModule(module) {
    if(module){
        this.activeModules.push(module);
    }
}

/** @access private */
function getModuleDescription(moduleName) {
    var i, currentModule;

    for (i = 0, currentModule = this.description.Modules[0]; i < this.description.Modules.length; i++, currentModule = this.description.Modules[i]) {
        if (currentModule.Name === moduleName) {
            return currentModule;
        }
    }

    //for (i = 0, currentModule = this.description.RouterModules[0]; i < this.description.RouterModules.length; i++, currentModule = this.description.RouterModules[i]) {
    //    if (currentModule.Name === moduleName) {
    //        return currentModule;
    //    }
    //}

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
