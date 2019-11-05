
const slides = 
[
    {
        src:"images/gallery/team.jpg",
        caption:"The team poses for a picture with the first iteration of the drone"
    },
    {
        src:"images/gallery/team_winner.jpg",
        caption:"The team wins 1st place at the Madison Engineering xChange, Spring 2019"
    },
    {
        src:"images/gallery/dog.jpg",
        caption:"Momo, Jacob's dog"
    }
]
var slidesIndex = -1;

function disappearHeader(){
    $("header").fadeOut(1000);
}
function plusSlides(increment){
    slidesIndex +=increment;
    if(slidesIndex < 0){
        slidesIndex = slides.length - 1;
    }
    else if (slidesIndex >= slides.length){
        slidesIndex = 0;
    }
    $("#gallery-slideshow").css("background-image", "url("+slides[slidesIndex].src+")");
    $("#image-caption").text(slides[slidesIndex].caption + " ("+(slidesIndex+1).toString()+"/"+slides.length.toString()+")");

}