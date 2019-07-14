var tempate_list =
	'{{#item}}'+
    '<li class="MenuList__item is-order">'+
      '<div class="Item is-left">'+
        '<div class="Item__icon is-orderMenu">'+
          '<img src="{{imgdir}}thumb/{{img}}">'+
        '</div>'+
      '</div>'+
      '<div class="Item is-right">'+
      	'<div class="Item__wrappar is-orderMenu">'+
	        '<h4 class="Item__ttl">{{ttl}}</h4>'+
	      '</div>'+
      	'<div class="Item__wrappar is-price">'+
	        '<p class="Item__price is-orderMenu">{{price}}円</p>'+
      		'<input type="number" min="1" max="10"><p class="Item__tani">個</p>'+
      	'</div>'+
      '</div>'+

    '</li>'+
  '{{/item}}';

function show_menu() {
	var html11 = Mustache.render(tempate_list, data1);//おから系
	var html12 = Mustache.render(tempate_list, data2);//バター系
	var html13 = Mustache.render(tempate_list, data3);//卵なし系

	var element11 = document.getElementById('menulist1');
	var element12 = document.getElementById('menulist2');
	var element13 = document.getElementById('menulist3');

	element11.innerHTML = html11;
	element12.innerHTML = html12;
	element13.innerHTML = html13;
};