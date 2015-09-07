let vent;

export default Marionette.LayoutView.extend({
    template: '#module2View-Template',
    events: {
        'click .js-lock': lockTable
    },
    initialize: initialize
})

/** @access private */
function initialize(options) {
    vent = options.vent;
}

/** @access private */
function lockTable() {
    vent.trigger('table:lock')
}