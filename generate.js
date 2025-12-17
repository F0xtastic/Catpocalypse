/***********************
 *      Variables       *
 ***********************/
const characters = [
    {
        class:"mySlides1",
        img1:"images/Lark.png",
        img2:"images/LarkClothes.png",
        link:"https://example.com/",
        plusDivsLe:"0",
        plusDivsRi:"0"
    },
    {
        imgClass:"mySlides2",
        img1:"images/Liv.png",
        img2:"images/LivClothes.png",
        img3:"images/LivCat.png",
        link:"https://otherexample.com/",
        plusDivsLe:"2",
        plusDivsRi:"2"
    };
]

const newChara = document.createElement('div');
const newImage = document.createElement('img');

/***********************
 *      Create Div     *
 ***********************/
newChara.classList.add('drag-handle', 'js-drag-handle', 'list_item', 'is-idle', 'js-item');

/***********************
 *      Create img     *
 ***********************/


document.getElementById("chart").appendChild(newChara);