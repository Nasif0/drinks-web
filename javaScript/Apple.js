 document.getElementById('change-lipton').addEventListener('click',function(){
var image = document.querySelector('#lipton');
image.src = 'Image/lipton.png';
var appleImage = document.querySelector('#apple');
appleImage.src = 'Image/apple.png';
appleImage.style.width = '550px'
appleImage.style.marginTop = '-110px'
appleImage.style.marginLeft = '-50px'

document.getElementById('change-colour').style.backgroundColor ='rgb(234,115,115)';
document.getElementById('lipton-text').innerText = 'L I P T O N';
      

 });

// document.getElementById('change-lipton').addEventListener('click',function(){
//       var appleImage = document.querySelector('#apple');
//       appleImage.src = 'Image/pngegg (2)';
// })