require('./style.less');

$.fn.navigation = function() {

    var $el = this;
    var activeClass = 'active';

    initialize();

    return this;

    /** @access private */
    function initialize() {
        bindEvents.call(this);
    }

    /** @access private */
    function bindEvents() {
        $el.on('click', 'a', onClickItem)
    }

    /** @access private */
    function onClickItem(e) {
        var $curEl = $(e.currentTarget);

        $el.find('.' + activeClass).removeClass(activeClass);
        $curEl.addClass(activeClass);
    }
};
