/*select navigation items*/ 

const NAVIGATION = document.getElementById('navigation');
NAVIGATION.addEventListener('click', (link)=> {
    NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    link.target.classList.add('active');
});

/*burger-menu activation*/ 
document.getElementById("burger").onclick = function() {
    open()
  };
    function open() {
    document.getElementById("burger").classList.toggle('rotate-90-cw');
    document.getElementById("menu").classList.toggle("show");
  }



/*blackscreen by click*/ 

function blackScreenVertical(){
    document.getElementById('iphone-vertical').style.zIndex = "0"
}

function normalScreenVertical(){
    document.getElementById('iphone-vertical').style.zIndex = "2"
}

function blackScreenHorizontal(){
    document.getElementById('iphone-horizontal').style.zIndex = "0"
}

function normalScreenHorizontal(){
    document.getElementById('iphone-horizontal').style.zIndex = "2"
}


/*corousel*/

const carouselSlide = document.querySelector('.carousel-slide');
const carouselElements = document.querySelectorAll('.carousel-slide div'); //select inner img
    //buttons
const moveLeft = document.querySelector('#move-left');
const moveRight = document.querySelector('#move-right');
    //conter
let counter = 1;
const size = carouselElements[0].clientWidth; //get current slide width
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; // set offset
    //button listeners

moveRight.addEventListener('click', ()=>{
    if (counter >= carouselElements.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

moveLeft.addEventListener('click', ()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselElements[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselElements.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselElements[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselElements.length -counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

/*portfolio select*/ 

const SELECT = document.getElementById('design-select');
SELECT.addEventListener('click', (link)=> {
    SELECT.querySelectorAll('button').forEach(el => el.classList.remove('design-active'));
    link.target.classList.add('design-active');

    let random = document.querySelector('#gallery'); /*randomizer*/
    for (var i = random.children.length; i >= 0; i--) {
    random.appendChild(random.children[Math.random() * i | 0]);
}

});

/*select image*/

const IMAGE_SELECT = document.getElementById('gallery');
IMAGE_SELECT.addEventListener('click', (link)=> {
    IMAGE_SELECT.querySelectorAll('img').forEach(el => el.classList.remove('click'));
    link.target.classList.add('click');
});


/*prevent form from data sending */ 

const FORM = document.getElementById("form");
    function handleForm(event){ 
        event.preventDefault(); 
    } 
FORM.addEventListener('submit', handleForm);

/*form validation checker*/

    FORM.addEventListener('change', ()=> {
        if (!FORM.checkValidity()) {
            document.getElementById('submit-button').style.display = 'none'
            document.getElementById('error-message').innerText = 'Заполните требуемые поля'
        }else{
            document.getElementById('submit-button').style.display = 'block'
            document.getElementById('error-message').innerText = ''

    }
});
 
/*message view*/

const MESSAGE_ACTIVATION = document.getElementById('submit-button');

MESSAGE_ACTIVATION.addEventListener('click', ()=> {
    const subject =  document.getElementById('subject').value.toString();
    const describe = document.getElementById('describe').value.toString();
        if(subject){
            document.getElementById('topic').innerText = 'Тема: ' + subject;
        }else{
            document.getElementById('topic').innerText = 'Без темы'
        }
        document.getElementById('message-block').classList.remove('hidden');
    
 
        if(describe){
            document.getElementById('result').innerText = 'Описание: ' + describe;
        }else{
            document.getElementById('result').innerText = 'Без описания'
        }
        document.getElementById('message-block').classList.remove('hidden');
});


const MESSAGE_DEACTIVATION = document.getElementById('close-button');

MESSAGE_DEACTIVATION .addEventListener('click', ()=> {
        document.getElementById('topic').innerText = '';
        document.getElementById('result').innerText = '';
        document.getElementById('message-block').classList.add('hidden');
        document.getElementById("form").reset();

});



