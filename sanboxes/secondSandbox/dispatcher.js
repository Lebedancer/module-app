export default (options) => {

    let data = {
        page: 1
    };
    let request = options.channel.reqres;
    let vent = options.channel.vent;

    initialize();

    /** @access private */
    function initialize() {
        setData.call(this);
        bindEvents.call(this);
        bindRequests.call(this);
    }

    /** @access private */
    function setData() {
        var attrs = getQueryAttrs();

        if (attrs && attrs.length) {
            data.page = attrs[0];
        }
    }

    /** @access private */
    function bindEvents() {
        vent.on('page:change', setPage)
    }

    /** @access private */
    function bindRequests() {
        request.setHandler('getCurrentPage', function() {
            return data.page
        });
    }

    /** @access private */
    function getQueryAttrs() {
        if (options.query) {
            return options.query.split('/');
        }
    }

    /** @access private */
    function setPage(itemCode) {
        if(itemCode){
            data.page = itemCode;
        }
    }
}