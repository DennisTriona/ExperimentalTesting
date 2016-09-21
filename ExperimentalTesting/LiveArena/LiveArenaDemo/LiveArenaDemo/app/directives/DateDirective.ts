namespace app {
    angular.module("ShareDemo").directive("dateNow", ["$filter", $filter => ({
        link: ($scope, $element, $attrs) => {
                $element.text($filter("date")(new Date(), $attrs.dateNow));
            }
        })
    ]);
}