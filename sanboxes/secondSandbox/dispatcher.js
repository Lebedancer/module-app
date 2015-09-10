export default (options) => {

    var data = {
        page: 1
    };
    var request = options.channel.reqres;

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
}