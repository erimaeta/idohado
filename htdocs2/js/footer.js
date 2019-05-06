////////////////////////////////////////////////////////////
//footer表示処理
////////////////////////////////////////////////////////////

function show_footer() {

	var footerinsert = '';

	footerinsert += '<div class="footer__cnt About">';
	footerinsert += '<a href="index.html"><h3 class="About__ttl">いどはどドーナッツin函館</h3></a>';
	footerinsert += '<table class="About__tbl">';
	footerinsert += '<tr>';
	footerinsert += '<td class="About__cnt">';
	footerinsert += '<a href="tel:09050755026">';
	footerinsert += '<i class="cnt__icon fas fa-fw fa-phone"></i>';
	footerinsert += '<p class="cnt__data">090-5075-5026</p>';
	footerinsert += '</a>';
	footerinsert += '</td>';
	footerinsert += '<td class="About__cnt">';
	footerinsert += '<a href="mailto:810keikaku@gmail.com">';
	footerinsert += '<i class="cnt__icon fas fa-envelope"></i>';
	footerinsert += '<p class="cnt__data">810keikaku@gmail.com</p>';
	footerinsert += '</a>';
	footerinsert += '</td>';
	footerinsert += '</tr>';
	footerinsert += '<tr>';
	footerinsert += '<td class="About__cnt">';
	footerinsert += '<a href="https://www.instagram.com/idohado/?hl=ja">';
	footerinsert += '<i class="cnt__icon fab fa-instagram"></i>';
	footerinsert += '<p class="cnt__data">InstagramID:idohado</p>';
	footerinsert += '</a>';
	footerinsert += '</td>';
	footerinsert += '<td class="About__cnt">';
	footerinsert += '<a href="https://idohado.exblog.jp/">';
	footerinsert += '<i class="cnt__icon fas fa-pencil-alt"></i>';
	footerinsert += '<p class="cnt__data">BLOG</p>';
	footerinsert += '</a>';
	footerinsert += '</td>';
	footerinsert += '</tr>';
	footerinsert += '</table>';
	footerinsert += '<div class="About__map">';
	footerinsert += '<a href="https://goo.gl/maps/mk16N9E4hM82" class="map__link"><i class="fas fa-fw fa-map-marker-alt"></i>函館市弥生町19-20</a>';
	footerinsert += '<iframe class="map__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.7585924703308!2d140.70510381583554!3d41.76886237923105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9ef3a6528629c7%3A0x8c30405a640324b3!2z44GE44Gp44Gv44Gp44OJ44O844OK44OD44OE!5e0!3m2!1sja!2sjp!4v1546501874143" frameborder="0" style="border:0" allowfullscreen></iframe>';
	footerinsert += '<p class="map__txt">大町電停から弥生坂を登り、一つ目の信号を過ぎ、すぐ右横の路地奥左です。</p>';
	footerinsert += '</div>';
	footerinsert += '</div>';
	footerinsert += '<p class="footer__auth">© 2018 いどはど〜移動して波動を送る〜</p>';

	var footer = document.getElementById('footer');
	footer.innerHTML = footerinsert;
}