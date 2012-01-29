(function($){
	var methods = {
		init : function( options ) {
			var opts = $.extend({}, $.fn.nav2select.defaults, options);
			return this.each(function() {
				$this = $(this);
				$select = $("<select />");
				// Create default option "Go to..."
				$("<option />", {
					"selected": "selected",
					"value"   : "",
					"text"    : "Go to..."
				}).appendTo($select);
				// Populate dropdown with menu items
				$this.find('a').each(function() {
					var el = $(this);
					$("<option />", {
						"selected": el.attr("href") === window.location.href ? "selected" : false,
						"value"   : el.attr("href"),
						"text"    : el.text()
					}).appendTo($select);
				});
				$select.appendTo($this);
				$($select).change(function() {
					window.location = $(this).find("option:selected").val();
				});
			});
		},
	}
	$.fn.nav2select = function(method) {
	// Method calling logic
		if ( methods[method] ) {
		  return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
		  return methods.init.apply( this, arguments );
		} else {
		  $.error( 'Method ' +  method + ' does not exist on jQuery.button' );
		}
	};
	$.fn.nav2select.defaults = {
		
	};
})(jQuery);