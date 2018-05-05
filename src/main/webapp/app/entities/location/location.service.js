(function() {
    'use strict';
    angular
        .module('vtravelApp')
        .factory('Location', Location);

    Location.$inject = ['$resource'];

    function Location ($resource) {
        var resourceUrl =  'api/locations/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' },

            //
            'findall':{
                method: 'GET',
                url: 'api/location/findall',
                isArray: true,
                transformResponse: function(data){
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            }
        });
    }
})();