import module3 from '../../modules/module3';
import module4 from '../../modules/module4';
import module5 from '../../modules/module5';

export default {
    Name: 'SecondSandbox',

    PageTemplateId: 'secondPageTemplate',

    LayoutClass: 'clearfix',

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
            Instance: module3
        },
        {
            Name: 'Module4',
            Descriptions: 'Тестовый модуль №4',
            InsertionPoint: 'module4Region',
            Instance: module4
        },
        {
            Name: 'Module5',
            Descriptions: 'Тестовый модуль №4',
            InsertionPoint: 'module5Region',
            Instance: module5
        }
    ]
};
