var template =
		'{{#item}}'+
    	'<article class="Menu__Item" id="{{id}}">'+
    		'<div class="Item__wrapper is-img">'+
		    	'<div class="Item__img">'+
		    		'<img src="{{imgdir}}{{img}}">'+
		    	'</div>'+
	    		'<h3 class="Item__ttl">{{ttl}}</h3>'+
  	  		'<p class="Item__price"><span>{{price}}</span>円</p>'+
	    	'</div>'+
	    	'<div class="Item__wrapper is-txt">'+
	    		'<p class="Item__txt">{{txt}}</p>'+
	    		'<details class="Item__zairyo"><summary>原材料</summary>{{zairyo}}</details>'+
	    	'</div>'+
    	'</article>'+
		'{{/item}}';

var tempate_list =
	'{{#item}}'+
    '<li class="MenuList__item">'+
      '<a class="Item__link" href="#{{id}}">'+
      	'<div class="Item__wrappar is-menu">'+
	        '<div class="Item__icon is-menu">'+
	          '<img src="{{imgdir}}thumb/{{img}}">'+
	        '</div>'+
	        '<h4 class="Item__ttl">{{ttl}}</h4>'+
	      '</div>'+
        '<p class="Item__price is-menu">{{price}}円</p>'+
      '</a>'+
    '</li>'+
  '{{/item}}';

function show_menu() {
	var html11 = Mustache.render(tempate_list, data1);//おから系
	var html12 = Mustache.render(tempate_list, data2);//バター系
	var html13 = Mustache.render(tempate_list, data3);//卵なし系

	var html21 = Mustache.render(template, data1);//おから系
	var html22 = Mustache.render(template, data2);//バター系
	var html23 = Mustache.render(template, data3);//卵なし系

	var element11 = document.getElementById('menulist1');
	var element12 = document.getElementById('menulist2');
	var element13 = document.getElementById('menulist3');

	var element21 = document.getElementById('menu1');
	var element22 = document.getElementById('menu2');
	var element23 = document.getElementById('menu3');

	element11.innerHTML = html11;
	element12.innerHTML = html12;
	element13.innerHTML = html13;

	element21.innerHTML = html21;
	element22.innerHTML = html22;
	element23.innerHTML = html23;
};