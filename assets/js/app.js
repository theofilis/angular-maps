'use strict';

var app = angular.module('app', ['ng',
	'formly', 'google-maps']);

app.controller("MyCtrl", function ($scope) {
	$scope.formData = {};
	$scope.formFields = [
		{
			key: 'latitude',
			default: 45,
			type: 'number',
			label: 'Latitude',
			placeholder: '45',
			required: true,
			disabled: false //default: false
    },
		{
			key: 'longitude',
			type: 'number',
			label: 'Longitude',
			required: true,
			default: -73,
			placeholder: '-73',
			disabled: false
    }];

	$scope.formOptions = {
		uniqueFormId: 'myFormId',
		hideSubmit: false,
		submitCopy: 'Locate'
	};

	$scope.onSubmit = function () {
		console.log('form submitted:', $scope.formData);
		
		$scope.map = {
			center: {
				latitude: $scope.formData.latitude,
				longitude: $scope.formData.longitude
			},
			zoom: 8
		};
	};


	$scope.map = {
		center: {
			latitude: 45,
			longitude: -73
		},
		zoom: 8
	};
});