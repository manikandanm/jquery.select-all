/* Select all checkbox jQuery plugin */

(function ( $ ) {
	$.extend({
		selectall: function(all, child) {
			$(all).on("click", function() {
				if ($(all).prop('checked')) {
					$(child).prop('checked', 'checked');
				}
				else {
					$(child).removeAttr('checked');
				}
			});
			$(child).on("click", function() {
				if ($(child+':not(:checked)').length > 0) {
					$(all).removeAttr('checked');
				}
				else {
					$(all).prop('checked', 'checked');
				}
			});
		}
	});
}( jQuery ));