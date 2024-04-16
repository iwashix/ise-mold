// スムーズスクロール
$(function(){
    $('a[href^="#"]').click(function() {
        var speed = 1000; // スクロールスピード(ミリ秒)
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});

// slick
$(".mv_slide").slick({
    fade: true,    // fedeオン
    speed: 1000,   // 画像切り替えにかかる時間（ミリ秒）
    autoplaySpeed: 900,   // 自動スライド切り替え速度
    arrows: false,         // 矢印表示・非表示
    autoplay: true,        // 自動再生
    slidesToShow: 1,       // スライド表示数
    slidesToScroll: 1,     // スライドする数
    infinite: true,         // 無限リピート オン・オフ
});

// ハンバーガーメニュー
$(".toggle_btn").on("click", function () {
    $("header").toggleClass("open");
  });

  // メニューのリンクをクリックした時

  $("a[href^='#']").on("click", function () {
    $("header").toggleClass("open");
  });

  $(".toggle_btn").on("click", function () {
    $(".menu").toggleClass("open");
  });


//   headerとの隙間
let header_height = $('#header').outerHeight();
$('.container').css('margin-top',header_height);