//scroll_to plugin
$(function(){
  $('.btn_top').click(function(e){
    $(window).scrollTo(this.hash || 0,500)
  })
})


//퀵메뉴 중앙정렬
$(function(){
  $('.wing_btn').css('top',$(window).height()/2-$('.wing_btn').height()/2)

  $(window).scroll(function(){
    let point = $(this).scrollTop()+$(this).height()/2-$('.wing_btn').height()/2
    $('.wing_btn').stop().animate({top:point},500)
  })
})