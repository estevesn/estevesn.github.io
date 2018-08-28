

$('.Cover').on('click', function(){
	/*$('this').fadToggle();*/
	console.log("Imaged clicked");
});


$('.nav-item').on('mouseover', function(){
	$(this).addClass('selected');
});

$('.nav-item').on('mouseout', function(){
	$(this).removeClass('selected');
});


/*$('.fa').on('click', function(){
	console.log("Search added");
	
	function search(){

		var i = 1;

		if(i === 1){
			var happen = $('form').append("<input class='form-control form-control' type='search' placeholder='Search'>");
			$(this).toggle(happen);
			i--;
		}else if(i === 0){
			var Remove = $(".form-control").hide();
			var Remove = $(this).toggle(Remove);
			i++;
		}
	}
});
*/


/*$('.fa').on('click', function(){
	console.log("Search removed");
	search();

});*/

$(".fa fa-search").click(function(){
	$("input[type = 'text']").fadeToggle();
});

/*
function search(){

	var i = 1;

	if(i === 1){

		var happen = $('form').append("<input class='form-control form-control' type='search' placeholder='Search'>");
		var search = $(this).toggle(happen);
		i--;
	}else if(i === 0){
		var Remove = $(".form-control").hide();
		var Remove = $(this).toggle(Remove);
		i++;
	}
}

function RemoveSearch(){
	var Remove = $(".form-control").hide();
	var Remove = $(this).toggle(Remove);
	return Remove;
}


/*var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}*/

/*function fadeIn()
{
   $(this).fadeIn( fadeOut );
}

function fadeOut()
{
   $(this).fadeOut( fadeIn );
}

fadeIn.call($(".Cover"));*/


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}