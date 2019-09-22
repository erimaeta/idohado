var template_donutsMenu =
'{{#item}}'+
  '<li class="donutsMenu__item">'+
  	'<a href="#{{id}}" class="c-donutsMenu">'+
			'<div class="c-donutsMenu__left">' +
				'<div class="menu-image"><img src="{{image_dir}}/thumb/{{image_name}}" alt="{{txt}}"></div>' +
				'<p class="menu-title">{{title}}</p>' +
			'</div>' +
			'<div class="c-donutsMenu__right">' +
				'<p class="menu-price">{{price}}円</p>' +
			'</div>' +
  	'</a>'+
  '</li>'+
'{{/item}}';

//おから系
var renderHtml01 = Mustache.render(template_donutsMenu, category01);
var parentElement01 = document.getElementById('donutsMenu01');
parentElement01.innerHTML = renderHtml01;
//バター系
var renderHtml02 = Mustache.render(template_donutsMenu, category02);
var parentElement02 = document.getElementById('donutsMenu02');
parentElement02.innerHTML = renderHtml02;
//その他
var renderHtml03 = Mustache.render(template_donutsMenu, category03);
var parentElement03 = document.getElementById('donutsMenu03');
parentElement03.innerHTML = renderHtml03;