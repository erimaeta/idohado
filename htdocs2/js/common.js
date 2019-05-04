//スクロール量で判定
window.onscroll = function() {
  var y = window.scrollY;

  if(150 < y){
    var element = document.getElementById('pagetop');
    showBoy(true);
  }
  if(y < 150){
    var element = document.getElementById('pagetop');
    showBoy(false);
  }
}

//不安定ボーイの表示・非表示を司る関数
function showBoy(showFlag) {
  var e = document.getElementById('pagetop');
  if(showFlag == true){
    e.className = "PageTop is-show";
  }else{
    e.className = "PageTop is-none";
  }
}

//PageTopの動作
function pagetop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}