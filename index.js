require('./style.css');

import appStart from './main/runApp';

$(function() {
    if (appStart) {
        appStart();
    }
});
