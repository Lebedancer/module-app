require('./style.css');

import Layout from './module5View';
import model from './module5Model';

export default (sandbox, description) => {

    var $region = sandbox.layout[description.InsertionPoint];
    var vent = sandbox.vent;
    var moduleLayout;

    initialize();

    return {
        destroy: destroy
    };
    /** @access public */
    function destroy() {
        if($region) {
            $region.reset();
        }
    }

    /** @access private */
    function initialize() {
        renderModule();
        bindEvents()
    }

    /** @access private */
    function renderModule() {
        moduleLayout = new Layout({
            vent: vent
        });
        $region.show(moduleLayout);
    }

    /** @access private */
    function bindEvents() {
    }
}