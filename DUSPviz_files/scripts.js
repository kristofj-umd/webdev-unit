var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){
  if (!document.getElementById('mainhead')) {
    console.log("masthead-row found!");
    $('#sidebar').affix({
      offset: {
        top: 0
      }
    });
  } else {
    console.log("masthead-row not found!");
    $('#sidebar').affix({
      offset: {
        top: 185
      }
    });
  };
});

$("#tutorialGroup").click(function(){
  $(this).find($(".fa")).toggleClass('fa-rotate-180');
});

$("#resourceGroup").click(function(){
  $(this).find($(".fa")).toggleClass('fa-rotate-180');
});

$("#softwareGroup").click(function(){
  $(this).find($(".fa")).toggleClass('fa-rotate-180');
});

}
/*
     FILE ARCHIVED ON 06:21:19 Nov 09, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:53:45 Sep 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 123.469
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.074
  RedisCDXSource: 1.459
  esindex: 0.007
  LoadShardBlock: 105.492 (3)
  PetaboxLoader3.datanode: 59.009 (4)
  CDXLines.iter: 14.499 (3)
  PetaboxLoader3.resolve: 66.869 (2)
  load_resource: 44.65
*/