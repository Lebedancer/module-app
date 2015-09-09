require('./style.less');

import Layout from './module3View';
import model from './module3Model';

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