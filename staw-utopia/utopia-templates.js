angular.module('utopia').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('fleet-builder.html',
    "<div class=\"fleet-open-export\" ng-show=\"!searchOptions.showExport\">\r" +
    "\n" +
    "	<button class=\"fleet-search-bigger\" ng-click=\"searchOptions.showExport = true\"><i class=\"fa fa-chevron-left\"></i> Export</button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"fleet-open-search\" ng-show=\"searchOptions.columns < 1\">\r" +
    "\n" +
    "	<button class=\"fleet-search-bigger\" ng-click=\"searchOptions.columns = 1\">Search <i class=\"fa fa-chevron-right\"></i></button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"fleet-ship-container\" ng-repeat=\"ship in fleet.ships track by $index\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"fleet-ship-top\">\r" +
    "\n" +
    "		<div class=\"fleet-ship-top-left\" ng-class=\"{'fleet-ship-top-left-first':$first}\"></div>\r" +
    "\n" +
    "		<div class=\"fleet-ship-title font-staw\" ng-class=\"{'fleet-ship-title-long': ship.name.length >= 18, 'fleet-ship-title-longer': ship.name.length >= 21}\">{{ ship.name }}</div>\r" +
    "\n" +
    "		<div class=\"fleet-ship-top-spacer\"></div>\r" +
    "\n" +
    "		<div class=\"fleet-ship-title fleet-ship-cost font-staw\">{{ getTotalCost(ship,fleet) }} SP</div>\r" +
    "\n" +
    "		<div class=\"fleet-ship-top-spacer\"></div>\r" +
    "\n" +
    "		<div class=\"fleet-ship-top-spacer\"></div>\r" +
    "\n" +
    "		<div class=\"toggle-button-value pull-left\" ng-class=\"{'toggle-button-value-active': !ship.hideEmptySlots}\"></div>\r" +
    "\n" +
    "		<div class=\"fleet-ship-title fleet-ship-cost font-staw\">\r" +
    "\n" +
    "			<button class=\"title-button\" ng-click=\"ship.hideEmptySlots = !ship.hideEmptySlots\">Show Empty Slots</button>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "		<div class=\"fleet-ship-top-right\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "	<div class=\"fleet-ship-middle\">\r" +
    "\n" +
    "		<div class=\"fleet-ship-left\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<div class=\"fleet-ship-inner\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "			<div class=\"card-container\" ng-class=\"{'zoom':zoom}\">\r" +
    "\n" +
    "				<card card=\"ship\" fleet=\"fleet\" drag-store=\"dragStore\"></card>\r" +
    "\n" +
    "			</div><!--\r" +
    "\n" +
    "			Stupid whitespace breaks card alignment\r" +
    "\n" +
    "		 --><div class=\"card-container\" ng-class=\"{'zoom':zoom}\">\r" +
    "\n" +
    "				<card card=\"ship.classData\" ship=\"ship\" fleet=\"fleet\" drag-store=\"dragStore\"></card>\r" +
    "\n" +
    "			</div><!--\r" +
    "\n" +
    "		 --><div class=\"card-container\" ng-class=\"{'zoom':zoom}\" ng-show=\"!ship.squadron && fleet.resource && (fleet.resource|valueOf:'showShipResourceSlot':ship:fleet)\" droppable can-drop=\"$item.type == fleet.resource.slotType\" drop=\"setShipResource(fleet,ship,$item)\" drag-store=\"dragStore\">\r" +
    "\n" +
    "				<div class=\"card-outer card-drop-target font-staw\" ng-click=\"setSearchTypes([fleet.resource.slotType])\">\r" +
    "\n" +
    "					<div class=\"card-drop-target-inner\">\r" +
    "\n" +
    "						<div class=\"card-drop-target-type\">\r" +
    "\n" +
    "							<i class=\"fs fs-{{fleet.resource.slotType}}\"></i><br/>{{fleet.resource.slotType|removeDashes}}\r" +
    "\n" +
    "						</div>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<card card=\"ship.resource\" ship=\"ship\" fleet=\"fleet\" drag-store=\"dragStore\"></card>\r" +
    "\n" +
    "			</div><!--\r" +
    "\n" +
    "\r" +
    "\n" +
    "		 --><div class=\"card-container\" ng-class=\"{'zoom':zoom}\" ng-hide=\"ship.squadron\" droppable can-drop=\"$item.type == 'captain' && $item != ship.captain\" drop=\"setShipCaptain(fleet,ship,$item)\" drag-store=\"dragStore\">\r" +
    "\n" +
    "				<div class=\"card-outer card-drop-target font-staw\" ng-click=\"setSearchTypes(['captain'])\">\r" +
    "\n" +
    "					<div class=\"card-drop-target-inner\">\r" +
    "\n" +
    "						<div class=\"card-drop-target-type\">\r" +
    "\n" +
    "							<i class=\"fs fs-captain\"></i><br/>Captain\r" +
    "\n" +
    "						</div>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<card card=\"ship.captain\" ship=\"ship\" fleet=\"fleet\" drag-store=\"dragStore\"></card>\r" +
    "\n" +
    "			</div><!--\r" +
    "\n" +
    "\r" +
    "\n" +
    "		 --><div class=\"card-container\" ng-class=\"{'zoom':zoom}\" ng-hide=\"!ship.admiral && ( ship.squadron || ship.hideEmptySlots || fleetHasAdmiral(fleet) )\"\r" +
    "\n" +
    "				droppable can-drop=\"$item.type == 'admiral' && $item != ship.admiral\" drop=\"setShipAdmiral(fleet,ship,$item)\" drag-store=\"dragStore\">\r" +
    "\n" +
    "				<div class=\"card-outer card-drop-target font-staw\" ng-click=\"setSearchTypes(['admiral'])\">\r" +
    "\n" +
    "					<div class=\"card-drop-target-inner\">\r" +
    "\n" +
    "						<div class=\"card-drop-target-type\">\r" +
    "\n" +
    "							<i class=\"fs fs-admiral\"></i><br/>Admiral\r" +
    "\n" +
    "						</div>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<card card=\"ship.admiral\" ship=\"ship\" fleet=\"fleet\" drag-store=\"dragStore\"></card>\r" +
    "\n" +
    "			</div><!--\r" +
    "\n" +
    "\r" +
    "\n" +
    "			--><div class=\"card-container\" ng-class=\"{'zoom':zoom}\" ng-hide=\"!ship.ambassador && ( ship.squadron || ship.hideEmptySlots || fleetHasAmbassador(fleet) )\"\r" +
    "\n" +
    "				 droppable can-drop=\"$item.type == 'ambassador' && $item != ship.ambassador\" drop=\"setShipAmbassador(fleet,ship,$item)\" drag-store=\"dragStore\">\r" +
    "\n" +
    "				 <div class=\"card-outer card-drop-target font-staw\" ng-click=\"setSearchTypes(['ambassador'])\">\r" +
    "\n" +
    "					 <div class=\"card-drop-target-inner\">\r" +
    "\n" +
    "						 <div class=\"card-drop-target-type\">\r" +
    "\n" +
    "							 <i class=\"fs fs-ambassador\"></i><br/>Ambassador\r" +
    "\n" +
    "						 </div>\r" +
    "\n" +
    "					 </div>\r" +
    "\n" +
    "				 </div>\r" +
    "\n" +
    "				 <card card=\"ship.ambassador\" ship=\"ship\" fleet=\"fleet\" drag-store=\"dragStore\"></card>\r" +
    "\n" +
    "			 </div>\r" +
    "\n" +
    "			 <!--\r" +
    "\n" +
    "			--><div class=\"card-container\" ng-class=\"{'zoom':zoom}\" ng-hide=\"!ship.construction && ( ship.squadron || ship.hideEmptySlots )\"\r" +
    "\n" +
    "			droppable can-drop=\"$item.type == 'starship_construction' && $item != ship.starship_construction\" drop=\"setShipConstruction(fleet,ship,$item)\" drag-store=\"dragStore\">\r" +
    "\n" +
    "			<div class=\"card-outer card-drop-target font-staw\" ng-click=\"setSearchTypes(['starship_construction'])\">\r" +
    "\n" +
    "				<div class=\"card-drop-target-inner\">\r" +
    "\n" +
    "					<div class=\"card-drop-target-type\">\r" +
    "\n" +
    "						<i class=\"fs fs-construction\"></i><br/>Starship Construction\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<card card=\"ship.construction\" ship=\"ship\" fleet=\"fleet\" drag-store=\"dragStore\"></card>\r" +
    "\n" +
    "		</div><!--\r" +
    "\n" +
    "		 \r" +
    "\n" +
    "		--><div class=\"card-container\" ng-class=\"{'zoom':zoom}\" ng-mouseenter=\"hover = true\" ng-mouseleave=\"hover = false\"\r" +
    "\n" +
    "				ng-repeat=\"upgradeSlot in ship|upgradeSlots\" ng-hide=\"!upgradeSlot.occupant && (ship.hideEmptySlots || (upgradeSlot|valueOf:'hide':ship:fleet))\"\r" +
    "\n" +
    "				droppable can-drop=\"isUpgradeCompatible($item, upgradeSlot, ship, fleet)\" drop=\"setUpgrade(fleet,ship,upgradeSlot,$item)\" drag-store=\"dragStore\">\r" +
    "\n" +
    "				<div class=\"card-outer card-drop-target font-staw\" ng-click=\"setSearchTypes(upgradeSlot.type)\">\r" +
    "\n" +
    "					<div class=\"card-drop-target-title\" ng-class=\"{'card-drop-target-title-hover':hover || upgradeSlot.occupant == dragStore.item}\" ng-show=\"upgradeSlot.source && upgradeSlot.source != 'ship'\">{{upgradeSlot.source}}<div ng-show=\"upgradeSlot.rules\">{{upgradeSlot.rules}}</div></div>\r" +
    "\n" +
    "					<div class=\"card-drop-target-inner\">\r" +
    "\n" +
    "						<div class=\"card-drop-target-type\" ng-repeat=\"type in upgradeSlot|valueOf:'type':ship:fleet\">\r" +
    "\n" +
    "							<i class=\"fs fs-{{type}}\"></i><br/>{{type|removeDashes}}\r" +
    "\n" +
    "						</div>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<div class=\"card-drop-target-subtitle\">{{upgradeSlot|valueOf:'show':ship:fleet}}</div>\r" +
    "\n" +
    "				<card card=\"upgradeSlot.occupant\" ship=\"ship\" fleet=\"fleet\" drag-store=\"dragStore\"></card>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"fleet-ship-bottom\" ng-show=\"$last && searchOptions.columns < 1 && !fleet.resource\">\r" +
    "\n" +
    "		<div class=\"fleet-ship-bottom-left\" ng-class=\"{'fleet-ship-bottom-left-long': fleet.ships.length > 0 || fleet.resource}\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"fleet-ship-container\" ng-hide=\"loading || ( searchOptions.columns < 1 && !fleet.resource )\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"fleet-ship-top\">\r" +
    "\n" +
    "		<div class=\"fleet-ship-top-left\" ng-class=\"{'fleet-ship-top-left-first': fleet.ships.length == 0}\"></div>\r" +
    "\n" +
    "		<div class=\"fleet-ship-title font-staw\">Fleet Total</div>\r" +
    "\n" +
    "		<div class=\"fleet-ship-top-spacer\"></div>\r" +
    "\n" +
    "		<div class=\"fleet-ship-title fleet-ship-cost font-staw\">{{ getFleetCost(fleet) }} SP</div>\r" +
    "\n" +
    "		<div class=\"fleet-ship-top-right\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"fleet-ship-middle\">\r" +
    "\n" +
    "		<div class=\"fleet-ship-left\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<div class=\"fleet-ship-inner\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "			<div class=\"card-container\" ng-class=\"{'zoom':zoom}\" ng-hide=\"searchOptions.columns < 1\">\r" +
    "\n" +
    "				<div class=\"card-outer card-drop-target font-staw\" ng-click=\"setSearchTypes(['ship'])\"\r" +
    "\n" +
    "					droppable can-drop=\"$item.type == 'ship'\" drop=\"addFleetShip(fleet,$item)\" drag-store=\"dragStore\">\r" +
    "\n" +
    "					<div class=\"card-drop-target-title\" ng-if=\"!isMobile\">Click to search this card type</div>\r" +
    "\n" +
    "					<div class=\"card-drop-target-title\" ng-if=\"isMobile\">Tap to search this card type</div>\r" +
    "\n" +
    "					<div class=\"card-drop-target-inner\">\r" +
    "\n" +
    "						<div class=\"card-drop-target-type\">\r" +
    "\n" +
    "							<i class=\"fs fs-ship\"></i><br/>Ship\r" +
    "\n" +
    "						</div>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "					<div ng-show=\"!isMobile\" class=\"card-drop-target-subtitle\">Drag here to add to fleet</div>\r" +
    "\n" +
    "					<div ng-show=\"isMobile && (!dragStore.item || dragStore.item.type != 'ship')\" class=\"card-drop-target-subtitle\">Tap a ship card to select it</div>\r" +
    "\n" +
    "					<div ng-show=\"isMobile && dragStore.item && dragStore.item.type == 'ship'\" class=\"card-drop-target-subtitle\">Tap here to add selected ship to fleet</div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "			</div><!--\r" +
    "\n" +
    "\r" +
    "\n" +
    "			--><div class=\"card-container\" ng-class=\"{'zoom':zoom}\" droppable can-drop=\"$item.type == 'resource' && $item != fleet.resource\" drop=\"setFleetResource(fleet,$item)\" drag-store=\"dragStore\">\r" +
    "\n" +
    "				<div class=\"card-outer card-drop-target font-staw\" ng-click=\"setSearchTypes(['resource'])\">\r" +
    "\n" +
    "					<div class=\"card-drop-target-title\"></div>\r" +
    "\n" +
    "					<div class=\"card-drop-target-inner\">\r" +
    "\n" +
    "						<div class=\"card-drop-target-type\">\r" +
    "\n" +
    "							<i class=\"fs fs-resource\"></i><br/>Resource\r" +
    "\n" +
    "						</div>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "					<div class=\"card-drop-target-subtitle\"></div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<card card=\"fleet.resource\" ship=\"ship\" fleet=\"fleet\" drag-store=\"dragStore\"></card>\r" +
    "\n" +
    "			</div><!--\r" +
    "\n" +
    "\r" +
    "\n" +
    "			--><div class=\"card-container\" ng-class=\"{'zoom':zoom}\" ng-repeat=\"upgradeSlot in fleet.resource.upgradeSlots\"\r" +
    "\n" +
    "				droppable can-drop=\"isUpgradeCompatible($item, upgradeSlot) && $item != upgradeSlot.occupant\" drop=\"setUpgrade(fleet,fleet.resource,upgradeSlot,$item)\" drag-store=\"dragStore\">\r" +
    "\n" +
    "				<div class=\"card-outer card-drop-target font-staw\" ng-click=\"setSearchTypes(upgradeSlot.type)\">\r" +
    "\n" +
    "					<div class=\"card-drop-target-title\">{{upgradeSlot.source}}<div ng-show=\"upgradeSlot.rules\">{{upgradeSlot.rules}}</div></div>\r" +
    "\n" +
    "					<div class=\"card-drop-target-inner\">\r" +
    "\n" +
    "						<div class=\"card-drop-target-type\" ng-repeat=\"type in upgradeSlot.type\">\r" +
    "\n" +
    "							<i class=\"fs fs-{{type}}\"></i><br/>{{type|removeDashes}}\r" +
    "\n" +
    "						</div>\r" +
    "\n" +
    "					</div>\r" +
    "\n" +
    "					<div class=\"card-drop-target-subtitle\"></div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "				<card card=\"upgradeSlot.occupant\" ship=\"ship\" fleet=\"fleet\" drag-store=\"dragStore\"></card>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"fleet-ship-bottom\">\r" +
    "\n" +
    "		<div class=\"fleet-ship-bottom-left fleet-ship-bottom-left-long\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('fleet-export.html',
    "<div class=\"fleet-close-export\" ng-show=\"searchOptions.showExport\">\r" +
    "\n" +
    "	<button class=\"fleet-search-bigger\" ng-click=\"searchOptions.showExport = false\"><i class=\"fa fa-chevron-right\"></i> Export</button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"export-container\">\r" +
    "\n" +
    "	<div class=\"u-search-header\"><div class=\"u-search-header-text\">Copy Text Listing</div></div>\r" +
    "\n" +
    "	<label class=\"export-option\"><input type=\"checkbox\" ng-model=\"showSetNames\">Include Expansion Names</label>\r" +
    "\n" +
    "	<!-- New checkbox here for the table-top simulator option. -->\r" +
    "\n" +
    "	<label class=\"export-option\"><input type=\"radio\" ng-model=\"exportType\" value=\"traditional\">Traditional Export</label>\r" +
    "\n" +
    "	<label class=\"export-option\"><input type=\"radio\" ng-model=\"exportType\" value=\"tts\">Table-Top Sim Export</label>\r" +
    "\n" +
    "	<!-- <label class=\"export-option\"><input type=\"radio\" ng-model=\"exportType\" value=\"fleetSheet\">Export JSON for Fleet Sheet</label> -->\r" +
    "\n" +
    "	<textarea class=\"export-text\" ng-model=\"fleetText\"></textarea>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('fleet-list.html',
    "<div class=\"container-fluid\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"row\" >\r" +
    "\n" +
    "		<div class=\"col-md-4\">\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('search-filter-group.html',
    "<div class=\"u-search-header\" ng-click=\"showContent = !showContent\"><div class=\"u-search-header-text\">{{title}}</div></div>\r" +
    "\n" +
    "<div class=\"u-search-content\" ng-show=\"showContent\" ng-transclude></div>"
  );


  $templateCache.put('search.html',
    "<div class=\"u-search\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"search-query-container\">\r" +
    "\n" +
    "		<input class=\"u-search-query\" ng-model=\"search.query\" placeholder=\"Search\" spellcheck=\"false\" autocorrect=\"off\">\r" +
    "\n" +
    "		<button ng-click=\"resetSearch()\">Reset</button>\r" +
    "\n" +
    "		<button ng-click=\"showAdvanced = !showAdvanced\">Advanced</button>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div ng-show=\"showAdvanced && (!dragStore.item || dragStore.source == 'search')\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<div class=\"u-search-size\">\r" +
    "\n" +
    "			<button class=\"u-search-smaller\" ng-click=\"modifySearchColumns(-1)\"><i class=\"fa fa-chevron-left\"></i></button>\r" +
    "\n" +
    "			<div class=\"u-search-size-text\">Resize Search Results</div>\r" +
    "\n" +
    "			<button class=\"u-search-bigger\" ng-click=\"modifySearchColumns(1)\"><i class=\"fa fa-chevron-right\"></i></button>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<search-filter-group title=\"Faction\" open>\r" +
    "\n" +
    "			<span ng-repeat=\"(faction,data) in search.factions\">\r" +
    "\n" +
    "				<label class=\"u-label\"><input type=\"checkbox\" ng-model=\"data.search\" > <div class=\"u-faction card-faction-{{faction}}\"></div> {{faction|removeDashes}}</label>\r" +
    "\n" +
    "			</span>\r" +
    "\n" +
    "		</search-filter-group>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<search-filter-group title=\"Type\" open>\r" +
    "\n" +
    "			<span class=\"u-search-type\" ng-repeat=\"(type,data) in search.types\">\r" +
    "\n" +
    "				<label class=\"u-label\"><input type=\"checkbox\" ng-model=\"data.search\" > <i class=\"fs fs-{{type}}\"></i> {{type|removeDashes}}</label>\r" +
    "\n" +
    "			</span>\r" +
    "\n" +
    "		</search-filter-group>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<search-filter-group title=\"Uniqueness\" open>\r" +
    "\n" +
    "			<span>\r" +
    "\n" +
    "				<label class=\"u-label\"><input type=\"checkbox\" ng-model=\"search.unique\"> <i class=\"fs fs-unique\"></i> Unique</label>\r" +
    "\n" +
    "			</span>\r" +
    "\n" +
    "			<span>\r" +
    "\n" +
    "				<label class=\"u-label\"><input type=\"checkbox\" ng-model=\"search.generic\"> <i class=\"fs\"></i> Generic</label>\r" +
    "\n" +
    "			</span>\r" +
    "\n" +
    "		</search-filter-group>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<search-filter-group title=\"Order By\" open>\r" +
    "\n" +
    "			<div class=\"u-search-filter-comment\">\r" +
    "\n" +
    "				Order results by <select ng-model=\"search.sortBy\" ng-options=\"sortable.value as sortable.name for sortable in sortables\"></select>\r" +
    "\n" +
    "				<select ng-model=\"search.ascending\"><option value=\"true\">Ascending</option><option value=\"false\">Descending</option></select>\r" +
    "\n" +
    "				<div class=\"u-order-default\" ng-show=\"search.sortBy != defaults.search.sortBy || search.ascending != defaults.search.ascending\">\r" +
    "\n" +
    "					<button ng-click=\"defaults.search.sortBy = search.sortBy; defaults.search.ascending = search.ascending\">Set as Default</button>\r" +
    "\n" +
    "					<div>Default order is saved in browser for future sessions.</div>\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		</search-filter-group>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<search-filter-group title=\"Custom Filter\" open>\r" +
    "\n" +
    "			<div class=\"u-search-filter-comment\" ng-init=\"search.filterOperator = '<'\">\r" +
    "\n" +
    "				<select ng-model=\"search.filterField\"><option value=\"\">- No Filter -</option><option ng-repeat=\"sortable in sortables\" value=\"{{sortable.value}}\">{{sortable.name}}</option></select>\r" +
    "\n" +
    "				<select ng-model=\"search.filterOperator\"><option value=\"<\">&lt;</option><option value=\"<=\">&lt;=</option><option value=\"=\">=</option><option value=\">=\">&gt;=</option><option value=\">\">&gt;</option></select>\r" +
    "\n" +
    "				<input ng-model=\"search.filterValue\" placeholder=\"Value\"></input>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"u-search-filter-comment\">\r" +
    "\n" +
    "				Filter On Maneuver: <select ng-model=\"search.maneuverType\"><option value=\"\">Any</option><option ng-repeat=\"maneuver in maneuvers\" value=\"{{maneuver.value}}\">{{maneuver.name}}</option></select>\r" +
    "\n" +
    "				<select ng-model=\"search.maneuverDifficulty\"><option value=\"\">Any</option><option ng-repeat=\"difficulty in difficulty_list\" value=\"{{difficulty.value}}\">{{difficulty.name}}</option></select>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		</search-filter-group>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<search-filter-group title=\"Owned Expansions\">\r" +
    "\n" +
    "			<div class=\"u-search-filter-comment\">\r" +
    "\n" +
    "				Expansion filter settings are stored in your browser for future sessions. Uncheck the expansions you don't own. New expansions are automatically checked. These settings are not affected by the \"Reset\" button.\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"u-search-filter-comment\">\r" +
    "\n" +
    "				<label class=\"u-label\"><input type=\"checkbox\" ng-model=\"search.ignoreSetsFilter\"> Temporarily show all cards</label>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<button ng-click=\"uncheckAllSets()\">Uncheck all sets</button>\r" +
    "\n" +
    "			<button ng-click=\"checkAllSets()\">Check all sets</button>\r" +
    "\n" +
    "			<button ng-click=\"exportSets()\">Export Sets</button>\r" +
    "\n" +
    "			<div class=\"u-search-filter-comment\">Import Sets...</div>\r" +
    "\n" +
    "			<input type=\"file\" multiple onchange=\"angular.element(this).scope().importSets(this)\">\r" +
    "\n" +
    "			<div ng-repeat=\"set in setList | orderBy:'-releaseDate'\" class=\"u-search-set\" ng-hide=\"search.ignoreSetsFilter\">\r" +
    "\n" +
    "				<label class=\"u-label\"><input type=\"checkbox\" ng-model=\"search.sets[set.id].search\"> {{set.parentSet}}: {{set.name}}</label>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		</search-filter-group>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ng-init=\"resultLimit = 10\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"u-loading\" ng-show=\"loading\">Loading cards...</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-container\" ng-show=\"dragStore.item && dragStore.source != 'search'\" droppable can-drop=\"true\" drop=\"$emit('removeFromFleetDropped',$item)\" drag-store=\"dragStore\">\r" +
    "\n" +
    "		<div class=\"card-outer card-drop-target font-staw\">\r" +
    "\n" +
    "			<div class=\"card-drop-target-inner\">\r" +
    "\n" +
    "				<div class=\"card-drop-target-type\">\r" +
    "\n" +
    "					<i class=\"fs fs-captain\"></i><br/>Remove From Fleet\r" +
    "\n" +
    "				</div>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div ng-hide=\"dragStore.item && dragStore.source != 'search'\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<div class=\"card-container\" ng-repeat=\"card in cards | cardFilter:search | sortBy:search.sortBy:search.ascending | limitTo:resultLimit*search.columns\">\r" +
    "\n" +
    "			<card card=\"card\" drag-store=\"dragStore\" drag-source=\"search\"></card>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<div>\r" +
    "\n" +
    "			<button class=\"u-show-more\" ng-hide=\"loading\" ng-click=\"resultLimit = resultLimit + 10\">Show More</button>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('card-faction.html',
    "<div class=\"card-outer card-faction font-staw\" ng-class=\"{ 'dragging': faction == dragStore.item }\" draggable drag-item=\"faction\" drag-store=\"dragStore\" drag-source=\"dragSource\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-faction-image card-faction-{{faction.factions[0]}}\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-faction-name\">{{faction.name | uppercase}}</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('card-resource.html',
    "<div class=\"card-outer card-resource font-staw\" ng-class=\"{ 'dragging': resource == dragStore.item }\" draggable drag-item=\"resource\" drag-store=\"dragStore\" drag-source=\"dragSource\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-resource-header\">\r" +
    "\n" +
    "		<span class=\"card-title\" ng-class=\"{'card-title-long': resource.name.length > 20}\">{{resource.name | uppercase}}<span ng-hide=\"resource.hideCost\"> ({{resource|valueOf:'cost':ship:fleet}} SP)</span></span>\r" +
    "\n" +
    "		\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "	\r" +
    "\n" +
    "	<div class=\"card-resource-header pull-right\">\r" +
    "\n" +
    "		<i ng-if=\"resource.opBanned\" class=\"card-OP-banned-icon fs fs-opBanned\"></i>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "	\r" +
    "\n" +
    "	<div class=\"card-text\">\r" +
    "\n" +
    "		<div class=\"card-text-inner font-staw-alt\" ng-bind-html=\"resource.text | icons\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('card-ship-class.html',
    "<div class=\"card-outer card-ship card-shipclass font-staw\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-shipclass-arcs arc-faction-{{ship.factions[0]}}\">\r" +
    "\n" +
    "		<div class=\"arc arc-fill arc-fore-90\" ng-show=\"shipClass.frontArc == 90\"></div>\r" +
    "\n" +
    "		<div class=\"arc arc-fill arc-fore-180\" ng-show=\"shipClass.frontArc == 180\"></div>\r" +
    "\n" +
    "		<div class=\"arc arc-rear-90\" ng-show=\"shipClass.rearArc == 90\"></div>\r" +
    "\n" +
    "		<div class=\"arc-hole\"></div>\r" +
    "\n" +
    "		<div class=\"arc-name\">{{getBaseTileName(ship)}}</div>\r" +
    "\n" +
    "		<div class=\"arc-stats\">\r" +
    "\n" +
    "			<div class=\"arc-stat card-ship-stat-attack text-center\">{{ship|valueOf:'attack':ship:fleet}}</div>\r" +
    "\n" +
    "			<div class=\"arc-stat card-ship-stat-agility text-center\">{{ship|valueOf:'agility':ship:fleet}}</div>\r" +
    "\n" +
    "			<div class=\"arc-stat card-ship-stat-hull text-center\">{{ship|valueOf:'hull':ship:fleet}}</div>\r" +
    "\n" +
    "			<div class=\"arc-stat card-ship-stat-shields text-center\">{{ship|valueOf:'shields':ship:fleet}}</div>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "		<div class=\"arc-actions\"><i ng-repeat=\"action in ship.actions\" class=\"fs fs-{{action}}\"></i></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<!-- <div class=\"card-image\" ng-class=\"{'card-image-large': Object.keys(shipClass.maneuvers).length > 9}\"></div> -->\r" +
    "\n" +
    "	<div ng-class=\"(shipClass.id == 'borg_cube' || shipClass.id == 'kelvin_constitution_class') ? 'card-image-large' : 'card-image'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-corner-top-left pull-left\">\r" +
    "\n" +
    "		<div class=\"card-corner-inner pull-right\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "	<div class=\"card-corner-top-right pull-right\">\r" +
    "\n" +
    "		<div class=\"card-corner-inner card-corner-inner-faction\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "	<div class=\"card-title-container text-center\">\r" +
    "\n" +
    "		<span class=\"card-shipclass-title\" ng-class=\"{'card-title-long': shipClass.name.length >= 20 }\">{{shipClass.name | uppercase}}</span>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div ng-class=\"(shipClass.id == 'borg_cube' || shipClass.id == 'kelvin_constitution_class') ? 'card-border-left-tall pull-left' : 'card-border-left pull-left'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div ng-class=\"(shipClass.id == 'borg_cube' || shipClass.id == 'kelvin_constitution_class') ? 'card-border-right-tall pull-right' : 'card-border-right pull-right'\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div ng-class=\"(shipClass.id == 'borg_cube' || shipClass.id == 'kelvin_constitution_class') ? 'card-class-maneuvers-tall' : 'card-class-maneuvers'\">\r" +
    "\n" +
    "		<div class=\"card-maneuver-row\" ng-repeat=\"speed in speeds track by $index\">\r" +
    "\n" +
    "			<div class=\"card-maneuver-box\" ng-class=\"{'speed-reverse': speed < 0}\"><span ng-show=\"speed != 9\">{{abs(speed)}}</span></div>\r" +
    "\n" +
    "			<div class=\"card-maneuver-box\" ng-class=\"{'card-maneuver-box-highlight': shipClass.maneuvers[speed].turn || shipClass.maneuvers[speed]['90-degree-rotate']}\">\r" +
    "\n" +
    "				<i class=\"fs fs-turn-left speed-{{shipClass.maneuvers[speed].turn}}\" ng-show=\"shipClass.maneuvers[speed].turn\"></i>\r" +
    "\n" +
    "				<i class=\"fs fs-90-rotate-left speed-{{shipClass.maneuvers[speed]['90-degree-rotate']}}\" ng-show=\"shipClass.maneuvers[speed]['90-degree-rotate']\"></i>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"card-maneuver-box\" ng-class=\"{'card-maneuver-box-highlight': shipClass.maneuvers[speed].bank || shipClass.maneuvers[speed].spin || shipClass.maneuvers[speed].flank || shipClass.maneuvers[speed]['45-degree-rotate']}\">\r" +
    "\n" +
    "				<i class=\"fs fs-bank-left speed-{{shipClass.maneuvers[speed].bank}}\" ng-show=\"shipClass.maneuvers[speed].bank\"></i>\r" +
    "\n" +
    "				<i class=\"fs fs-spin-left speed-{{shipClass.maneuvers[speed].spin}}\" ng-show=\"shipClass.maneuvers[speed].spin\"></i>\r" +
    "\n" +
    "				<i class=\"fs fs-left-flank speed-{{shipClass.maneuvers[speed].flank}}\" ng-show=\"shipClass.maneuvers[speed].flank\"></i>\r" +
    "\n" +
    "				<i class=\"fs fs-45-rotate-left speed-{{shipClass.maneuvers[speed]['45-degree-rotate']}}\" ng-show=\"shipClass.maneuvers[speed]['45-degree-rotate']\"></i>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"card-maneuver-box\" ng-class=\"{'card-maneuver-box-highlight': shipClass.maneuvers[speed].straight || shipClass.maneuvers[speed].stop}\">\r" +
    "\n" +
    "				<i class=\"fs speed-{{shipClass.maneuvers[speed].straight}}\" ng-class=\"{'fs-forward': speed > 0, 'fs-reverse': speed < 0}\" ng-show=\"shipClass.maneuvers[speed].straight\"></i>\r" +
    "\n" +
    "				<i class=\"fs fs-stop speed-{{shipClass.maneuvers[speed].stop}}\" ng-show=\"shipClass.maneuvers[speed].stop\"></i>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"card-maneuver-box\" ng-class=\"{'card-maneuver-box-highlight': shipClass.maneuvers[speed].bank || shipClass.maneuvers[speed].spin || shipClass.maneuvers[speed].flank || shipClass.maneuvers[speed]['45-degree-rotate']}\">\r" +
    "\n" +
    "				<i class=\"fs fs-bank-right speed-{{shipClass.maneuvers[speed].bank}}\" ng-show=\"shipClass.maneuvers[speed].bank\"></i>\r" +
    "\n" +
    "				<i class=\"fs fs-spin-right speed-{{shipClass.maneuvers[speed].spin}}\" ng-show=\"shipClass.maneuvers[speed].spin\"></i>\r" +
    "\n" +
    "				<i class=\"fs fs-right-flank speed-{{shipClass.maneuvers[speed].flank}}\" ng-show=\"shipClass.maneuvers[speed].flank\"></i>\r" +
    "\n" +
    "				<i class=\"fs fs-45-rotate-right speed-{{shipClass.maneuvers[speed]['45-degree-rotate']}}\" ng-show=\"shipClass.maneuvers[speed]['45-degree-rotate']\"></i>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"card-maneuver-box\" ng-class=\"{'card-maneuver-box-highlight': shipClass.maneuvers[speed].turn || shipClass.maneuvers[speed]['90-degree-rotate']}\">\r" +
    "\n" +
    "				<i class=\"fs fs-turn-right speed-{{shipClass.maneuvers[speed].turn}}\" ng-show=\"shipClass.maneuvers[speed].turn\"></i>\r" +
    "\n" +
    "				<i class=\"fs fs-90-rotate-right speed-{{shipClass.maneuvers[speed]['90-degree-rotate']}}\" ng-show=\"shipClass.maneuvers[speed]['90-degree-rotate']\"></i>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "			<div class=\"card-maneuver-box\" ng-class=\"{'card-maneuver-box-highlight': shipClass.maneuvers[speed].about}\">\r" +
    "\n" +
    "				<i class=\"fs fs-come-about speed-{{shipClass.maneuvers[speed].about}}\" ng-show=\"shipClass.maneuvers[speed].about\"></i>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-corner-bottom-left pull-left\">\r" +
    "\n" +
    "		<div class=\"card-corner-inner\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-corner-bottom-right pull-right\">\r" +
    "\n" +
    "		<div class=\"card-corner-inner\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-border-bottom\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div style=\"clear: both\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('card-ship.html',
    "<div class=\"card-outer card-ship font-staw\" ng-class=\"{ 'card-unique': ship.unique, 'card-mirror': ship.mirror, 'dragging': ship == dragStore.item }\" draggable drag-item=\"ship\" drag-store=\"dragStore\" drag-source=\"dragSource\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-image\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-corner-top-left pull-left\"><i ng-if=\"ship.unique\" class=\"card-unique-icon fs fs-unique pull-left\"></i>\r" +
    "\n" +
    "		<div class=\"card-corner-inner pull-right\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "	<div class=\"card-corner-top-right pull-right\"><i ng-repeat=\"faction in ship|valueOf:'factions':ship:fleet\" class=\"card-ship-faction card-faction-{{faction}} card-faction-{{$index}} fs fs-empty\" ng-class=\"{'card-factions-multiple': (ship|valueOf:'factions':ship:fleet).length > 1}\"></i>\r" +
    "\n" +
    "		<div class=\"card-corner-inner card-corner-inner-faction\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "	<div class=\"card-title-container text-center\">\r" +
    "\n" +
    "		<span class=\"card-title\" ng-class=\"{'card-title-long': ship.name.length >= 20 }\">{{ship.name | uppercase}}</span>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-ship-stats pull-left\">\r" +
    "\n" +
    "		<div class=\"card-ship-stat card-ship-stat-attack text-right\" tooltip-show=\"fleet\" tooltip=\"ship|valueOf:'attack':ship:fleet:false:{modifiers:true}\" tooltip-position=\"e\"><span class=\"card-skill-plus\" ng-show=\"ship.isShipModifier\">+</span>{{ship|valueOf:'attack':ship:fleet}}</div>\r" +
    "\n" +
    "		<div class=\"card-ship-stat card-ship-stat-agility text-right\" tooltip-show=\"fleet\" tooltip=\"ship|valueOf:'agility':ship:fleet:false:{modifiers:true}\" tooltip-position=\"e\"><span class=\"card-skill-plus\" ng-show=\"ship.isShipModifier\">+</span>{{ship|valueOf:'agility':ship:fleet}}</div>\r" +
    "\n" +
    "		<div class=\"card-ship-stat card-ship-stat-hull text-right\" tooltip-show=\"fleet\" tooltip=\"ship|valueOf:'hull':ship:fleet:false:{modifiers:true}\" tooltip-position=\"e\"><span class=\"card-skill-plus\" ng-show=\"ship.isShipModifier\">+</span>{{ship|valueOf:'hull':ship:fleet}}</div>\r" +
    "\n" +
    "		<div class=\"card-ship-stat card-ship-stat-shields text-right\" tooltip-show=\"fleet\" tooltip=\"ship|valueOf:'shields':ship:fleet:false:{modifiers:true}\" tooltip-position=\"e\"><span class=\"card-skill-plus\" ng-show=\"ship.isShipModifier\">+</span>{{ship|valueOf:'shields':ship:fleet}}</div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-border-right pull-right\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-ship-silhouette pull-left\"><i ng-if=\"ship.faq\" class=\"card-faq-icon fs fs-faq pull-left\"></i></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-ship-class-container text-center\">\r" +
    "\n" +
    "		<span class=\"card-ship-class\" ng-class=\"{'card-ship-class-long': ship.class.length >= 25 }\">{{ship.class | uppercase}}</span>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-text font-staw-alt\"><div class=\"card-text-inner\" ng-bind-html=\"ship.text | icons\" ng-class=\"{'card-text-inner-long': ship.text.length > 230 }\"></div></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-ship-action-bar text-center\">\r" +
    "\n" +
    "		<i ng-repeat=\"action in ship.actions\" class=\"fs fs-{{action}}\"></i>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-corner-bottom-right pull-right\">\r" +
    "\n" +
    "		<div class=\"card-corner-inner\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-ship-cost pull-right\">{{ship|valueOf:'cost':ship:fleet}}</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-ship-upgrade-bar\">\r" +
    "\n" +
    "		<i ng-repeat=\"upgrade in ship.upgrades track by $index\" class=\"fs fs-{{upgrade.type[0]}}\" ng-class=\"{'card-ship-upgrade-occupied': upgrade.occupant}\"></i>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "	<div style=\"clear: both\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('card-token.html',
    "<div class=\"card-outer card-token font-staw\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-token-header\">\r" +
    "\n" +
    "		<span class=\"card-title\" ng-class=\"{'card-title-long': token.name.length > 20}\">{{token.name | uppercase}}</span>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-text\">\r" +
    "\n" +
    "		<div class=\"card-text-inner font-staw-alt\" ng-bind-html=\"token.text | icons\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('card-upgrade.html',
    "<div class=\"card-outer card-upgrade font-staw\" ng-class=\"{ 'card-unique': upgrade.unique, 'card-OnePerShip': upgrade.OnePerShip, 'card-factionFederation': upgrade.factionFederation, 'card-FrontArc': upgrade.FrontArc, 'card-RearArc': upgrade.RearArc, 'card-Hull': upgrade.Hull, 'card-mirror': upgrade.mirror, 'dragging': upgrade == dragStore.item }\" draggable drag-item=\"upgrade\" drag-store=\"dragStore\" drag-source=\"dragSource\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-image\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-corner-top-left pull-left\">\r" +
    "\n" +
    "		<i ng-if=\"upgrade.unique\" class=\"card-unique-icon fs fs-unique pull-left\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.OnePerShip\" class=\"card-OnePerShip-icon fs fs-OnePerShip pull-left\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.specialization\" class=\"card-specialization-icon fs fs-specialization pull-left\"></i>\r" +
    "\n" +
    "		<div class=\"card-corner-inner pull-right\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-title-container text-left\">\r" +
    "\n" +
    "		<span ng-if=\"upgrade.showType\" class=\"card-captain pull-right\">{{upgrade.type|uppercase|removeDashes}}</span>\r" +
    "\n" +
    "		<span ng-if=\"upgrade|valueOf:'attack':ship:fleet\" class=\"card-weapon-attack pull-right\" tooltip-show=\"ship\" tooltip=\"upgrade|valueOf:'attack':ship:fleet:false:{modifiers:true}\">{{upgrade|valueOf:'attack':ship:fleet}}</span>\r" +
    "\n" +
    "		<span class=\"card-title\"\r" +
    "\n" +
    "			ng-class=\"{ 'card-title-long': upgrade.name.length >= 24 || (upgrade.showType && upgrade.name.length + upgrade.type.length >= 24) || (upgrade.attack && upgrade.name.length >= 20),\r" +
    "\n" +
    "						'card-title-super-long': upgrade.name.length >= 31 || upgrade.showType && upgrade.name.length + upgrade.type.length >= 31,\r" +
    "\n" +
    "			}\">{{upgrade.name | uppercase}}</span>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-border-left pull-left\">\r" +
    "\n" +
    "		<i ng-if=\"upgrade.captainFederation\" class=\"card-captainFederation-icon fs fs-captainFederation\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.captainBajoren\" class=\"card-captainBajoren-icon fs fs-captainBajoren\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.captainVulcan\" class=\"card-captainVulcan-icon fs fs-captainVulcan\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.captainKlingon\"  class=\"card-captainKlingon-icon fs fs-captainKlingon\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.captainRomulan\" class=\"card-captainRomulan-icon fs fs-captainRomulan\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.captainDominion\" class=\"card-captainDominion-icon fs fs-captainDominion\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.captainIndependent\" class=\"card-captainIndependent-icon fs fs-captainIndependent\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.captainFerengi\" class=\"card-captainFerengi-icon fs fs-captainFerengi\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.captainKazon\" class=\"card-captainKazon-icon fs fs-captainKazon\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.captainXindi\" class=\"card-captainFerengi-icon fs fs-captainFerengi\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.captainBorg\" class=\"card-captainBorg-icon fs fs-captainBorg\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.captain8472\" class=\"card-captain8472-icon fs fs-captain8472\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.captainMU\" class=\"card-captainMU-icon fs fs-captainMU\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<i ng-if=\"upgrade.shipFederation\" class=\"card-shipFederation-icon fs fs-card-shipFederation\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.shipBajoren\" class=\"card-shipBajoren-icon fs fs-card-shipBajoren\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.shipVulcan\" class=\"card-shipVulcan-icon fs fs-card-shipVulcan\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.shipKlingon\" class=\"card-shipKlingon-icon fs fs-shipKlingon\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.shipRomulan\" class=\"card-shipRomulan-icon fs fs-shipRomulan\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.shipDominion\" class=\"card-shipDominion-icon fs fs-shipDominion\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.shipIndependent\" class=\"card-shipIndependent-icon fs fs-shipIndependent\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.shipFerengi\" class=\"card-shipFerengi-icon fs fs-shipFerengi\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.shipKazon\" class=\"card-shipKazon-icon fs fs-shipKazon\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.shipXindi\" class=\"card-shipXindi-icon fs fs-shipXindi\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.shipBorg\" class=\"card-shipBorg-icon fs fs-shipBorg\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.ship8472\" class=\"card-ship8472-icon fs fs-ship8472\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.shipMU\" class=\"card-shipMU-icon fs fs-shipMU\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<i ng-if=\"upgrade.costFederation\" class=\"card-costFederation-icon\">{{upgrade|valueOf:'costFederation':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.costBajoren\" class=\"card-costBajoren-icon\">{{upgrade|valueOf:'costFederation':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.costVulcan\" class=\"card-costVulcan-icon\">{{upgrade|valueOf:'costVulcan':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.costKlingon\" class=\"card-costKlingon-icon\">{{upgrade|valueOf:'costKlingon':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.costRomulan\" class=\"card-costRomulan-icon\">{{upgrade|valueOf:'costRomulan':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.costDominion\" class=\"card-costDominion-icon\">{{upgrade|valueOf:'costDominion':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.costIndependent\" class=\"card-costIndependent-icon\">{{upgrade|valueOf:'costIndependent':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.costFerengi\" class=\"card-costFerengi-icon\">{{upgrade|valueOf:'costFerengi':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.costKazon\" class=\"card-costKazon-icon\">{{upgrade|valueOf:'costKazon':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.costXindi\" class=\"card-costXindi-icon\">{{upgrade|valueOf:'costXindi':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.costBorg\" class=\"card-costBorg-icon\">{{upgrade|valueOf:'costBorg':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.cost8472\" class=\"card-cost8472-icon\">{{upgrade|valueOf:'cost8472':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.costMU\" class=\"card-costMU-icon\">{{upgrade|valueOf:'costMU':ship:fleet}}</i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<i ng-if=\"upgrade.attackConstraint\" class=\"card-attackConstraint-icon\">{{upgrade|valueOf:'attackConstraint':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.hullConstraint\" class=\"card-hullConstraint-icon\">{{upgrade|valueOf:'hullConstraint':ship:fleet}}</i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.FrontArc\" class=\"card-FrontArc-icon fs fs-FrontArc\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.RearArc\" class=\"card-RearArc-icon fs fs-RearArc\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.arc360\" class=\"card-360Arc-icon fs fs-360Arc\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.shipLimit\" class=\"card-shipLimit-icon fs fs-shipLimit\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.faq\" class=\"card-faq-icon fs fs-faq\"></i>\r" +
    "\n" +
    "		<i ng-if=\"upgrade.opBanned\" class=\"card-OP-banned-icon fs fs-opBanned\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-text\">\r" +
    "\n" +
    "		<div ng-if=\"upgrade.range\" class=\"card-weapon-range pull-right\">{{upgrade|valueOf:'range':ship:fleet}}</div>\r" +
    "\n" +
    "		<div class=\"card-text-inner font-staw-alt\" ng-bind-html=\"upgrade.text | icons\" ng-class=\"{'card-text-inner-long': upgrade.text.length > 300, 'card-text-inner-super-long': upgrade.text.length > 530, 'text-left': upgrade.range }\"></div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-upgrade-cost pull-right\"><div ng-repeat=\"faction in upgrade|valueOf:'factions':ship:fleet\" class=\"card-upgrade-faction card-faction-{{ (upgrade|valueOf:'factions':ship:fleet).length - $index}}\"><div class=\"card-upgrade-faction-black\"></div><div class=\"card-upgrade-faction-icon card-faction-{{faction}}\"></div></div><div class=\"card-upgrade-cost-value\" ng-class=\"{'card-upgrade-cost-free': '{{upgrade|valueOf:'free':ship:fleet}}' }\" tooltip-show=\"ship\" tooltip=\"upgrade|valueOf:'cost':ship:fleet:false:{modifiers:true}\">{{upgrade|valueOf:'cost':ship:fleet}}</div></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div ng-if=\"upgrade.type == 'captain' || upgrade.type == 'admiral' || (upgrade|valueOf:'skill':ship:fleet)\" class=\"card-skill-container pull-left\">\r" +
    "\n" +
    "		<div class=\"card-skill\" tooltip-show=\"ship\" tooltip=\"upgrade|valueOf:'skill':ship:fleet:false:{modifiers:true}\" tooltip-position=\"nw-alt\"><span class=\"card-skill-plus\" ng-show=\"upgrade.isSkillModifier && upgrade.skill >= 0\">+</span>{{upgrade|valueOf:'skill':ship:fleet}}</div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div ng-if=\"!(upgrade|valueOf:'skill':ship:fleet) && upgrade.type != 'captain' && upgrade.type != 'admiral' \" class=\"card-upgrade-type pull-left fs fs-{{upgrade.type}}\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div class=\"card-border-bottom\">\r" +
    "\n" +
    "		<i ng-if=\"upgrade.talents\" ng-repeat=\"talent in range(upgrade.talents) track by $index\" class=\"fs fs-talent\"></i>\r" +
    "\n" +
    "		<i ng-repeat=\"slot in upgrade.upgradeSlots track by $index\" ng-if=\"slot.showOnCard\" class=\"fs fs-{{slot.type[0]}}\" ng-class=\"{'card-upgrades-long': upgrade.upgradeSlots.length > 2}\"></i>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<i ng-if=\"upgrade.alliance\" class=\"card-alliance-icon fs fs-alliance\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "	<div style=\"clear: both\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('card.html',
    "<div ng-if=\"card\" ng-switch on=\"card.type\">\r" +
    "\n" +
    "	<card-ship 			ng-switch-when=\"ship\" ship=\"card\" drag-store=\"dragStore\" drag-source=\"dragSource\" fleet=\"fleet\"></card-ship>\r" +
    "\n" +
    "	<card-ship 			ng-switch-when=\"flagship\" ship=\"card\" drag-store=\"dragStore\" drag-source=\"dragSource\" fleet=\"fleet\"></card-ship>\r" +
    "\n" +
    "	<card-ship-class	ng-switch-when=\"ship-class\" ship-class=\"card\" ship=\"ship\" fleet=\"fleet\"></card-ship-class>\r" +
    "\n" +
    "	<card-resource 		ng-switch-when=\"resource\" resource=\"card\" drag-store=\"dragStore\" drag-source=\"dragSource\" ship=\"ship\" fleet=\"fleet\"></card-resource>\r" +
    "\n" +
    "	<card-token 		ng-switch-when=\"token\" token=\"card\" drag-store=\"dragStore\" drag-source=\"dragSource\" ship=\"ship\" fleet=\"fleet\"></card-token>\r" +
    "\n" +
    "	<card-faction 		ng-switch-when=\"faction\" faction=\"card\" drag-store=\"dragStore\" drag-source=\"dragSource\" ship=\"ship\" fleet=\"fleet\"></card-faction>\r" +
    "\n" +
    "	<card-upgrade 		ng-switch-default upgrade=\"card\" drag-store=\"dragStore\" drag-source=\"dragSource\" ship=\"ship\" fleet=\"fleet\"></card-upgrade>\r" +
    "\n" +
    "</div>"
  );

}]);
