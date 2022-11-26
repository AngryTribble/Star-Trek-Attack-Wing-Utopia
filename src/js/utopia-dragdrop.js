var module = angular.module("utopia-dragdrop", []);

module.directive('draggable', function () {
    return {
		
		scope: {
			dragItem: "=",
			dragStore: "=",
			dragSource: "=",
		},
	
		link: function (scope, element) {
			
			element.prop( "draggable", true );

			element.on("dragstart", function(ev) {
				scope.$apply(function(){
					scope.dragStore.item = scope.dragItem;
					scope.dragStore.source = scope.dragSource;
				});
				element.addClass("dragging");
				ev.originalEvent.dataTransfer.effectAllowed = 'move';
				ev.originalEvent.dataTransfer.setData("text/plain","google");
			});
			
			element.on("dragend", function(ev) {
				element.removeClass("dragging");
                scope.$apply(function (scope) {
					delete scope.dragStore.item;
					delete scope.dragStore.source;
                });
			});
			
			element.on("click", function(ev) {
				scope.$apply(function(){
					if( scope.dragStore.item != scope.dragItem) {
						scope.dragStore.item = scope.dragItem;
						scope.dragStore.source = scope.dragSource;
					} else
						delete scope.dragStore.item;
				});
				ev.preventDefault();
				return false;
			});

		}
		
	};
});

module.directive('droppable', function () {
    return {
        scope: {
            drop: "&",
			canDrop: "&",
            dragStore: "="
        },
        link: function (scope, element) {
			
			element.on( "dragover", function(ev) {
				if( scope.canDrop({ "$item": scope.dragStore.item }) ) {
					element.addClass("drag-over");
					ev.preventDefault();
				}
			});
			
			element.on( "dragenter", function(ev) {
				if( scope.canDrop({ "$item": scope.dragStore.item }) )
					element.addClass("drag-over");
			});
			
			element.on( "dragleave", function(ev) {
				element.removeClass("drag-over");
			});
			
			element.on( "drop", function(ev) {

				element.removeClass("drag-over");
				
                scope.$apply(function (scope) {
					scope.drop( {"$item": scope.dragStore.item} )
					delete scope.dragStore.item;
                });
				
				ev.preventDefault();
				
			});
			
			element.on("click", function(ev) {
				scope.$apply(function(){
					if( scope.dragStore.item ) {
						scope.drop( {"$item": scope.dragStore.item} )
						delete scope.dragStore.item;
					}
				});
				ev.preventDefault();
			});

        }
    };
});