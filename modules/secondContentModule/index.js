require('./style.less');

import Layout from './secondContentModuleLayout';
import part1Module from './modules/part1';
import greenCube from '../greenCube';

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
        channel.vent.on('page:change', renderModule)
    }
    
    /** @access private */ 
    function getChildModule() {
        let currentItem = channel.reqres.request('getCurrentPage');
        let childModule;

        switch (currentItem) {
            case 1:
                childModule = part1Module;
                break;
            case 2:
                childModule = greenCube;
                break;
        }

        return childModule;
    }
    
}