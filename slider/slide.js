//create slide

class Slide{
  constructor(url, title, subtitle){
    this.url      = url;
    this.title    = title;
    this.subtitle = subtitle;
    }
    show(){
      var slider       = document.querySelector(".slides");
      slider.innerHTML = `<div class='item'><h2>${this.title}</h2>
      <img src = '${this.url}'>
      <p>${this.subtitle}</p>
      </div>`;
    }
}
