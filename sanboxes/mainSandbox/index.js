import module1 from '../../modules/module1';
import module2 from '../../modules/module2';

export default {
    Name: 'MainSandbox',

    PageTemplateId: 'mainPageTemplate',

    LayoutClass: 'clearfix',
    regions: {
        module1Region: '#module1Region',
        module2Region: '#module2Region'
    },

    Modules: [
        {
            Name: 'Module1',
            Descriptions: 'Тестовый модуль №1',
            InsertionPoint: 'module1Region',
            Instance: module1
        },
        {
            Name: 'Module2',
            Descriptions: 'Тестовый модуль №1',
            InsertionPoint: 'module2Region',
            Instance: module2
        }
    ]
};
