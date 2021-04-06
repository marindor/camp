$(document).ready(function () {
   //mouse wheel
   $(document).ready(function(){
      $('.section').on('mousewheel',function(e,delta){
         if (delta>0) {
            var prev = $(this).prev().offset().top;
            $('html,body').stop().animate({scrollTop:prev}, 600, 'linear');
         } else if (delta<0) {
            // 마우스 휠을 내림
            var next = $(this).next().offset().top;
            $('html,body').stop().animate({scrollTop:next}, 600, 'linear');
         }
      });
   });


   //side scroll event
   $('.one_depth_tab_menu li a, #side_scroll_menu li a').click(function () {
      var ot = $(this.hash).offset().top;
      $('html,body').animate({ scrollTop: ot }, 1000, 'easeOutExpo');
      // console.log($(this.hash));
      // console.log(ot);
   });

   //메인이미지 슬라이더 세팅------------------------------------------------------------------------
   $('.bxslider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: false,
      pager: true,
      slideWidth: 600,
      pause:3000
   });





   // 섹션1. 헤더
   // 2차 메뉴는 처음에는 가려져 있다.
   $('.two_depth_tab_menu').hide();
   $('.navigation').css({ height: 0 });
   // 텝 메뉴에 마우스를 올리면 2차 메뉴 팝업창이 뜬다.
   $('.one_depth_tab_menu').mouseenter(function () {
      $('.two_depth_tab_menu').stop().slideDown();
      $('.navigation').css({ height: 330 });
   });
   // 텝 메뉴에 마우스가 떠나면 2차 메뉴 팝업창이 닫힌다.
   $('.navigation').mouseleave(function () {
      $('.two_depth_tab_menu').stop().slideUp();
      $('.navigation').css({ height: 0 });
   });


   //-------------------------------------------------------------------------------------------

   //섹션2. 오늘의 용품
   //평소에 캠핑용품상세창은 닫혀있다.
   $('.todayTool_contents').hide();
   //캠핑용품을 클릭하면 상세창이 팝업된다.
   $('#todayTool_list ul li').click(function () {
      $('.todayTool_contents').show();
   });
   //엑스버튼을 누르면 상세창이 닫힌다.
   $('.todayTool_contents_button').click(function () {
      $('.todayTool_contents').hide();
   });

   //섹션3. 오늘의 텐트
   //스크롤에 반응하여 날아오는 작은 윈도우들
   //li가 아래에서 위로 나타남
   $(window).scroll(function () {
      var st = $(this).scrollTop();
      var sst = st;
      // $('#todayTent h2').text(st);
      if (st < 1300) {
         $('#todayTent_animation_image ul li').eq(0).stop().animate({ left: -500 }, 100, 'easeOutExpo', function () {
            $('#todayTent_animation_image ul li').eq(1).stop().animate({ left: -500 }, 200, 'easeOutExpo', function () {
               $('#todayTent_animation_image ul li').eq(2).stop().animate({ right: -500 }, 300, 'easeOutExpo', function () {
                  $('#todayTent_animation_image ul li').eq(3).stop().animate({ right: -500 }, 400, 'easeOutExpo');
               });
            });
         });
      }
      else if ((st >= 1300) && (st < 2800)) {
         $('#todayTent_animation_image ul li').eq(0).stop().animate({ left: 100 }, 100, 'easeOutExpo', function () {
            $('#todayTent_animation_image ul li').eq(1).stop().animate({ left: 100 }, 200, 'easeOutExpo', function () {
               $('#todayTent_animation_image ul li').eq(2).stop().animate({ right: 100 }, 300, 'easeOutExpo', function () {
                  $('#todayTent_animation_image ul li').eq(3).stop().animate({ right: 100 }, 400, 'easeOutExpo');
               });
            });
         });
      }
      else {
         $('#todayTent_animation_image ul li').eq(0).stop().animate({ left: -500 }, 100, 'easeOutExpo', function () {
            $('#todayTent_animation_image ul li').eq(1).stop().animate({ left: -500 }, 200, 'easeOutExpo', function () {
               $('#todayTent_animation_image ul li').eq(2).stop().animate({ right: -500 }, 300, 'easeOutExpo', function () {
                  $('#todayTent_animation_image ul li').eq(3).stop().animate({ right: -500 }, 400, 'easeOutExpo');
               });
            });
         });
      }
      if (sst < 2000) {
         $('.usage_video_container').stop().animate({opacity:0},1000);
      }
      else if(sst >= 2000 && sst<4500) {
         $('.usage_video_container').stop().animate({opacity:1},1000);
      }
      else{
         $('.usage_video_container').stop().animate({opacity:0},1000);
      }
   });



   //섹션4. 사용 설명서
   //평소에 동영상 리스트 창은 닫혀있다.
   $('#usage_video_PopupList').hide();
   //역삼각버튼을 클릭하면 리스트 창이 나온다.
   $('#usage_list_pupupButton').click(function () {
      $('#usage_video_PopupList').show();
   });
   //마우스로 리스트영역을 클릭하면 창이 닫힌다.
   $('#usage_video_PopupList').click(function () {
      $('#usage_video_PopupList').hide();
   });




   //섹션5. 경험담
   // https://pgtd.tistory.com/221?category=869297
   $('.owl-carousel').owlCarousel({
      loop:true,
      margin:200,
      nav:true,
      center:true,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      dots:false,
      nav: true,
      responsive:{
          0:{
              items:1
          },
          500:{
              items:2
          },
          500:{
              items:3
          }
      }
  });




   //섹션6. 푸터
   //코드 없음
});