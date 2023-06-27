function changeFanta(){
     let displayFantaImage = document.getElementById('sprite-image');
     let displayOrangeImage = document.getElementById('lemon');
     let changeFantaColour = document.getElementById('change-colour');
     let changeFantatext = document.getElementById('change-text');
    
     if(displayFantaImage.src.match('Image/sprite.png'),displayOrangeImage.src.match('Image/greenLemon.png'), changeFantaColour.style.backgroundColor = 'rgb(242,140,18)',
     changeFantatext.innerText = 'L I P T O N'){
          displayFantaImage.src = 'Image/lipton.png'
          displayOrangeImage.src = 'Image/orange2.png'
          changeFantaColour.style.backgroundColor = 'rgb(242,140,18)';
          changeFantatext.innerText = 'F A N T A';
         
          

     }else{
          displayFantaImage.src ='Image/lipton.png';
          displayOrangeImage.src = 'Image/orange2.png'
          changeFantaColour.style.backgroundColor = 'rgb(242,140,18)';
          changeFantatext.innerText = 'F A N T A';
     }

     

     
     

};