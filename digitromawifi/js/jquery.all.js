/*
function checkInside(insideCallback, outsideCallback) {

  try {
    $("<img/>")
  .on('load', function() { insideCallback(); })
  .on('error', function() { outsideCallback(); })
  .attr("src", "https://wp.digitromawifi.it/inside.png?nonce=" + new Date().getTime());
  }
  catch(err) {
    outsideCallback();
  }
}
*/

function checkStatus(onlineCallback, offlineCallback, errorCallback) {

  try {
    $("<img/>")
  .on('load', function() { onlineCallback(); })
  .on('error', function() { offlineCallback(); })
  .attr("src", "https://secure.mobimesh.eu/img/connectivity-check.png?nonce=" + new Date().getTime());
  }
  catch(err) {
    errorCallback();
  }
}

$(document).ready(function() {

  // Setup top menu
  $("#logo-roma-with-lang-on-left, #button-home-return").click(function(){
      window.location.href = "http://redirect.mobimesh.eu/?d=http%3A%2F%2Fwww.digitromawifi.it%2Flogged.html";
    //window.location.href = "index.html";
  });

  // Fix language
  var tempLang = $("html").attr("lang") || "en_US";
  var dropdownLangFlag = $("#lang-dropdown-flag");
  var dropdownLangList = $("#lang-dropdown");
  var dropdownMenuDwell = $("#topmenu-dropdown-dwell");
  var dropdownMenuList = $("#topmenu-dropdown");

  if (dropdownLangFlag.length) {

    dropdownLangFlag.attr("src", "/stock/roma/img/" + tempLang + ".gif");
    $(".language-link[data-lang='" + tempLang + "']").hide();
    dropdownLangFlag.click(function(e){ dropdownLangList.toggle(); dropdownMenuList.hide(); e.stopPropagation(); });
    $(".language-link").click(function(e){
      var selectedLang = $(this).find('img').attr("data-path") || "en";
      var customPath = $("html").attr("data-path") || "index.html";
      window.location.href = "/" + selectedLang + "/" + customPath;
    });
    
    $(document).click(function(){ dropdownLangList.hide(); });
  }

  // Setup custom links
  $("#bottom-roma-on-the-web a").click(function(e){
    e.preventDefault();
    window.location.href = "links.html";
  });
  $("#bottom-apps a").click(function(e){
    e.preventDefault();
    window.location.href = "app-" + $(this).attr("data-platform") + ".html";
  });
});