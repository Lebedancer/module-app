export default (options) => {

    var data = setData();
    var request = options.app.channel.reqres;

    //if (data) {
        initialize();
    //}

    /** @access private */
    function initialize() {
        bindEvents.call(this);
        bindRequests.call(this);
    }

    /** @access private */
    function setData() {
        var attrs = getQueryAttrs();

        if (attrs && attrs.length) {
            return {
                page: attrs[0]
            }
        }
    }

    /** @access private */
    function bindEvents() {

    }

    /** @access private */
    function bindRequests() {
        request.setHandler('getCurrentPage', function () {
            return data.page
        })
    }

    /** @access private */
    function getQueryAttrs() {
        if (options.query) {
            return options.query.split('/');
        }
    }
}