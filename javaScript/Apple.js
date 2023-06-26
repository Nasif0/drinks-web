function changeLipton(){
     let displayLiptonImage = document.getElementById('sprite-image');
     let displayAppleImage = document.getElementById('orange');
     let changeLiptonColour = document.getElementById('change-colour');
     

     
     if(displayLiptonImage.src.match('Image/sprite.png'), displayAppleImage.src.match('Image/orange.png'), changeLiptonColour.style.backgroundColor = 'rgb(234,115,115)'){
          displayLiptonImage.src = 'Image/lipton.png'
          displayAppleImage.src = 'Image/apple.png'
          changeLiptonColour.style.backgroundColor = 'rgb(234,115,115)'
          

     }else{
          displayLiptonImage.src ='Image/lipton.png';
          displayAppleImage.src ='Image/apple.png';
          changeLiptonColour.style.backgroundColor = 'rgb(234,115,115)'
     }

     
    
     
     

};

