require('./style.less');

import Layout from './module3View';
import model from './module3Model';

export default ($region, channel) => {

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
            channel
        });
        $region.show(moduleLayout);
    }

    /** @access private */
    function bindEvents() {
    }
}