define(['angular','common/module-name'], function (angular,moduleName) {

    return angular.module(moduleName).directive("cardLayout", function ($compile) {
        return {
            scope: {headerCss: "@", bodyCss: "@", cardCss: '@'},
            transclude: {
                'header1': '?headerSection',
                'body1': '?bodySection'
            },
            templateUrl: 'js/common/card-layout/card-layout.html',
            link: function (scope, iElem, iAttrs, ctrl, transcludeFn) {
            }
        };
    });
});

