import Layout from './module1View';
import model from './module1Model';

export default (sandbox, description) => {

    var $region = sandbox.layout[description.InsertionPoint];

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
        var moduleLayout = new Layout();
        $region.show(moduleLayout);
    }
}