let channel;

export default Marionette.LayoutView.extend({
    template: '#secondNav-Template',
    ui: {
        items: '.js-secondNav__list>li'
    },
    initialize,
    onRender
})

/** @access private */
function initialize() {
    debugger;
}

/** @access private */
function onRender() {
    selectDefaultItem.call(this);
}

/** @access private */
function selectDefaultItem() {
    var currentItem =
    selectItem();
}

/** @access private */
function selectItem() {

}