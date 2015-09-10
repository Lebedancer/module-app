require('./style.less');

import Layout from './module1View';
import model from './module1Model';

export default ($region, channel) => {
    initialize();

    return {
        destroy: destroy
    };

    /** @access public */
    function destroy() {
    }

    /** @access private */
    function initialize() {
        renderModule();
    }

    /** @access private */
    function renderModule() {
        var moduleLayout = new Layout({
            channel
        });
        $region.show(moduleLayout);
    }
}
