var module = angular.module("utopia-tooltip", []);

module.directive( "tooltip", [ "$filter", function($filter) {
	
	return {
		
		scope: {
			tooltip: "&",
			tooltipPosition: "@",
			tooltipShow: "="
		},
		
		restrict: "A",
		
		link: function(scope,element,attrs) {
			
			var initialised = false;
			
			scope.$watch( "tooltipShow", function(show) {
				
				if( show && !initialised ) {
					
					initialised = true;
					
					$(element).data("powertipjq",$("<div></div>"));
					$(element).powerTip({ placement: scope.tooltipPosition || 'ne-alt' });
				
					var icons = $filter("icons");
						
					$(element).on( "powerTipRender", function() {
						
						var div = $("<table class='card-tooltip'></table>");
						
						$.each( scope.tooltip(), function(i,mod) {
							div.append( "<tr><td>" + icons(mod.source) + "</td><td>" + (mod.value > 0 && i > 0 ? "+" : "") + mod.value + "</tr>" );
						});
						
						$("#powerTip").html(div);
						
					} );
					
					scope.$on("$destroy", function() {
						$(element).powerTip("destroy");
					});
					
				}
				
			});
			
		}
		
	}
	
}]);