(function(){
  const food_img_slide=document.querySelector('.food-img-slide');
  if(food_img_slide){
    const food_img_array=['jeyukbokkeum-img','dakbogum-img','samgub-img','boggumbab-img'];

    food_img_slide.classList.add(food_img_array[0]);

    function food(){
      if(food_img_slide.classList.contains(food_img_array[0])){
        food_img_slide.classList.remove(food_img_array[0]);
        food_img_slide.classList.add(food_img_array[1]);
      }

      else if(food_img_slide.classList.contains(food_img_array[1])){
        food_img_slide.classList.remove(food_img_array[1]);
        food_img_slide.classList.add(food_img_array[2]);
      }

      else if(food_img_slide.classList.contains(food_img_array[2])){
        food_img_slide.classList.remove(food_img_array[2]);
        food_img_slide.classList.add(food_img_array[3]);
      }

      else if(food_img_slide.classList.contains(food_img_array[3])){
        food_img_slide.classList.remove(food_img_array[3]);
        food_img_slide.classList.add(food_img_array[0]);
      }

    }

    let control;
    control=setInterval(food,5000);
  }



})();
