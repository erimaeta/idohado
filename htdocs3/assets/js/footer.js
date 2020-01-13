function footer_write() {
  var html = "";
  html += '<footer class="l-footer">';
  html += '<div class="p-footer">';
  html += '<div class="u-inner">';
  html += '<h2 class="p-footer__title">いどはどドーナッツin函館</h2>';
  html += '<div class="p-footer__content mt-4">';
  html += '<div class="p-aboutIdohado">';
  html += '<div class="c-contactInfo is-light is-tabpc-w50">';
  html += '<a class="c-contactInfo__link" href="tel:09050755026">';
  html += '<!-- <i class="link-icon fas fa-mobile-alt"></i> -->';
  html += '<div class="link-icon"><script type="text/javascript">svg_tell();</script></div>';
  html += '<span class="link-text">090-5075-5026</spn>';
  html += '</a>';
  html += '<a class="c-contactInfo__link" href="mailto:810keikaku@gmail.com">';
  html += '<!-- <i class="link-icon fas fa-envelope"></i> -->';
  html += '<div class="link-icon"><script type="text/javascript">svg_mail();</script></div>';
  html += '<span class="link-text">810keikaku@gmail.com</span>';
  html += '</a>';
  html += '<a class="c-contactInfo__link" href="https://www.instagram.com/idohado/?hl=ja" target="_blank">';
  html += '<!-- <i class="link-icon fab fa-instagram"></i> -->';
  html += '<div class="link-icon"><script type="text/javascript">svg_insta();</script></div>';
  html += '<span class="link-text">InstagramID:idohado</span>';
  html += '</a>';
  html += '<a class="c-contactInfo__link" href="https://idohado.exblog.jp/" target="_blank">';
  html += '<!-- <i class="link-icon fas fa-pencil-alt"></i> -->';
  html += '<div class="link-icon"><script type="text/javascript">svg_blog();</script></div>';
  html += '<span class="link-text">BLOG</span>';
  html += '</a>';
  html += '</div>';
  html += '</div>';
  html += '<div class="p-aboutIdohado__map">';
  html += '<a class="mapLink" href="https://goo.gl/maps/LRuni7JYhGNHGQXP8" target="_blank">';
  html += '<div class="mapLink__icon"><script type="text/javascript">svg_map();</script></div>';
  html += '<span class="mapLink__text">函館市大町3-16</span>';
  html += '</a>';
  html += '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.7366285594!2d140.70726371543765!3d41.76933587923093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9ef3afa40c3e31%3A0x1d4db4789ce03808!2z44CSMDQwLTAwNTIg5YyX5rW36YGT5Ye96aSo5biC5aSn55S677yT4oiS77yR77yW!5e0!3m2!1sja!2sjp!4v1576942882397!5m2!1sja!2sjp" frameborder="0" style="border:0" allowfullscreen></iframe>';
  html += '<p class="map-text">路面電車「大町電停」前 郵便局隣の市営団地1階</p>';
  html += '</div>';
  html += '<p class="p-aboutIdohado__author">© 2019 いどはど〜移動して波動を送る〜</p>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  html += '</footer>';
  document.write(html);
}

function pagetop_write() {
  var html = "";
  html += '<div class="p-pageTop is-none" id="pagetop">';
  html += '<p class="p-pageTop__text">';
  html += "Let's GO<br>Page Top</p>";
  html += '<img class="p-pageTop__image img-fluid" src="assets/img/boy.png" alt="">';
  html += '</div>';
  document.write(html);
}