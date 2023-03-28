const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slides = document.querySelectorAll('.slide');

let left = 0;
slides.forEach((slide, index) =>{
    slide.style.left = `${index * 100}%`;
    left += 100;
});

let counter = 0;

prevBtn.style.display = 'none';

prevBtn.addEventListener('click', ()=>{
    counter--;
    carousel();
});


nextBtn.addEventListener('click', ()=>{
    counter++;
    carousel();
});

function carousel(){
    // working with slides
    
    // rotational slides
    // if(counter === slides.length) {
    //     counter = 0;
    // }

    // if(counter< 0){
    //     counter = slides.length-1;
    // }

    // Hiding buttons
    if(counter === slides.length-1) {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'none';
    }

    else if(counter <= 0){
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'block';

    }

    else{
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';

    }

    slides.forEach((slide)=>{
        console.log(counter);
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}