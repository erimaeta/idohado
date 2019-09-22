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