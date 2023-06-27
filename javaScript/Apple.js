function changeLipton(){
     let displayLiptonImage = document.getElementById('sprite-image');
     let displayAppleImage = document.getElementById('lemon');
     let changeLiptonColour = document.getElementById('change-colour');
     let changeLiptontext = document.getElementById('change-text');
     
     

     
     if(displayLiptonImage.src.match('Image/sprite.png'), displayAppleImage.src.match('Image/greenLemon.png'),  
      changeLiptonColour.style.backgroundColor = 'rgb(234,115,115)', changeLiptontext.innerText ='S P R I T E'){
          
          displayLiptonImage.src = 'Image/apple-img3.png';
          
          displayAppleImage.src = 'Image/apple.png';
         
          changeLiptonColour.style.backgroundColor = 'rgb(234,115,115)';
          
          changeLiptontext.innerText ='A P P L E'; 
          

     } 
     else{
          
          displayLiptonImage.src ='Image/apple-img3.png';
          
          displayAppleImage.src ='Image/apple.png';
          
          changeLiptonColour.style.backgroundColor = 'rgb(234,115,115)';
          
          changeLiptontext.innerText ='A P P L E'; 
     }

     
    
     
     

};

