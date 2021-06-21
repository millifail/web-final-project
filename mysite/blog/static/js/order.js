const total_price=document.querySelector('.total-price');
const add_jeyuk_price=document.querySelector('.add-food-jeyuk-price');
const delete_jeyuk_price=document.querySelector('.delete-food-jeyuk-price');
const add_dakbogum_price=document.querySelector('.add-food-dakbogum-price');
const delete_dakbogum_price=document.querySelector('.delete-food-dakbogum-price');

const add_samgub_price=document.querySelector('.add-food-samgub-price');
const delete_samgub_price=document.querySelector('.delete-food-samgub-price');

const add_bogumbab_price=document.querySelector('.add-food-bogumbab-price');
const delete_bogumbab_price=document.querySelector('.delete-food-bogumbab-price');

let food_num=[0,0,0,0];    //제육, 닭볶음탕, 우삼겹, 볶음밥   개수

let price=0;
total_price.innerHTML='total: '+price;

function calculate_price(){
  price=(food_num[0]*7000) + (food_num[1]*8000)+ (food_num[2]*6000)+(food_num[3]*7000);
  total_price.innerHTML='total: '+price;
}

add_jeyuk_price.addEventListener('click',function(){
  food_num[0]+=1;
  calculate_price();
});
delete_jeyuk_price.addEventListener('click',function(){
  if(food_num[0]>0){
      food_num[0]-=1;
      calculate_price();
  }

});

add_dakbogum_price.addEventListener('click',function(){
  food_num[1]+=1;
  calculate_price();
});
delete_dakbogum_price.addEventListener('click',function(){
  if(food_num[1]>0){
    food_num[1]-=1;
    calculate_price();
  }

});


add_samgub_price.addEventListener('click',function(){
  food_num[2]+=1;
  calculate_price();
});
delete_samgub_price.addEventListener('click',function(){
  if(food_num[2]>0){
    food_num[2]-=1;
    calculate_price();
  }

});

add_bogumbab_price.addEventListener('click',function(){
  food_num[3]+=1;
  calculate_price();
});
delete_bogumbab_price.addEventListener('click',function(){
  if(food_num[3]>0){
    food_num[3]-=1;
    calculate_price();
  }

});


console.log(food_num);
