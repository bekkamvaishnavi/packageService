'use strict';

angular.module('vkApp')    
    .factory('AllPackages', function ($resource, GE) {
        var serviceUrl = GE.serviceUrl + 'packages/all';        
        return $resource(serviceUrl, {}, {
            'read': {
                method: 'GET'
            }
        });
    })
.factory('packageDetails', function ($resource, GE,Validate) {
	var serviceUrl = GE.serviceUrl+'packages/package/:packageId/details';
    return $resource(serviceUrl, {}, {
        'read': {
            method: 'GET'
        }
    });
})
.factory('SavePackageDetails', function ($resource, GE,Validate) {
	var serviceUrl = GE.serviceUrl+'packages/package/details';
    return $resource(serviceUrl, {}, {
        'read': {
            method: 'PUT'
        }
    });
})
.factory('JobStatus', function ($resource, GE,Validate) {
	var serviceUrl = GE.serviceUrl+'packages/package/jobstatus';
    return $resource(serviceUrl, {}, {
        'read': {
            method: 'GET'
        }
    });
})
.factory('AvailableValves', function ($resource, GE,Validate) {
	var serviceUrl = GE.serviceUrl+'packages/package/getValves';
    return $resource(serviceUrl, {}, {
        'read': {
            method: 'GET'
        }
    });
})

;

