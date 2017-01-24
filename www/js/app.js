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
	$ionicConfigProvider.tabs.position("bottom");

	$stateProvider

		.state('items', {
			url: "/items",
			abstract: false,
			templateUrl: "templates/items.html"
		})

		.state('items.crafting', {
			url: "/crafting",
			cache: false,
			views: {
				'items-crafting': {
					templateUrl: 'templates/items/items-crafting.html',
					controller: 'CraftingCtrl'
				}
			}
		})

		.state('items.brewing', {
			url: "/brewing",
			cache: false,
			views: {
				'items-brewing': {
					templateUrl: 'templates/items/items-brewing.html',
					controller: 'BrewingCtrl'
				}
			}
		})

		.state('items.other', {
			url: "/other",
			cache: false,
			views: {
				'items-other': {
					templateUrl: 'templates/items/items-other.html',
					controller: 'OtherCtrl'
				}
			}
		})
	;

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/items');
});