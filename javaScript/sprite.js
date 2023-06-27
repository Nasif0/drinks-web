function changeSprite(){
    let displaySpriteImage = document.getElementById('sprite-image');
    let displayOrangeImage = document.getElementById('lemon');
    let changeSpriteColour = document.getElementById('change-colour');
    let changeSpritetext = document.getElementById('change-text');
    
    if(displaySpriteImage.src.match('Image/sprite.png'), displayOrangeImage.src.match('Image/greenLemon.png'), changeSpriteColour.style.backgroundColor = 'rgb(73,194,135)',
    changeSpritetext.innerText ='S P R I T E'){
        
         displaySpriteImage.src = 'Image/sprite.png'
         displayOrangeImage.src = 'Image/greenLemon.png'
         changeSpriteColour.style.backgroundColor = 'rgb(73,194,135)'
         changeSpritetext.innerText ='S P R I T E'
         

    }
    else{
        displaySpriteImage.src ='Image/sprite.png';
        displayOrangeImage.src ='Image/greenLemon.png';
        changeSpriteColour.style.backgroundColor = 'rgb(73,194,135)'
        changeSpritetext.innerText ='S P R I T E'
    }
}

