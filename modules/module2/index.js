require('./style.css');

import Layout from './module2View';
import model from './module2Model';

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