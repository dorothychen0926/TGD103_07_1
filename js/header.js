//讓密碼看的到

function regi_passwordToggle() {
let x = document.getElementById("regi_password");
    if (x.type === "password") {
      x.type = "text";
      $('#regi_show_password .off').css("display","block");
      $('#regi_show_password .on').css("display","none");
    } else {
      x.type = "password";
      $('#regi_show_password .off').css("display","none");
      $('#regi_show_password .on').css("display","block");
    }
  }

  function logi_passwordToggle() {
    let x = document.getElementById("login_password");
        if (x.type === "password") {
          x.type = "text";
          $('#login_show_password .off').css("display","block");
          $('#login_show_password .on').css("display","none");
        } else {
          x.type = "password";
          $('#login_show_password .off').css("display","none");
          $('#login_show_password .on').css("display","block");
        }
      }
    

// --------------------------------------------------

// 開啟彈窗按鈕宣告
// 開啟彈窗按鈕宣告
let login = document.getElementById("login");
let register = document.getElementById("register");
// 關閉彈窗按鈕宣告
let closeDialog = document.getElementsByClassName("closeDialog");
console.log(closeDialog);
// 轉登入按鈕宣告
let switch_login = document.getElementById("switch_login");
// 轉註冊按鈕宣告
let switch_register = document.getElementById("switch_register");
// ==顯示元素宣告
// 遮罩
let DivOverlapMask = document.querySelector(".DivOverlapMask");
//登入窗
let login_DivDialog = document.querySelector(".login_DivDialog");
//註冊窗
let regi_DivDialog = document.querySelector(".regi_DivDialog");


// 函數
function login_open_modal(){
    console.log("login_open_modal");
    DivOverlapMask.classList.remove('hidden');
    login_DivDialog.classList.remove('hidden');
    // body滾動隱藏
    $('body').css("overflow", "hidden");
}
function regi_open_modal(){
    console.log("regi_open_modal");
    DivOverlapMask.classList.remove('hidden');
    regi_DivDialog.classList.remove('hidden');
    // body滾動隱藏
    $('body').css("overflow", "hidden");
}
//
function close_modal(){
    console.log("close_modal");
    DivOverlapMask.classList.add('hidden');
    login_DivDialog.classList.add('hidden');
    regi_DivDialog.classList.add('hidden');
    // body滾動恢復
    $('body').css("overflow", "visible");
}

// 開啟彈窗按鈕監聽
login.addEventListener("click",login_open_modal);
register.addEventListener("click",regi_open_modal);

//轉跳監聽
//註冊轉登入
switch_login.addEventListener("click",function(){
    login_DivDialog.classList.remove('hidden');
    regi_DivDialog.classList.add('hidden');
});
//登入轉註冊
switch_register.addEventListener("click",function(){
    regi_DivDialog.classList.remove('hidden');
    login_DivDialog.classList.add('hidden');
    // 把scroll bar移到最頂端
    regi_DivDialog.scrollTop=0;
});

// 關閉彈窗按鈕監聽
for(i=0; i < closeDialog.length;i++ ){
    console.log(closeDialog[i]);
    closeDialog[i].addEventListener("click",close_modal);
}

DivOverlapMask.addEventListener("click",close_modal);

document.addEventListener('keydown',function(e){
    if(e.code ==='Escape' && !DivOverlapMask.classList.contains('hidden'))
        close_modal();
})


// ------------------導覽列-------------------

const hamburger = document.getElementById("hamburger");
const hamburger_expand = document.querySelector(".hamburger_expand");
const hamburger_close = document.querySelector(".hamburger_close");
const menu =document.querySelector(".menu");

hamburger_expand.addEventListener("click", () => {
    hamburger_expand.classList.add("display_none");
    hamburger_close.classList.remove("display_none");
    menu.classList.add("menu_active");
})

hamburger_close.addEventListener("click", () => {
    hamburger_close.classList.add("display_none");
    hamburger_expand.classList.remove("display_none");
    menu.classList.remove("menu_active");
})


// ------------------二階選單-------------------
$(document).ready( function() {

    $('.talent_rwd > a').click(function(e){
        console.log(this);
        e.preventDefault();
        $(this).siblings('.orderlist_rwd').slideToggle();
    })
    $('.case_rwd > a').click(function(e){
        console.log("20");;
        e.preventDefault();
        $(this).siblings('.orderlist_rwd').slideToggle();
    })

});

// 點選到的menu顯示裡面的ol
    // 回父找其它li
// $(this).siblings('.orderlist_rwd').slideDown().parent().siblings().find('.orderlist_rwd').slideUp();

