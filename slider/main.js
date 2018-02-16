//Create new slides - 3 slides

var slide1 = new Slide("img/1.jpg","Manchester United", "The best club in the world");
var slide2 = new Slide("img/2.jpg","Manchester United2", "The best club in the world - 2");
var slide3 = new Slide("img/3.jpg","Manchester United3", "The best club in the world - 3");

var currentSlide =1;
slide1.show();

setInterval(next, 4000);

function previous(){
 if(currentSlide == 1){
   slide3.show();
   currentSlide = 3;
 }
 else if(currentSlide == 2){
    slide1.show();
    currentSlide = 1;
}
else if(currentSlide == 3){
   slide2.show();
   currentSlide = 2;
}
}

function next(){
   if(currentSlide == 1){
     slide2.show();
     currentSlide++;
   }
   else if(currentSlide == 2){
      slide3.show();
      currentSlide++;
  }
  else if(currentSlide == 3){
     slide1.show();
     currentSlide = 1;
  }
}
