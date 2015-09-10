let reqres;

export default Marionette.LayoutView.extend({
    template: '#secondNav-Template',
    ui: {
        items: '.js-secondNav__list>li'
    },
    initialize,
    onRender
})

/** @access private */
function initialize(options) {
    reqres = options.channel.reqres;
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
function selectItem(selectedItem) {
    var $selectedItem = this.ui.items.filter(`[data-item=${selectedItem}]`);

    this.ui.items.removeClass('active');
    $selectedItem.addClass('active');
}