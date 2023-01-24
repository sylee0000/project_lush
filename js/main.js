
//메인비주얼 swiper api plugin
$(function(){
  let swiper = new Swiper(".myMain", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay:true,
    loop:true
  })
})


//시즌상품 swiper api plugin
$(function(){
  let swiper = new Swiper(".mySeason", {
    slidesPerView: 5,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay:true,
    loop:true
  })
})


//퀵메뉴(러쉬세일)
document.addEventListener('DOMContentLoaded',()=>{
  const btnSale = document.querySelector('.btn_sale')
  const saleList = document.querySelector('.sale_list')


  btnSale.addEventListener('mouseenter',()=>{
    btnSale.style.padding = '0 90px 250px 0',
    btnSale.style.backgroundColor = 'salmon',
    btnSale.style.transition = 'all 0.8s'

    setTimeout(function(){
      saleList.style.display = 'block'
    },900)
    
  })

  btnSale.addEventListener('mouseleave',()=>{
    btnSale.style.padding = '0',
    btnSale.style.backgroundColor = 'green',
    saleList.style.display = 'none'
  })
})



//hot_event js
$(window).scroll(function(){
  if($(this).scrollTop() > $('.season').offset().top){
    $('.event01').animate({top:0},300)
    $('.event02').delay(300).animate({top:0},300)
    $('.event03').delay(600).animate({top:0},600)
    $('.event_more').delay().animate({top:0},300)
  } else{
    $('.hot_event .hot_event_box div').stop().animate({top:320},300)
  }
})


//공지사항 jQuery
$(function(){
  let swiper = new Swiper(".myNotice", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true
    }
  })
})

//공지사항 클릭시 jQuery
$(function(){
  let btnNotice = $('#btn_notice')
  let btnEvent = $('#btn_event')
  let noticeTitle = $('#notice_title')
  let eventTitle = $('#event_title')
  let noticeState = false
  let eventState = false

  btnNotice.click(function(){
    noticeState = true
    btnNotice.css('color','#999')
    noticeTitle.css('color','#999')
    
    if(eventState){
      btnEvent.css('color','black')
    }
  })

  btnEvent.click(function(){
    eventState = true
    btnEvent.css('color','#999')
    eventTitle.css('color','#999')
    
    if(noticeState){
      btnNotice.css('color','black')
    }
  })
})
