export default function() {
    var cash = {};
    var load = function(templateBundleName, cb) {
            if (cash[templateBundleName]) return cb && cb(cash[templateBundleName]);

            var url = mainModule.Options.Urls.other.templateBundle + '?templateBundle=' + templateBundleName;
            $.get(url)
                .done(function(res) {
                    afterLoadBundle(res, templateBundleName);
                    cb && cb(res);
                })
                .fail(function() {
                    throw 'template bundle are not loaded';
                });
        },
        afterLoadBundle = function(res, templateBundleName) {
            cash[templateBundleName] = true;
            $('#pageTemplateSection').append(res);
        };

    return {
        load: load
    };
}();
