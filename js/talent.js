//  --------ICON點選變色---------

let icon_h3 = document.querySelector(".talent_item").getElementsByTagName('h3');
// console.log(icon_h3);
let icon_p = document.querySelectorAll(".talent_item h3 p");
// console.log(icon_p);
let icon_span = document.querySelectorAll(".talent_item h3 span");
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





// 已看過
const portfolio_img = document.querySelectorAll('.portfolio_img');

// const portfolio_img_mask = document.querySelectorAll('.portfolio_img_mask');


for (let i=0;i<portfolio_img.length;i++){
    
    portfolio_img[i].addEventListener('click', function(e){
    //    e.preventDefault()
       portfolio_img[i].classList.add('mask_open')
        
    })
}

// const mask =  portfolio_img_a[i].querySelector('.portfolio_img_mask')
        // if(mask){
        //     mask.classList.add('mask_open');
        // }


        
// let talent_item_h3 = document.querySelectorAll('.talent_item h3');
// // console.log(talent_item_h3);
// let talent_item_h3_p_span = document.querySelectorAll('.talent_item h3 > p,span');
// // console.log(talent_item_h3_p_span);

// talent_item_h3.forEach(function(value){

//     this[value].addEventListener("click",
//     function(
//         console.log(this);
//         this[value].classList.toggle('focus');
//         talent_item_h3_p_span[value].classList.toggle('focus');

//     ))
    
// });


