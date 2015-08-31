(function (mainModule) {

    'use strict';

    mainModule.MainSandbox = {
        Name: 'MainSandbox',

        PageTemplateId: 'mainPageTemplate',

        LayoutClass: 'clearfix',

        regions: {
            searchLine: '#searchLine',
            expertOpinionWidget: '#expertOpinionWidget',
            checkRosterFtsWidget: '#checkRosterFtsWidget',
            departmentalInspectionsWidget: '#departmentalInspections',
            reportsWidget: '#reportsWidget'
        },

        Modules: [
            {
                Name: 'SearchLine',
                Descriptions: 'SearchLine',
                InsertionPoint: 'searchLine'
            },
            {
                Name: 'ExpertOpinionModule',
                Descriptions: 'ExpertOpinion',
                InsertionPoint: 'expertOpinionWidget'
            },
            {
                Name: 'CheckKontragentWidgetModule',
                Descriptions: 'CheckKontragentWidgetModule',
                InsertionPoint: 'checkRosterFtsWidget',
                LayoutRegion: 'checkRosterFtsWidget'
            },
            {
                Name: 'DepartmentalInspectionsWidgetModule',
                Descriptions: 'DepartmentalInspectionsWidgetModule',
                InsertionPoint: 'departmentalInspections',
                LayoutRegion: 'departmentalInspections'
            },
            {
                Name: 'ReportsModule',
                Descriptions: 'Reports',
                InsertionPoint: 'reportsWidget'
            },
            {
                Name: 'ConsultantDialog',
                Descriptions: 'ConsultantDialog',
                InsertionPoint: ''
            },
            {
                Name: 'WebinarDialog',
                Descriptions: 'WebinarDialog',
                InsertionPoint: ''
            }
        ]
    };

})(window.TestApp.Sandboxes.Descriptions);