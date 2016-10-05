module app.directives {
    
    'use strict';
    import SelectController = app.controllers.SelectController;

    angular.module("ShareDemo").directive("itemSelection", () => ({
        restrict: 'E',
        templateUrl: "/app/views/SelectionList.html",
        controller: SelectController,
        controllerAs: "selectCtrl"
    }));
}