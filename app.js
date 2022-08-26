let product_cont = document.querySelector('.slider-inner')

product_cont.addEventListener('wheel',(event)=>{
    event.preventDefault();
    product_cont.scrollLeft +=event.deltaY/5;
})


const nextButton = document.querySelector('#next-button');

nextButton.onclick = function (){
    document.querySelector('.slider-inner').scrollLeft += 150;
}

const prewButton = document.querySelector('#prew-button');

prewButton.onclick = function (){
    document.querySelector('.slider-inner').scrollLeft += -150;
}


let product1 = document.getElementById('product1');

function ProductColorChanger(color){
    product1.innerHTML= '';
    product1.innerHTML = `<img class="img-box-1" 
    src="./assets/Img/products/365/365${color}">
    </img>`
}
let product2 = document.getElementById('product2');

function ProductColorChangerOrganic(color){
    product2.innerHTML= '';
    product2.innerHTML = `<img class="img-box-2" 
    src="./assets/Img/products/organic/${color}">
    </img>`
}
