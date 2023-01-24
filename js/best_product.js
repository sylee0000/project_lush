document.addEventListener("DOMContentLoaded",()=>{

  let hoverboxBam = document.querySelectorAll('#hoverbox_bam')
  let hoverboxShower = document.querySelectorAll('#hoverbox_shower')
  let hoverboxBody = document.querySelectorAll('#hoverbox_body')
  let hoverboxFace = document.querySelectorAll('#hoverbox_face')
  let hoverboxHair = document.querySelectorAll('#hoverbox_hair')
  let hoverboxPerfume = document.querySelectorAll('#hoverbox_perfume')


  for (let i=0; i<hoverboxBam.length; i++){
    hoverboxBam[i].addEventListener('mouseover',function(){
      this.children[0].src = "./images/content01_bathbam/pro0" + i + "_on_bam.jpg"
      this.children[0].style.scale = '0.8' 
      this.children[0].style.borderRadius = '150px 150px'
    })

    hoverboxBam[i].addEventListener('mouseout',function(){
      this.children[0].src = "./images/content01_bathbam/pro0" + i + "_off_bam.png"
      this.children[0].style.scale = '1'
    })
  }


  for(let i=0; i<hoverboxShower.length; i++){
    hoverboxShower[i].addEventListener('mouseover',function(){
      this.children[0].src = "./images/content01_shower/pro0" + i + "_on_shower.jpg"
      this.children[0].style.scale = '0.8'
      this.children[0].style.borderRadius = '150px 150px' 

    })

    hoverboxShower[i].addEventListener('mouseout',function(){
      this.children[0].src = "./images/content01_shower/pro0" + i + "_off_shower.png"
      this.children[0].style.scale = '1'
    })
  }


  for(let i=0; i<hoverboxBody.length; i++){
    hoverboxBody[i].addEventListener('mouseover',function(){
      this.children[0].src = "./images/content01_body_cl/pro0" + i + "_on_bodycl.jpg"
      this.children[0].style.scale = '0.8'
      this.children[0].style.borderRadius = '150px 150px' 
    })

    hoverboxBody[i].addEventListener('mouseout',function(){
      this.children[0].src = "./images/content01_body_cl/pro0" + i + "_off_bodycl.png"
      this.children[0].style.scale = '1'
    })
  }



  for(let i=0; i<hoverboxFace.length; i++){
    hoverboxFace[i].addEventListener('mouseover',function(){
      this.children[0].src = "./images/content01_face/pro0" + i + "_on_face.jpg"
      this.children[0].style.scale = '0.8'
      this.children[0].style.borderRadius = '150px 150px' 
    })

    hoverboxFace[i].addEventListener('mouseout',function(){
      this.children[0].src = "./images/content01_face/pro0" + i + "_off_face.png"
      this.children[0].style.scale = '1'
    })
  }




  for(let i=0; i<hoverboxHair.length; i++){
    hoverboxHair[i].addEventListener('mouseover',function(){
      this.children[0].src = "./images/content01_hair/pro0" + i + "_on_hair.jpg"
      this.children[0].style.scale = '0.8'
      this.children[0].style.borderRadius = '150px 150px' 
    })

    hoverboxHair[i].addEventListener('mouseout',function(){
      this.children[0].src = "./images/content01_hair/pro0" + i + "_off_hair.png"
      this.children[0].style.scale = '1'
    })
  }


    for(let i=0; i<hoverboxPerfume.length; i++){
      hoverboxPerfume[i].addEventListener('mouseover',function(){
        this.children[0].src = "./images/content01_perfume/pro0" + i + "_on_perfume.jpg"
        this.children[0].style.scale = '0.8'
        this.children[0].style.borderRadius = '150px 150px' 
      })
  
      hoverboxPerfume[i].addEventListener('mouseout',function(){
        this.children[0].src = "./images/content01_perfume/pro0" + i + "_off_perfume.png"
        this.children[0].style.scale = '1'
      })
    }
})