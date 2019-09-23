/*
 共通
*/

//
// ページトップ表示判定
//
window.onscroll = function() {
    let showVol = 150;
    let noneClass = "is-none";

    var nowVol = window.scrollY;
    var pagetopE = document.getElementById("pagetop");

    if(nowVol < showVol) {
        //transitionを掛けたいので、cssでdiplayを制御する
        //pagetopE.style.display = "none";
        pagetopE.classList.add(noneClass);
    }else {
        //pagetopE.style.display = "block";
        pagetopE.classList.remove(noneClass);
    }
}

//
// ページトップへ
//
function goPageTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

//
// イベントリスナーの設定
//
function setEventListener() {
    var pagetopE = document.getElementById("pagetop");
    pagetopE.addEventListener("click", goPageTop);
}

//
// メニュー詳細へ
//
function goDonutsDetail(buttonNo) {
    // var speed = 500;
    // let buttonClassName = "goDonutsDetail";
    // var buttons = document.getElementsByClassName(buttonClassName);
    // var button = buttons[buttonNo];
    // var href = button.getAttribute("href");
}
function arrowChange() {
    //あとで直す
    //		let buttonClass = "c-buttonLink";
    //		let buttomClass = "is-arrowBottom";
    //		var buttonE = document.getElementsByClassName(buttonClass);
    //		buttonE.classList.contains(buttomClass);
}
// $(function () {
//     $('a[href^="#"]').click(function () {
//         var speed = 500;
//         var href = $(this).attr("href");
//         var target = $(href == "#" || href == "" ? 'html' : href);
//         var position = target.offset().top;
//         $("html, body").animate({ scrollTop: position }, speed, "swing");
//         return false;
//     });
// });