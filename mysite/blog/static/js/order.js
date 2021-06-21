const total_price=document.querySelector('.total-price');
const add_jeyuk_price=document.querySelector('.add-food-jeyuk-price');
const delete_jeyuk_price=document.querySelector('.delete-food-jeyuk-price');
const add_dakbogum_price=document.querySelector('.add-food-dakbogum-price');
const delete_dakbogum_price=document.querySelector('.delete-food-dakbogum-price');
const add_samgub_price=document.querySelector('.add-food-samgub-price');
const delete_samgub_price=document.querySelector('.delete-food-samgub-price');
const add_bogumbab_price=document.querySelector('.add-food-bogumbab-price');
const delete_bogumbab_price=document.querySelector('.delete-food-bogumbab-price');
const side_dishes_kinds=document.querySelector('.food-align.side-dishes-kinds');
const rice_dishes_kinds=document.querySelector('.food-align.rice-dishes-kinds');
const soup_dishes_kinds=document.querySelector('.food-align.soup-dishes-kinds');
const dessert_dishes_kinds=document.querySelector('.food-align.dessert-dishes-kinds');
const payment_comfirm=document.querySelector('.payment-confirm');
const move_address=document.querySelector('.move-address')
let side_num=0; //side menu 개수
let rice_num=0;
let soup_num=0;
let dessert_num=0;

let food_num=[0,0,0,0];    //제육, 닭볶음탕, 우삼겹, 볶음밥   개수

let price=0;
if(total_price){
    total_price.innerHTML='total: '+price;
}


function calculate_price(){
  price=(food_num[0]*7000) + (food_num[1]*8000)+ (food_num[2]*6000)+(food_num[3]*7000)+ (side_num*500)+(rice_num*1000) +(soup_num*1000)+(dessert_num*0);
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


console.log(side_dishes_kinds.childNodes[1]);
console.log(side_dishes_kinds.childNodes[3]);
console.log(side_dishes_kinds.childNodes[5]);
console.log(side_dishes_kinds.childNodes[7]);

//side menu  기능 추가
for(let i =0; i<3; i++){
  let j=2*i+1;
  side_dishes_kinds.childNodes[j].addEventListener('click',function(e){
    if(side_dishes_kinds.childNodes[j].classList.contains('add')){//제거
        side_dishes_kinds.childNodes[j].classList.remove('add');
        side_num-=1;
        calculate_price();
    }
    else{ //선택;
      side_dishes_kinds.childNodes[7].classList.remove('add');
      side_dishes_kinds.childNodes[j].classList.add('add');
      side_num+=1;
      calculate_price();
    }

  });

}
side_dishes_kinds.childNodes[7].addEventListener('click',function(e){
    side_dishes_kinds.childNodes[7].classList.add('add');
    side_dishes_kinds.childNodes[1].classList.remove('add');
    side_dishes_kinds.childNodes[3].classList.remove('add');
    side_dishes_kinds.childNodes[5].classList.remove('add');
    side_num=0;
    calculate_price();

});


//rice menu 기능추가

for(let i =0; i<3; i++){
  let j=2*i+1;
  rice_dishes_kinds.childNodes[j].addEventListener('click',function(e){
    if(rice_dishes_kinds.childNodes[j].classList.contains('add')){//제거
        rice_dishes_kinds.childNodes[j].classList.remove('add');
        rice_num-=1;
        calculate_price();
    }
    else{ //선택;
      rice_dishes_kinds.childNodes[7].classList.remove('add');
      rice_dishes_kinds.childNodes[j].classList.add('add');
      rice_num+=1;
      calculate_price();
    }

  });

}
rice_dishes_kinds.childNodes[7].addEventListener('click',function(e){
    rice_dishes_kinds.childNodes[7].classList.add('add');
    rice_dishes_kinds.childNodes[1].classList.remove('add');
    rice_dishes_kinds.childNodes[3].classList.remove('add');
    rice_dishes_kinds.childNodes[5].classList.remove('add');
    rice_num=0;
    calculate_price();

});

//soup menu 기능 추가
for(let i =0; i<3; i++){
  let j=2*i+1;
  soup_dishes_kinds.childNodes[j].addEventListener('click',function(e){
    if(soup_dishes_kinds.childNodes[j].classList.contains('add')){//제거
        soup_dishes_kinds.childNodes[j].classList.remove('add');
        soup_num-=1;
        calculate_price();
    }
    else{ //선택;
      soup_dishes_kinds.childNodes[7].classList.remove('add');
      soup_dishes_kinds.childNodes[j].classList.add('add');
      soup_num+=1;
      calculate_price();
    }

  });

}
soup_dishes_kinds.childNodes[7].addEventListener('click',function(e){
    soup_dishes_kinds.childNodes[7].classList.add('add');
    soup_dishes_kinds.childNodes[1].classList.remove('add');
    soup_dishes_kinds.childNodes[3].classList.remove('add');
    soup_dishes_kinds.childNodes[5].classList.remove('add');
    soup_num=0;
    calculate_price();

});

//dessert menu 기능 추가
dessert_dishes_kinds.childNodes[1].addEventListener('click',function(e){
    dessert_dishes_kinds.childNodes[1].classList.add('add');
    dessert_dishes_kinds.childNodes[3].classList.remove('add');
    dessert_dishes_kinds.childNodes[5].classList.remove('add');
    dessert_dishes_kinds.childNodes[7].classList.remove('add');
    dessert_num=1;
    calculate_price();

});

dessert_dishes_kinds.childNodes[3].addEventListener('click',function(e){
    dessert_dishes_kinds.childNodes[3].classList.add('add');
    dessert_dishes_kinds.childNodes[1].classList.remove('add');
    dessert_dishes_kinds.childNodes[5].classList.remove('add');
    dessert_dishes_kinds.childNodes[7].classList.remove('add');
    dessert_num=1;
    calculate_price();

});

dessert_dishes_kinds.childNodes[5].addEventListener('click',function(e){
    dessert_dishes_kinds.childNodes[5].classList.add('add');
    dessert_dishes_kinds.childNodes[1].classList.remove('add');
    dessert_dishes_kinds.childNodes[3].classList.remove('add');
    dessert_dishes_kinds.childNodes[7].classList.remove('add');
    dessert_num=1;
    calculate_price();

});

dessert_dishes_kinds.childNodes[7].addEventListener('click',function(e){
    dessert_dishes_kinds.childNodes[7].classList.add('add');
    dessert_dishes_kinds.childNodes[1].classList.remove('add');
    dessert_dishes_kinds.childNodes[3].classList.remove('add');
    dessert_dishes_kinds.childNodes[5].classList.remove('add');
    dessert_num=0;
    calculate_price();

});


payment_comfirm.addEventListener('click',function(){
  if(price===0){
    alert('담긴 상품이 없습니다!')
  }
  else{
    let answer = window.confirm("총 "+price+ ", 결제하시겠습니까?");
    if (answer) {
      move_address.click();
    }
  }


});
