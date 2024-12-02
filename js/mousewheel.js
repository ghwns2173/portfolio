$(document).ready(function(){
  var ww=$(window).width();
  var wh=$(window).height();
  layout();
  $(window).resize(function(){
      ww=$(window).width();
      wh=$(window).height();
      layout();
  });
  function layout(){
      var bg=['red','green','blue','yellow'];
      $('section').css({
          backgroundColor:function(index){
              return bg[index];
          },
          width:ww,
          height:wh,
          lineHeight:wh+'px'
      });
  }
  $('#pagination').click(function(){
      var ht=$(window).height();
      var i=$(this).index();
      var nowtop=i*ht;
      $('html,body').stop().animate({
          scrollTop:nowtop
      },1000);
  });
  // 스크롤이벤트 감지
  $(window).scroll(function(){
      var ht=$(window).height();
      var scroll=$(window).scrollTop();
      for(i=0;i<5;i++){
          if(scroll >= ht*i && scroll < ht*(i+1)){
              $('#pagination').removeClass('on');
              $('#pagination').eq(i).addClass('on');
          }
      }
  });
  $('section').on('mousewheel',function(event,delta){
      if(delta > 0){
          var prev=$(this).prev().offset().top;
          $('html,body').stop().animate({
              scrollTop:prev
          },2000,'easeInCirc');
      }else if(delta < 0){
          var next=$(this).next().offset().top;
          $('html,body').stop().animate({
              scrollTop:next
          },1000,'easeInCirc');
      }
  });
}); // end