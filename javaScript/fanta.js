function changeFanta(){
     let displayFantaImage = document.getElementById('sprite-image');
     let displayOrangeImage = document.getElementById('orange');
     let changeFantaColour = document.getElementById('change-colour');
    
     if(displayFantaImage.src.match('Image/sprite.png'),displayOrangeImage.src.match('Image/orange2.png'), changeFantaColour.style.backgroundColor = 'rgb(242,124,0)'){
          displayFantaImage.src = 'Image/lipton.png'
          displayOrangeImage.src = 'Image/orange2.png'
          changeFantaColour.style.backgroundColor = 'rgb(242,124,0)'
         
          

     }else{
          displayFantaImage.src ='Image/lipton.png';
          displayOrangeImage.src = 'Image/orange2.png'
          changeFantaColour.style.backgroundColor = 'rgb(242,124,0)'
     }

     

     
     

};