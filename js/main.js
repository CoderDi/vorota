/*jQuery Masked Input Plugin*/
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(x){var a,e=navigator.userAgent,S=/iphone/i.test(e),i=/chrome/i.test(e),j=/android/i.test(e);x.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},x.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,v){var n,k,_,b,y,$,R;if(!t&&0<this.length){var e=x(this[0]).data(x.mask.dataName);return e?e():void 0}return v=x.extend({autoclear:x.mask.autoclear,placeholder:x.mask.placeholder,completed:null},v),n=x.mask.definitions,k=[],_=$=t.length,b=null,x.each(t.split(""),function(e,t){"?"==t?($--,_=e):n[t]?(k.push(new RegExp(n[t])),null===b&&(b=k.length-1),e<_&&(y=k.length-1)):k.push(null)}),this.trigger("unmask").each(function(){function o(){if(v.completed){for(var e=b;e<=y;e++)if(k[e]&&m[e]===c(e))return;v.completed.call(g)}}function c(e){return v.placeholder.charAt(e<v.placeholder.length?e:0)}function s(e){for(;++e<$&&!k[e];);return e}function l(e,t){var n,a;if(!(e<0)){for(n=e,a=s(t);n<$;n++)if(k[n]){if(!(a<$&&k[n].test(m[a])))break;m[n]=m[a],m[a]=c(a),a=s(a)}f(),g.caret(Math.max(b,e))}}function r(){h(),g.val()!=p&&g.change()}function u(e,t){for(var n=e;n<t&&n<$;n++)k[n]&&(m[n]=c(n))}function f(){g.val(m.join(""))}function h(e){for(var t,n=g.val(),a=-1,i=0,r=0;i<$;i++)if(k[i]){for(m[i]=c(i);r++<n.length;)if(t=n.charAt(r-1),k[i].test(t)){m[i]=t,a=i;break}if(r>n.length){u(i+1,$);break}}else m[i]===n.charAt(r)&&r++,i<_&&(a=i);return e?f():a+1<_?v.autoclear||m.join("")===d?(g.val()&&g.val(""),u(0,$)):f():(f(),g.val(g.val().substring(0,a+1))),_?i:b}var g=x(this),m=x.map(t.split(""),function(e,t){return"?"!=e?n[e]?c(t):e:void 0}),d=m.join(""),p=g.val();g.data(x.mask.dataName,function(){return x.map(m,function(e,t){return k[t]&&e!=c(t)?e:null}).join("")}),g.one("unmask",function(){g.off(".mask").removeData(x.mask.dataName)}).on("focus.mask",function(){var e;g.prop("readonly")||(clearTimeout(a),p=g.val(),e=h(),a=setTimeout(function(){g.get(0)===document.activeElement&&(f(),e==t.replace("?","").length?g.caret(0,e):g.caret(e))},10))}).on("blur.mask",r).on("keydown.mask",function(e){var t,n,a,i;g.prop("readonly")||(i=e.which||e.keyCode,R=g.val(),8===i||46===i||S&&127===i?(n=(t=g.caret()).begin,(a=t.end)-n==0&&(n=46!==i?function(e){for(;0<=--e&&!k[e];);return e}(n):a=s(n-1),a=46===i?s(a):a),u(n,a),l(n,a-1),e.preventDefault()):13===i?r.call(this,e):27===i&&(g.val(p),g.caret(0,h()),e.preventDefault()))}).on("keypress.mask",function(e){var t,n,a,i,r;g.prop("readonly")||(i=e.which||e.keyCode,r=g.caret(),e.ctrlKey||e.altKey||e.metaKey||i<32||!i||13===i||(r.end-r.begin!=0&&(u(r.begin,r.end),l(r.begin,r.end-1)),(t=s(r.begin-1))<$&&(n=String.fromCharCode(i),k[t].test(n))&&(function(e){for(var t,n,a=e,i=c(e);a<$;a++)if(k[a]){if(t=s(a),n=m[a],m[a]=i,!(t<$&&k[t].test(n)))break;i=n}}(t),m[t]=n,f(),a=s(t),j?setTimeout(function(){x.proxy(x.fn.caret,g,a)()},0):g.caret(a),r.begin<=y&&o()),e.preventDefault()))}).on("input.mask paste.mask",function(){g.prop("readonly")||setTimeout(function(){var e=h(!0);g.caret(e),o()},0)}),i&&j&&g.off("input.mask").on("input.mask",function(){var e=g.val(),t=g.caret();if(R&&R.length&&R.length>e.length){for(h(!0);0<t.begin&&!k[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<b&&!k[t.begin];)t.begin++;g.caret(t.begin,t.begin)}else{for(h(!0);t.begin<$&&!k[t.begin];)t.begin++;g.caret(t.begin,t.begin)}o()}),h()})}})}),$.fn.setCursorPosition=function(e){var t;$(this).get(0).setSelectionRange?$(this).get(0).setSelectionRange(e,e):$(this).get(0).createTextRange&&((t=$(this).get(0).createTextRange()).collapse(!0),t.moveEnd("character",e),t.moveStart("character",e),t.select())},$('input[type="tel"]').click(function(){"+7 (___) ___-__-__"==$(this).val()&&$(this).setCursorPosition(4)}),$('input[type="tel"]').keyup(function(){"+7 (8__) ___-__-__"==$(this).val()&&($(this).val($(this).val().replace("8","_")),$(this).mask("+7 (999) 999-99-99"),$(this).attr("placeholder","+7 (___) ___-__-__"),$(this).setCursorPosition(4))});

//E-mail Ajax Send
$("form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize()
  }).done(function() {
	yaCounter70691485.reachGoal('call');
    $(".popup").removeClass("active");

    if (th.hasClass("popup-form--cart")) {
      //заказ
      $("#popup-success2").addClass("active");
    } else {
      //заказать звонок
      $("#popup-success").addClass("active");
    }    

    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });  
  return false;
});


$(document).ready(function(){

  $(document).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  });

  $(".js-getcall").click(function(){
    $("#popup-call").addClass("active");
  });

  $(".js-cart").on("click", function(){
    $(".js-cart-item-title").text($(".js-item-title").text());
    $(".js-cart-item-img").attr("src", $(".js-item-img").attr("src"));
    $(".js-cart-item-img").attr("src", $(".js-item-img").attr("src"));
    $(".js-cart-count").val("1");
    $(".js-cart-one-price").text($(".js-item-price").text());
    calc();
    $("#popup-cart").addClass("active");
  });

  $(".js-popup-close").click(function(){
    $(this).parents(".popup").removeClass("active");
  });
  $(".js-butter").click(function(){
    $(".js-menu").addClass('active');
  });
  $(".js-menu-close").click(function(){
    $(".js-menu").removeClass('active');
  });

  $(".contacts__tab").click(function(){
    $(".contacts__tab").removeClass("active");
    $(this).addClass("active");
    if ($(this).data("tab") == "2") {
      $(".contacts__map").addClass("active");
    } else {
      $(".contacts__map").removeClass("active");
    }
  });

  function calc() {
    var one = parseInt($(".js-cart-one-price").text()),
        count = parseInt($(".js-cart-count").val());
    $(".js-cart-price").text((one*count));
    return;
  }
  $(".js-counter-minus").on("click", function(){
    var count = parseInt($(".js-cart-count").val() - 1);
    if (count < 1) count = 1
    $(".js-cart-count").val(count);
    calc();
  });
  $(".js-counter-plus").on("click", function(){
    $(".js-cart-count").val(parseInt($(".js-cart-count").val()) + 1);
    calc();
  });

  $(".full-content__block_title").click(function(){
    if ($(window).innerWidth() <= 768) {
      $(this).toggleClass("active");
      $(this).next(".full-content__block_content").slideToggle(200);
    }
  });

  
  $(".js-gallery-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

  $(".js-full-slider-nav").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.js-full-slider-for',
    arrows: false,
    focusOnSelect: true
  });
  $(".js-full-slider-for").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-full-slider-nav',
    arrows: true,
    draggable: false,
    touchMove: false,
    accessibility: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        touchMove: true,
      }
    }]
  });

  $(".js-gallery-full-nav").slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.js-gallery-full-for',
    arrows: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1170,
      settings: {
        slidesToShow: 4,
      }
    }]
  });
  $(".js-gallery-full-for").slick({
    infinite: false,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    asNavFor: '.js-gallery-full-nav',
    arrows: true,
    draggable: false,
    touchMove: false,
    accessibility: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        touchMove: true,
      }
    }]
  });


  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top});
    return false;
  });


  
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
    $(".input-date").mask("99.99.99");
  });

  $('form input[type="checkbox"]').change(function () {
    if ($(this).is(":checked")) {
        $(this).parents("form").find("input[type='submit']").attr("disabled", false);
    } else {
        $(this).parents("form").find("input[type='submit']").attr("disabled", true);
    }
  });  

  var myMap;
  ymaps.ready(function () {
    if ($("#map").length != 0) {
          myMap = new ymaps.Map('map', {
          center: [54.309312, 48.318690],
          zoom: 11,
        }),
        myPlacemark = new ymaps.Placemark([54.309312, 48.318690], {
          hintContent: 'г. Ульяновск, ул. Московское шоссе,  д. 78Б',
          balloonContent: 'г. Ульяновск, ул. Московское шоссе,  д. 78Б'
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'images/pin.png',
          iconImageSize: [33, 53],
          iconImageOffset: [-17, -53]
        });
        myMap.geoObjects.add(myPlacemark);
    }
    
  });

  Date.prototype.getDaysInMonth = function() {
    return (new Date(this.getFullYear(), this.getMonth() + 1, 0)).getDate();
  };
  var now = new Date(),
      year = now.getFullYear(),
      month = now.getMonth() + 1,
      day = now.getDate(),
      dayInMonth = now.getDaysInMonth(),
      text = '';
  if ((day < 15) || (day == dayInMonth)) {
    if (day == dayInMonth) {
      month += 1;
    }
    if (month > 12) {
      month = 1;
      year += 1;
    }
    if (month < 10) {
      month = '0' + month;
    }
    text = '15.' + month + '.' + year;
  } else {
    if (month <= 9) {
      month = '0' + month;
    }
    text = dayInMonth + '.' + month + '.' + year;
  }
  
  $(".date").text(text);


});