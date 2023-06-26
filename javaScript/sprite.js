function changeSprite(){
    let displaySpriteImage = document.getElementById('sprite-image');
    let displayOrangeImage = document.getElementById('orange');
    let changeSpriteColour = document.getElementById('change-colour');
    
    if(displaySpriteImage.src.match('Image/sprite.png'), displayOrangeImage.src.match('Image/orange2.png'), changeSpriteColour.style.backgroundColor = 'rgb(73,194,135)'){
        
         displaySpriteImage.src = 'Image/sprite.png'
         displayOrangeImage.src = 'Image/orange2.png'
         changeSpriteColour.style.backgroundColor = 'rgb(73,194,135)'
         

    }
    else{
        displaySpriteImage.src ='Image/sprite.png';
        displayOrangeImage.src ='Image/orange2.png';
        changeSpriteColour.style.backgroundColor = 'rgb(73,194,135)'
    }
}

