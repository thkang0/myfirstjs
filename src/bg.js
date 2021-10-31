const body = document.querySelector("body");
const bgImages = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg'];

const randomNumber = Math.floor(Math.random() * bgImages.length);

function paintImage(n){
    console.log("paintImage", n);
    const image = new Image();
    image.src = bgImages[n];
    console.log(image.src);
    image.classList.add("bgImage");
    body.appendChild(image);
    //body.style.backgroundImage = bgImages[n];
    
}

paintImage(randomNumber);