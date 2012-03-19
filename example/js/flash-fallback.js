$(document).ready(function() {
  // Player options : http://code.google.com/intl/fr-FR/apis/youtube/player_parameters.html
  // Lets Flash from another domain call JavaScript
  var params = {
    allowScriptAccess: "always",
    wmode: "transparent",
    autoplay: 1,
    loop: 1
  };
  // The element id of the Flash embed
  var atts = { id: "flash-fallback-video" };
  // All of the magic handled by SWFObject (http://code.google.com/p/swfobject/)
  swfobject.embedSWF("http://www.youtube.com/apiplayer?video_id=ylLzyHk54Z0&version=3&autoplay=1&loop=1&playlist=ylLzyHk54Z0", 
                     "flash-fallback", "100%", "100%", "9", null, null, params, atts);
});
