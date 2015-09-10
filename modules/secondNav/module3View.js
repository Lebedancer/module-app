let reqres;
let vent;

export default Marionette.LayoutView.extend({
    template: '#secondNav-Template',
    ui: {
        items: '.js-secondNav__list>li'
    },
    events: {
        'click @ui.items': manualSelectItem
    },
    initialize,
    onRender
})

/** @access private */
function initialize(options) {
    reqres = options.channel.reqres;
    vent = options.channel.vent;
}

/** @access private */
function onRender() {
    selectDefaultItem.call(this);
}

/** @access private */
function selectDefaultItem() {
    let currentItem = reqres.request('getCurrentPage');
    selectItem.call(this, currentItem);
}

/** @access private */
function manualSelectItem(e) {
    var $el = $(e.currentTarget);
    var itemCode = parseInt($el.attr('data-item'), 10);

    if(!$el.hasClass('active')){
        selectItem.call(this, itemCode);
        vent.trigger('page:change', itemCode);
    }
}

/** @access private */
function selectItem(selectedItemCode) {
    var $selectedItem = this.ui.items.filter(`[data-item=${selectedItemCode}]`);

    this.ui.items.removeClass('active');
    $selectedItem.addClass('active');
}