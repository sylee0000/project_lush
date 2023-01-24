$(function(){
  const lnbBtn = $('#btn_lnb01')
  const fullMenu = $('#fullmenu_01')

  lnbBtn.mouseover(function(){
    fullMenu.stop().slideDown(300)
  })
  lnbBtn.mouseout(function(){
    fullMenu.stop().slideUp(300)
  })
})

$(function(){
  const lnbBtn02 = $('#btn_lnb02')
  const fullMenu02 = $('#fullmenu_02')

  lnbBtn02.mouseover(function(){
    fullMenu02.stop().slideDown(300)
  })
  lnbBtn02.mouseout(function(){
    fullMenu02.stop().slideUp(300)
  })
})

