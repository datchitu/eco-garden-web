let counter = 1;
var aray_pic=[
    "assets/images/eco_garden.png",
    "assets/images/eco_garden1.png",
    "assets/images/eco_garden2.jpg",
    "assets/images/eco_garden3.jpg",
    "assets/images/eco_garden4.jpg"
];
var sliderImg= document.getElementById("slider_pic-first");
// slider
function prev(){
    counter--;
    if (counter <-0) 
        counter=aray_pic.length-1;
        sliderImg.src=aray_pic[counter];
};
function next(){
    counter++;
    if (counter==aray_pic.length) 
        counter=0;
        sliderImg.src=aray_pic[counter];
};

setInterval("next()",3000);