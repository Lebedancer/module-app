require('./style.less');

import appStart from './main/runApp';

$(function() {
    if (appStart) {
        appStart();
    }
});
