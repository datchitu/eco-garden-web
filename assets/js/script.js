// slider img home
const imgPosition = document.querySelectorAll(".slider__item img")
const imgContainer = document.querySelector('.slider__item')
let imgNumber = imgPosition.length;
let counter = 0;

imgPosition.forEach(function(image,counter){
    image.style.left = counter*100 + "%"
})

function prev(){
    if(counter>=1){
        counter--;
    imgContainer.style.left = "-" + counter*100 + "%"
    }else{
        counter=imgNumber-1;
        imgContainer.style.left = "-" + counter*100 + "%"
    }
};
function next(){
    counter++;
    if (counter>=imgNumber) {counter=0}
    imgContainer.style.left = "-" + counter*100 + "%"
};
setInterval("next()",4000);

// click select catogory
const selectCategoryItem = document.querySelectorAll(".category-item")
selectCategoryItem.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("category-item_active")
    })
})