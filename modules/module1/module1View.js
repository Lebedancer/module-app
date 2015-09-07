let vent;

export default Marionette.LayoutView.extend({
    template: '#module1Layout-Template',
    events: {
        'click .js-lock': lockTable
    },
    ui: {
        table: '.js-table'
    },
    initialize: initialize
})

/** @access private */
function initialize(options) {
    vent = options.vent;
    bindEvents.call(this);
}

/** @access private */ 
function lockTable() {

}

/** @access private */
function bindEvents() {
    this.listenTo(vent, 'table:lock', toggleTableLocking)
}

/** @access private */ 
function toggleTableLocking() {
    this.ui.table.toggleClass('disabled');
}