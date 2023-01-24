
//상품 다른파일에서 불러오기(js)

import bathbamList from "./sub_data.js"

const bathbamBox = document.querySelector('.bathbam_box')

for(let i=0; i<bathbamList.length; i++){
  //내가 만든 데이터의 길이만큼 적용해라.

  let bathbamDiv = document.createElement('div')
  //하나의 상품정보가 담긴 div박스하나를 만들어준다.
  bathbamDiv.setAttribute('class','pro_box')
  

  let bathbamImg = document.createElement('img')
  bathbamImg.setAttribute('src',bathbamList[i].src)
  bathbamDiv.appendChild(bathbamImg)
  // 이미지 변수를 하나 만들어주고 그 속성을 데이터값으로 넣어주고 만들어둔 박스에 이미지 추가
  bathbamBox.appendChild(bathbamDiv)

  let bathbamMaterialP  = document.createElement('p')
  let bathbamMaterialTxt = document.createTextNode(bathbamList[i].rawmaterial)
  
  bathbamMaterialP.setAttribute('class','material')

  bathbamMaterialP.appendChild(bathbamMaterialTxt)
  bathbamDiv.appendChild(bathbamMaterialP)

  let bathbamNameP = document.createElement('p')
  let bathbamNameTxt = document.createTextNode(bathbamList[i].name)
  bathbamNameP.appendChild(bathbamNameTxt)
  bathbamDiv.appendChild(bathbamNameP)

  bathbamNameP.setAttribute('class','name')

  let bathbamTitleP = document.createElement('p')
  let bathbamTitleTxt = document.createTextNode(bathbamList[i].title)
  bathbamTitleP.appendChild(bathbamTitleTxt)
  bathbamDiv.appendChild(bathbamTitleP)

  bathbamTitleP.setAttribute('class','title')

  

  

  let bathbamPriceP = document.createElement('p')
  let bathbamPriceTxt = document.createTextNode(bathbamList[i].price)
  bathbamPriceP.appendChild(bathbamPriceTxt)
  bathbamDiv.appendChild(bathbamPriceP)
  

  bathbamPriceP.setAttribute('class','price')
}


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




