document.addEventListener("DOMContentLoaded", function(event) { 
 
  // slider animation 
  let sliderItem = document.getElementById("slider__item");
  let sliderItem2 = document.getElementById("slider__item2");
  
  let slider = [sliderItem, sliderItem2];
  
  TweenMax.from(slider[0], 50, {x: "99%", force3D: true, rotation: 0.001, repeat: -1 });
  TweenMax.to(slider[1], 50, {x: "-100%", force3D: true, rotation: 0.001, repeat: -1 });
  // slider animation END
  
});
