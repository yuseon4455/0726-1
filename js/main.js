$(function(){
    // gnb 2단계 메뉴 액션: fade, slideDown
    $('#gnb .depth1 > li').hover(
      // mouseover
      function(){
        $(this)
          .find('.depth2')
          .addClass('on')
      },
      // mouseout
      function(){
        $(this)
          .find('.depth2')
          .removeClass('on')
      }
    );
  
    // slider
    let num = 0; // 이미지번호(전역변수)
  
    setInterval(function(){
      num++; // 이미지 번호 증가
      if(num > 2) { num = 0; } 
      $('.slider .sliders').css({
        transform: `translateX(calc(-960px * ${num}))`
      })  
    }, 4000)
  
  });