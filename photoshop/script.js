var images= ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg"];
var caption = ["Beach side","Shopping Time","Private Charter","Using gradient","Heals and Jeans","Winter sale poster","Portfoilio ","Boating in the sea","Christmas and New Year"];

var imageNumber=0;
var imageLength = images.length - 1;

function changeImage(x){

	imageNumber+=x;

	if (imageNumber > imageLength) {
		imageNumber=0;

	}

	if (imageNumber < 0) {
		imageNumber=imageLength;
		
	}

	document.getElementById("slideshow").src = images[imageNumber];
	document.getElementById("caption").innerHTML = caption[imageNumber];

	return true; 

}

$('#left').click(function(e){
		changeImage(-1);

});


$('#right').click(function(e){
		changeImage(+1);

});

function do_slide(){
    interval = setInterval(function(){
      changeImage(1);
    }, 4000);
}

do_slide();





var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox'); 
var $close = $('.btn-close');

$thumbs.on('click','a',function(e){
	e.preventDefault();

	var big = $(this).attr('href');
	console.log(big);
	$lbImg.attr('src',big);
	$lb.attr('data-state','visible');

	$close.on('click', function(e){
	$lb.attr('data-state','hidden');

	})


})