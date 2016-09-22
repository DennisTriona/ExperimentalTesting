namespace app.directives {
    //A directive that takes the ng's filter service to make a custom filter
    angular.module("ShareDemo").directive("dateNow", ["$filter", $filter => ({
        // The directives link function is filtering with date and returns dateNow
        link: ($scope, $element, $attrs) => {
                $element.text($filter("date")(new Date(), $attrs.dateNow));
            }
        })
    ]);
}