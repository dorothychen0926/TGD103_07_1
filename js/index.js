
//輪播區
//宣告
let next = document.getElementById('next');
let previous = document.getElementById("previous");
let slider = document.querySelector(".slider");

next.addEventListener("click",scrollLeft);
previous.addEventListener("click",scrollright);


//Media Queries with JavaScript
var x = window.matchMedia("(max-width: 414px)");
// Call listener function at run time
scrollLeft(x);
 // Attach listener function on state changes
x.addEventListener(scrollLeft(x));


function scrollLeft(){
  // console.log("scrollLeft")
  // scrollLeft元素滚动条距离元素左边多少像素。
  if (x.matches) {
    if(scrollLeft==0){
      previous.disabled="disabled";
    }else{
      slider.scrollLeft += 300;
    }
  }else{
    if(scrollLeft==0){
      previous.disabled="disabled";
    }else{
      slider.scrollLeft += 350;
    }
  }
}

function scrollright(){
  let Width = slider.scrollWidth;
  // console.log("scrollright")
  // scrollLeft元素滚动条距离元素左边多少像素。
  if (x.matches) {
    if(scrollLeft==Width){
      previous.disabled="disabled";
    }else{
      slider.scrollLeft -= 300;
    }
  }else{
    if(scrollLeft==Width){
      previous.disabled="disabled";
    }else{
      slider.scrollLeft -= 350;
    }
  }


}




