var template_donutsDetail =
'{{#item}}'+
'<article class="detail" id="{{id}}">' +
  '<div class="detail__wrapper">' +
    '<div class="detail__img">' +
      '<img src="{{image_dir}}{{image_name}}" alt="{{title}}">' +
    '</div>' +
    '<h3 class="detail__title">{{title}}<span class="{{new}}"></span></h3>' +
    '<p class="detail__price">{{price}}円</p>' +
  '</div>' +
  '<div class="detail__wrapper is-text">' +
    '<p class="detail__description">{{description}}</p>' +
    '<details class="detail__material">' +
      '<summary>原材料</summary>' +
      '{{material}}' +
    '</details>' +
  '</div>' +
'</article>' +
'{{/item}}';

//おから系
var renderHtml11 = Mustache.render(template_donutsDetail, category01);
var parentElement11 = document.getElementById('donutsDetails01');
parentElement11.innerHTML = renderHtml11;
//バター系
var renderHtml12 = Mustache.render(template_donutsDetail, category02);
var parentElement12 = document.getElementById('donutsDetails02');
parentElement12.innerHTML = renderHtml12;
//その他
var renderHtml13 = Mustache.render(template_donutsDetail, category03);
var parentElement13 = document.getElementById('donutsDetails03');
parentElement13.innerHTML = renderHtml13;
//気まぐれフード
var renderHtml14 = Mustache.render(template_donutsDetail, category04);
var parentElement14 = document.getElementById('donutsDetails04');
parentElement14.innerHTML = renderHtml14;