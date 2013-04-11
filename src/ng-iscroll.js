angular.module('ng-iscroll', []).directive('ngIscroll', function() {
	return {
		replace: false,
		restrict: 'A',
		link: function(scope, element, attr){
			var wrapper = element[0];
			
			var ngScroll_timeout = 5;
			
			function setScroll() {
				myScroll = new iScroll(wrapper, {
					nap: true,
					momentum: true,
					hScrollbar: false
				});
			}
			
			if (attr.ngIscroll !== "") {
				ngScroll_timeout = attr.ngIscroll;
			}
			
            scope.$watch(attr.ngIscroll, function(value){
				setTimeout(setScroll, ngScroll_timeout);
			});	
			
		}
	};
});