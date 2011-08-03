/*
* jQuery Background video plugin for jQuery
* ---
* Copyright 2011, Victor Coulon (http://victorcoulon.fr)
* Released under the MIT, BSD, and GPL Licenses.
* based on jQuery Plugin Boilerplate 1.3
*/


(function($) {

    $.backgroundVideo = function(el, options) {

        var defaults = {
            videoid: "video_background"
        }

        var plugin = this;

        plugin.settings = {}

        var init = function() {
            plugin.settings = $.extend({}, defaults, options);
            plugin.el = el;
                     
			buildVideo();
        }
		
        var buildVideo = function () {
	        var html = '';
		   	html += '<video id="'+plugin.settings.videoid+'" preload="auto" autoplay="autoplay" loop="loop"';
		 	html += 'style="display:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:-100;width:100%;height:100%;">';		                                                                                                                  
			for(var i=0; i < plugin.settings.types.length; i++) {       
				html += '<source src="'+plugin.settings.path+plugin.settings.filename+'.'+plugin.settings.types[i]+'" type="video/'+plugin.settings.types[i]+'" />';
			}
			html += 'bgvideo</video>';   
			$('body').prepend(html);
			$("#"+plugin.settings.videoid).fadeIn(2000);
			setProportion();
		}
		
        var setProportion = function () {
			var proportion = getProportion();
			$("#"+plugin.settings.videoid).width(proportion*plugin.settings.width);
			$("#"+plugin.settings.videoid).height(proportion*plugin.settings.height);    
		}             
		
		var getProportion = function () {
		  	var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			var windowProportion = windowWidth / windowHeight;

			var origProportion = plugin.settings.width / plugin.settings.height;

			var proportion = windowHeight / plugin.settings.height;

			if (windowProportion >= origProportion) {
				proportion = windowWidth / plugin.settings.width;
			}              
			
			return proportion;
		}   


        init();
        
		$(window).resize(function() { setProportion(); });         
		$("#"+plugin.settings.videoid).bind('ended', function(){ this.play(); });
    }
})(jQuery);
