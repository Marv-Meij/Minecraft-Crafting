var app = angular.module('minecraft-crafting.controllers.items', ['ngAnimate']);

/*********************************************************************
 * ItemsCtrl
 *********************************************************************/
app.controller('ItemsCtrl', function ($scope, $state, $ionicScrollDelegate, $window) {

	var basic = $scope.model = {
		showDelete: false,
		showMove: false,
		basicItems: [
			{
				'title': 'Wooden planks',
				'image': 'img/items/img_wood.png',
				'buildImage': 'img/items/craft_wood.gif',
				'icon': 'img/icons/img_wood_icon.png'
			},
			{
				'title': 'Stick',
				'image': 'img/items/img_stick.png',
				'buildImage': 'img/items/craft_stick.png',
				'icon': 'img/icons/img_stick_icon.png'
			},
			{
				'title': 'Torch',
				'image': 'img/items/img_torch.png',
				'buildImage': 'img/items/craft_torch.png',
				'icon': 'img/icons/img_torch_icon.png'
			},
			{
				'title': 'Crafting Table',
				'image': 'img/items/img_workbench.png',
				'buildImage': 'img/items/craft_workbench.png',
				'icon': 'img/icons/img_workbench_icon.png'
			},
			{
				'title': 'Chest',
				'image': 'img/items/img_chest.png',
				'buildImage': 'img/items/craft_chest.png',
				'icon': 'img/icons/img_chest_icon.png'
			},
			{
				'title': 'Furnace',
				'image': 'img/items/img_furnace.png',
				'buildImage': 'img/items/craft_furnace.png',
				'icon': 'img/icons/img_furnace_icon.png'
			},
			{
				'title': 'Ladder',
				'image': 'img/items/img_ladder.png',
				'buildImage': 'img/items/craft_ladder.png',
				'icon': 'img/icons/img_ladder_icon.png'
			},
			{
				'title': 'Fence',
				'image': 'img/items/img_fence.png',
				'buildImage': 'img/items/craft_fence.gif',
				'icon': 'img/icons/img_fence_icon.png'

			},
			{
				'title': 'Boat',
				'image': 'img/items/img_boat.png',
				'buildImage': 'img/items/craft_boat.png',
				'icon': 'img/icons/img_boat_icon.png'
			},
			{
				'title': 'Wooden Slabs',
				'image': 'img/items/img_woodenslabs.png',
				'buildImage': 'img/items/craft_woodenslabs.gif',
				'icon': 'img/icons/img_woodenslabs_icon.png'
			},
			{
				'title': 'Stone Slabs',
				'image': 'img/items/img_stoneslabs.png',
				'buildImage': 'img/items/craft_stoneslabs.gif',
				'icon': 'img/icons/img_stoneslabs_icon.png'
			},
			{
				'title': 'Sign',
				'image': 'img/items/img_sign.png',
				'buildImage': 'img/items/craft_sign.png',
				'icon': 'img/icons/img_sign_icon.png'
			},
			{
				'title': 'Doors',
				'image': 'img/items/img_doors.png',
				'buildImage': 'img/items/craft_doors.gif',
				'icon': 'img/icons/img_doors_icon.png'
			},
			{
				'title': 'Painting',
				'image': 'img/items/img_painting.png',
				'buildImage': 'img/items/craft_painting.png',
				'icon': 'img/icons/img_painting_icon.png'
			},
			{
				'title': 'Bed',
				'image': 'img/items/img_bed.png',
				'buildImage': 'img/items/craft_bed.png',
				'icon': 'img/icons/img_bed_icon.png'
			}
		]
	};

	$scope.model.tools = [];

	var tools = $scope.model.tools = {
		showDelete: false,
		showMove: false,
		basicTools: [
			{
				'title': 'Pickaxe',
				'image': 'img/items/img_pickaxes.png',
				'buildImage': 'img/items/craft_pickaxes.gif',
				'icon': 'img/icons/img_pickaxes_icon.png'
			},
			{
				'title': 'Shovels',
				'image': 'img/items/img_shovels.png',
				'buildImage': 'img/items/craft_shovels.gif',
				'icon': 'img/icons/img_shovels_icon.png'
			},
			{
				'title': 'Axes',
				'image': 'img/items/img_axes.png',
				'buildImage': 'img/items/craft_axes.gif',
				'icon': 'img/icons/img_axes_icon.png'
			},
			{
				'title': 'Hoes',
				'image': 'img/items/img_hoes.png',
				'buildImage': 'img/items/craft_hoes.gif',
				'icon': 'img/icons/img_hoes_icon.png'
			},
			{
				'title': 'Fishing Rod',
				'image': 'img/items/img_fishingrod.png',
				'buildImage': 'img/items/craft_fishingrod.png',
				'icon': 'img/icons/img_fishingrod_icon.png'
			},
			{
				'title': 'Flint and Steel',
				'image': 'img/items/img_flintandsteel.png',
				'buildImage': 'img/items/craft_flintandsteel.png',
				'icon': 'img/icons/img_flintandsteel_icon.png'
			},
			{
				'title': 'Shears',
				'image': 'img/items/img_shears.png',
				'buildImage': 'img/items/craft_shears.png',
				'icon': 'img/icons/img_shears_icon.png'
			},
			{
				'title': 'Bucket',
				'image': 'img/items/img_bucket.png',
				'buildImage': 'img/items/craft_bucket.png',
				'icon': 'img/icons/img_bucket_icon.png'
			},
			{
				'title': 'Clock',
				'image': 'img/items/img_clock.png',
				'buildImage': 'img/items/craft_clock.png',
				'icon': 'img/icons/img_clock_icon.png'
			},
			{
				'title': 'Compass',
				'image': 'img/items/img_compass.png',
				'buildImage': 'img/items/craft_compass.png',
				'icon': 'img/icons/img_compass_icon.png'
			},
			{
				'title': 'Map',
				'image': 'img/items/img_map.png',
				'buildImage': 'img/items/craft_map.png',
				'icon': 'img/icons/img_map_icon.png'
			}
		]
	};

	$scope.model.blocks = [];

	var blocks = $scope.model.blocks = {
		showDelete: false,
		showMove: false,
		basicBlocks: [
			{
				'title': 'Glowstone',
				'image': 'img/items/img_glowstone.png',
				'buildImage': 'img/items/craft_glowstone.png',
				'icon': 'img/icons/img_glowstone_icon.png'
			},
			{
				'title': 'Snow Block',
				'image': 'img/items/img_snowblock.png',
				'buildImage': 'img/items/craft_snowblock.png',
				'icon': 'img/icons/img_snowblock_icon.png'
			},
			{
				'title': 'Stone Brick',
				'image': 'img/items/img_stonebrick.png',
				'buildImage': 'img/items/craft_stonebrick.png',
				'icon': 'img/icons/img_stonebrick_icon.png'
			},
			{
				'title': 'Brick',
				'image': 'img/items/img_brick.png',
				'buildImage': 'img/items/craft_brick.png',
				'icon': 'img/icons/img_brick_icon.png'
			},
			{
				'title': 'Sandstone',
				'image': 'img/items/img_sandstone.png',
				'buildImage': 'img/items/craft_sandstone.png',
				'icon': 'img/icons/img_sandstone_icon.png'
			},
			{
				'title': 'Smooth Sandstone',
				'image': 'img/items/img_smoothsandstone.png',
				'buildImage': 'img/items/craft_smoothsandstone.png',
				'icon': 'img/icons/img_smoothsandstone_icon.png'
			},
			{
				'title': 'Decorative Sandstone',
				'image': 'img/items/img_decorativesandstone.png',
				'buildImage': 'img/items/craft_decorativesandstone.png',
				'icon': 'img/icons/img_decorativesandstone_icon.png'
			},
			{
				'title': 'Gold Block',
				'image': 'img/items/img_goldblock.png',
				'buildImage': 'img/items/craft_goldblock.png',
				'icon': 'img/icons/img_goldblock_icon.png'
			},
			{
				'title': 'Diamond Block',
				'image': 'img/items/img_diamondblock.png',
				'buildImage': 'img/items/craft_diamondblock.png',
				'icon': 'img/icons/img_diamondblock_icon.png'
			},
			{
				'title': 'Iron Block',
				'image': 'img/items/img_ironblock.png',
				'buildImage': 'img/items/craft_ironblock.png',
				'icon': 'img/icons/img_ironblock_icon.png'
			},
			{
				'title': 'Lapis Lazuli Block',
				'image': 'img/items/img_lapislazuliblock.png',
				'buildImage': 'img/items/craft_lapislazuliblock.png',
				'icon': 'img/icons/img_lapislazuliblock_icon.png'
			},
			{
				'title': 'Emerald Block',
				'image': 'img/items/img_emeraldblock.png',
				'buildImage': 'img/items/craft_emeraldblock.png',
				'icon': 'img/icons/img_emeraldblock_icon.png'
			},
			{
				'title': 'Coal Block',
				'image': 'img/items/img_coalblock.png',
				'buildImage': 'img/items/craft_coalblock.png',
				'icon': 'img/icons/img_coalblock_icon.png'
			},
			{
				'title': 'Wool Block',
				'image': 'img/items/img_woolblock.png',
				'buildImage': 'img/items/craft_woolblock.png',
				'icon': 'img/icons/img_woolblock_icon.png'
			},
			{
				'title': 'Bookshelf',
				'image': 'img/items/img_bookshelf.png',
				'buildImage': 'img/items/craft_bookshelf.png',
				'icon': 'img/icons/img_bookshelf_icon.png'
			},
			{
				'title': 'Note Block',
				'image': 'img/items/img_noteblock.png',
				'buildImage': 'img/items/craft_noteblock.png',
				'icon': 'img/icons/img_noteblock_icon.png'
			},
			{
				'title': 'Clay Block',
				'image': 'img/items/img_clayblock.png',
				'buildImage': 'img/items/craft_clayblock.png',
				'icon': 'img/icons/img_clayblock_icon.png'
			},
			{
				'title': 'Jack-O-Lantern',
				'image': 'img/items/img_jack-o-lantern.png',
				'buildImage': 'img/items/craft_jack-o-lantern.png',
				'icon': 'img/icons/img_jack-o-lantern_icon.png'
			},
			{
				'title': 'TNT',
				'image': 'img/items/img_tnt.png',
				'buildImage': 'img/items/craft_tnt.png',
				'icon': 'img/icons/img_tnt_icon.png'
			},
			{
				'title': 'Wooden Stairs',
				'image': 'img/items/img_woodenstairs.png',
				'buildImage': 'img/items/craft_woodenstairs.gif',
				'icon': 'img/icons/img_woodenstairs_icon.png'
			},
			{
				'title': 'Stone Stairs',
				'image': 'img/items/img_stonestairs.png',
				'buildImage': 'img/items/craft_stonestairs.gif',
				'icon': 'img/icons/img_stonestairs_icon.png'
			},
			{
				'title': 'Cobblestone Walls',
				'image': 'img/items/img_cobblestonewalls.png',
				'buildImage': 'img/items/craft_cobblestonewalls.gif',
				'icon': 'img/icons/img_cobblestonewalls_icon.png'
			},
			{
				'title': 'Block of Redstone',
				'image': 'img/items/img_blockofredstone.png',
				'buildImage': 'img/items/craft_blockofredstone.png',
				'icon': 'img/icons/img_blockofredstone_icon.png'
			},
			{
				'title': 'Nether Brick',
				'image': 'img/items/img_netherbrick.png',
				'buildImage': 'img/items/craft_netherbrick.png',
				'icon': 'img/icons/img_netherbrick_icon.png'
			},
			{
				'title': 'Block of Quartz',
				'image': 'img/items/img_blockofquartz.png',
				'buildImage': 'img/items/craft_blockofquartz.png',
				'icon': 'img/icons/img_blockofquartz_icon.png'
			},
			{
				'title': 'Chiseled Quartz Block',
				'image': 'img/items/img_chiseledquartzblock.png',
				'buildImage': 'img/items/craft_chiseledquartzblock.png',
				'icon': 'img/icons/img_chiseledquartzblock_icon.png'
			},
			{
				'title': 'Pillar Quartz Block',
				'image': 'img/items/img_pillarquartzblock.png',
				'buildImage': 'img/items/craft_pillarquartzblock.png',
				'icon': 'img/icons/img_pillarquartzblock_icon.png'
			},
			{
				'title': 'Hay Bale',
				'image': 'img/items/img_haybale.png',
				'buildImage': 'img/items/craft_haybale.png',
				'icon': 'img/icons/img_haybale_icon.png'
			},
			{
				'title': 'Stained Clay',
				'image': 'img/items/img_stainedclay.png',
				'buildImage': 'img/items/craft_stainedclay.gif',
				'icon': 'img/icons/img_stainedclay_icon.png'
			},
			{
				'title': 'Stained Glass',
				'image': 'img/items/img_stainedglass.png',
				'buildImage': 'img/items/craft_stainedglass.gif',
				'icon': 'img/icons/img_stainedglass_icon.png'
			},
			{
				'title': 'Granite',
				'image': 'img/items/img_granite.png',
				'buildImage': 'img/items/craft_granite.png',
				'icon': 'img/icons/img_granite_icon.png'
			},
			{
				'title': 'Andesite',
				'image': 'img/items/img_andesite.png',
				'buildImage': 'img/items/craft_andesite.png',
				'icon': 'img/icons/img_andesite_icon.png'
			},
			{
				'title': 'Diorite',
				'image': 'img/items/img_diorite.png',
				'buildImage': 'img/items/craft_diorite.png',
				'icon': 'img/icons/img_diorite_icon.png'
			},
			{
				'title': 'Polished Granite',
				'image': 'img/items/img_polishedgranite.png',
				'buildImage': 'img/items/craft_polishedgranite.png',
				'icon': 'img/icons/img_polishedgranite_icon.png'
			},
			{
				'title': 'Polished Andesite',
				'image': 'img/items/img_polishedandesite.png',
				'buildImage': 'img/items/craft_polishedandesite.png',
				'icon': 'img/icons/img_polishedandesite_icon.png'
			},
			{
				'title': 'Polished Diorite',
				'image': 'img/items/img_polisheddiorite.png',
				'buildImage': 'img/items/craft_polisheddiorite.png',
				'icon': 'img/icons/img_polisheddiorite_icon.png'
			},
			{
				'title': 'Prismarine',
				'image': 'img/items/img_prismarine.png',
				'buildImage': 'img/items/craft_prismarine.png',
				'icon': 'img/icons/img_prismarine_icon.png'
			},
			{
				'title': 'Dark Prismarine',
				'image': 'img/items/img_darkprismarine.png',
				'buildImage': 'img/items/craft_darkprismarine.png',
				'icon': 'img/icons/img_darkprismarine_icon.png'
			},
			{
				'title': 'Sea Lantern',
				'image': 'img/items/img_sealantern.png',
				'buildImage': 'img/items/craft_sealantern.png',
				'icon': 'img/icons/img_sealantern_icon.png'
			},
			{
				'title': 'Coarse Dirt',
				'image': 'img/items/img_coarsedirt.png',
				'buildImage': 'img/items/craft_coarsedirt.png',
				'icon': 'img/icons/img_coarsedirt_icon.png'
			},
			{
				'title': 'Slime Block',
				'image': 'img/items/img_slimeblock.png',
				'buildImage': 'img/items/craft_slimeblock.png',
				'icon': 'img/icons/img_slimeblock_icon.png'
			},
			{
				'title': 'Moss Stone',
				'image': 'img/items/img_mossstone.png',
				'buildImage': 'img/items/craft_mossstone.png',
				'icon': 'img/icons/img_mossstone_icon.png'
			},
			{
				'title': 'Mossy Stone Brick',
				'image': 'img/items/img_mossystonebrick.png',
				'buildImage': 'img/items/craft_mossystonebrick.png',
				'icon': 'img/icons/img_mossystonebrick_icon.png'
			},
			{
				'title': 'Chiseled Stone Brick',
				'image': 'img/items/img_chiseledstonebrick.png',
				'buildImage': 'img/items/craft_chiseledstonebrick.png',
				'icon': 'img/icons/img_chiseledstonebrick_icon.png'
			},
			{
				'title': 'Red Sandstone',
				'image': 'img/items/img_redsandstone.png',
				'buildImage': 'img/items/craft_redsandstone.png',
				'icon': 'img/icons/img_redsandstone_icon.png'
			},
			{
				'title': 'Smooth Red Sandstone',
				'image': 'img/items/img_smoothredsandstone.png',
				'buildImage': 'img/items/craft_smoothredsandstone.png',
				'icon': 'img/icons/img_smoothredsandstone_icon.png'
			},
			{
				'title': 'Chiseled Red Sandstone',
				'image': 'img/items/img_chiseledredsandstone.png',
				'buildImage': 'img/items/craft_chiseledredsandstone.png',
				'icon': 'img/icons/img_chiseledredsandstone_icon.png'
			}
		]
	};

	$scope.onTap = function(name,imageBuild,image) {
		$scope.imageName = name;
		$scope.imageBuild = imageBuild;
		$scope.image = image;

		$ionicScrollDelegate.$getByHandle('handler').scrollBy(0, 1, true);

		$scope.onTap.called = true;
	};
});

app.directive("fadeInChange", function ($timeout) {
	return {
		restrict: "A",
		scope: {},
		link: function (scope, element, attrs) {
			element.on("load", function () {
				$timeout(function () {
					element.removeClass("ng-hide-fade");
					element.addClass("ng-show");
				}, 250);
			});
			attrs.$observe("ngSrc", function () {
				element.removeClass("ng-show");
				element.addClass("ng-hide-fade");
			});
		}
	}
});

app.directive('scrollWatch', function() {
	return {
		restrict: 'A',
		link: function($scope, elem, attr) {

			$(".topview").appendTo(".pane");
			var myEl = angular.element( document.querySelector( '.topview' ) );

			elem.bind('scroll', function(e) {
				if (e.detail.scrollTop >= 210 && $scope.onTap.called == true) {
					myEl.addClass('ng-show');
					myEl.addClass('topview2');
				} else {
					myEl.removeClass('ng-show');
					myEl.removeClass('topview2');
				}
			});
		}
	}  
});