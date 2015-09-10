require('./style.less');

import Dispatcher from './dispatcher';
import secondNav from '../../modules/secondNav';
import secondContentModule from '../../modules/secondContentModule';

export default {
    Name: 'SecondSandbox',

    PageTemplateId: 'secondPageTemplate',

    LayoutClass: 'clearfix',
    Dispatcher,
    regions: {
        module3Region: '#module3Region',
        module4Region: '#module4Region',
        module5Region: '#module5Region'
    },

    Modules: [
        {
            Name: 'Module3',
            Descriptions: 'Тестовый модуль №3',
            InsertionPoint: 'module3Region',
            Instance: secondNav
        },
        {
            Name: 'Content module',
            Descriptions: 'Тестовый модуль №4',
            InsertionPoint: 'module4Region',
            Instance: secondContentModule
        }
    ]
};
