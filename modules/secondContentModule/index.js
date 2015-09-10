require('./style.less');

import Layout from './secondContentModuleLayout';
import module4 from '../module4';
import module5 from '../module5';

export default ($region, channel) => {

    initialize();

    return {
        destroy
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
        var childModule = getChildModule();
        new childModule($region, channel);
    }

    /** @access private */
    function bindEvents() {
        channel.vent.on('change:menuItem', renderModule)
    }
    
    /** @access private */ 
    function getChildModule() {
        let currentItem = channel.reqres.request('getCurrentPage');
        let childModule;

        switch (currentItem) {
            case 1:
                childModule = module4;
                break;
            case 2:
                childModule = module5;
                break;
        }

        return childModule;
    }
    
}