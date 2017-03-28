var streams=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"]

streams.forEach(function(name, count){
 var url = 'https://api.twitch.tv/kraken/channels/'+name+'?client_id=r6eaw28f8hmky5hry9iddqxfwl9hn3&callback=?';
  
  $.getJSON(url, function(data) {
    var newDiv = document.getElementById("proto").cloneNode(true);
    newDiv.id = "div"+count;
    newDiv.getElementsByClassName("liName")[0].innerHTML = data.display_name;
    newDiv.getElementsByTagName("img")[0].src = data.logo;
  document.getElementById("list").appendChild(newDiv); 
    newDiv.onclick = function(){window.open(data.url, '_blank');};
    console.log(data);
    var url2= 'https://api.twitch.tv/kraken/streams/'+name+'?client_id=r6eaw28f8hmky5hry9iddqxfwl9hn3&callback=?';
$.getJSON(url2, function(data2){
  console.log(data2);
  if(data2.stream===null){
    newDiv.className +=" offline";
    newDiv.getElementsByClassName("liDesc")[0].innerHTML = "offline";
  } else {
    newDiv.className +=" online";
  newDiv.getElementsByClassName("liDesc")[0].innerHTML = "Stream: "+data2.stream.game;}
  
});
  });
  
}); 

window.onload=function() {
  document.getElementById("tabOn").onclick=function(){
	if($("#tabAll").hasClass("active")){$("#tabAll").removeClass("active")};
	if($("#tabOff").hasClass("active")){$("#tabOff").removeClass("active")};
	if(!$("#tabOn").hasClass("active")){$("#tabOn").addClass("active")};
    var all=document.getElementsByClassName("liEl");
    for(var i=0; i<all.length; i++){
    if($(all[i]).hasClass("online")&&$(all[i]).hasClass("hidden")){$(all[i]).removeClass("hidden")} 
      else if ($(all[i]).hasClass("offline")&&(!$(all[i]).hasClass("hidden"))) {$(all[i]).addClass("hidden")}
    }
  }
   document.getElementById("tabOff").onclick=function(){
	   if($("#tabAll").hasClass("active")){$("#tabAll").removeClass("active")};
	if($("#tabOn").hasClass("active")){$("#tabOn").removeClass("active")};
	if(!$("#tabOff").hasClass("active")){$("#tabOff").addClass("active")};
    var all=document.getElementsByClassName("liEl");
    for(var i=0; i<all.length; i++){
    if($(all[i]).hasClass("offline")&&$(all[i]).hasClass("hidden")){$(all[i]).removeClass("hidden")} 
      else if ($(all[i]).hasClass("online")&&(!$(all[i]).hasClass("hidden"))) {$(all[i]).addClass("hidden")}
    }
  }
      document.getElementById("tabAll").onclick=function(){
	if($("#tabOff").hasClass("active")){$("#tabOff").removeClass("active")};
	if($("#tabOn").hasClass("active")){$("#tabOn").removeClass("active")};
	if(!$("#tabAll").hasClass("active")){$("#tabAll").addClass("active")};	  
    var all=document.getElementsByClassName("liEl");
    for(var i=0; i<all.length; i++){
    if($(all[i]).hasClass("hidden")){$(all[i]).removeClass("hidden")} 
          }
  }
}
   