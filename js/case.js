// --------ICON點選變色---------


let icon_h3 = document.querySelector(".case_item").getElementsByTagName('h3');
// console.log(icon_h3);
let icon_p = document.querySelectorAll(".case_item h3 p");
// console.log(icon_p);
let icon_span = document.querySelectorAll(".case_item h3 span");
// console.log(icon_p);

function icon_change(e){
    //移除
    for(let i = 0;i<icon_h3.length;i++){
        icon_h3[i].classList.remove('changeFilter');
        icon_p[i].classList.remove('changeColor');
        icon_span[i].classList.remove('changeColor');
    }
    // 點選區域變色
    
    icon_h3[e].classList.add('changeFilter');
    icon_p[e].classList.add('changeColor');
    icon_span[e].classList.add('changeColor');
}






// --------頁籤---------

//頁籤按鈕
let filter_btn = document.getElementById("filter").getElementsByTagName('button');
//頁籤按鈕ICON
let filter_i = document.getElementById("filter").getElementsByTagName('i');

//勾選區域
let filter_content = document.querySelectorAll('.filter_content ul')


// console.log(filter_btn);
// console.log(input_checked);


// 頁籤點選
//已把onclick寫在標籤上
function filter_button(e){

    for(i=0;i<filter_btn.length;i++){
        //將勾選區塊隱藏
        filter_content[i].style.display="none";
        //頁籤恢復一般顏色
        filter_btn[i].classList.remove('filter_active');
        filter_i[i].classList.remove('filter_active');
    }
    
    //勾選區塊顯示
    filter_content[e].style.display="block";
    
    //選到的頁籤與icon變狀態
    filter_btn[e].classList.add('filter_active');
    filter_i[e].classList.add('filter_active');
    
    }





// --------點選項目出現在已搜尋的後面---------

//篩選區
$(".filter_content li input").on("click",function(){
    if($(this).prop("checked")){
    // 加入已搜尋
     $('.filter_selected #filter').append(`<span>${$(this).siblings().text()}<i class="fa-solid fa-xmark"></i></span>`); 
     // 加入已搜尋
    
     $(this).closest("li").siblings(".unlimited").css("color","var(--all_font)");
}else{
    $(this).closest("li").siblings(".unlimited").css("color","var(--logo_orange)");
}
}
);

// ICON點選加入已搜尋
$(".case_item h3").on("click",function(){
        $('.filter_selected #filter').append(`<span>${$(this).find('p').text()}<i class="fa-solid fa-xmark"></i></span>`)
}
);

//移除標籤
$(".filter_selected").on("click","span",function(){
    console.log($(this));
    $(this).remove();
}
)

// 加入收藏


let like = document.querySelectorAll('.like');
console.log(like);
let heart= document.querySelectorAll('.like i');
console.log(heart);



function click_like(e){
    console.log(heart[e].classList.contains("fa-solid"));
    if(heart[e].classList.contains("fa-solid")){
    
        like[e].innerHTML ='<i class="fa-regular fa-heart"></i>'+'加入收藏'
        like[e].style.color = "var(--all_font)";

    }else{

        like[e].innerHTML ='<i class="fa-solid fa-heart"></i>'+'已收藏'
        like[e].style.color = "var(--case_red)";
    }
    
}

//發名片

function click_namecard(){
    alert('名片發送成功!');
}


// for(let i = 0;i<like.length;i++){
//     like[i].style.color=""
// }
