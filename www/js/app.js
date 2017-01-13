var app = angular.module('minecraft-crafting', [
	'ionic',
	'jett.ionic.scroll.sista',
	'minecraft-crafting.controllers'
]);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {

		// Hide the accessory bar by default
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}
		// Color the iOS status bar text to white
		if (window.StatusBar) {
			$cordovaStatusbar.overlaysWebView(true);
			$cordovaStatusbar.style(0); //Light
		}
	});
});

app.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

	$ionicConfigProvider.scrolling.jsScrolling(true);

	$stateProvider
		.state('items', {
			url: '/items',
			templateUrl: 'templates/items.html',
			controller: 'ItemsCtrl'
		})
	;

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/items');
});