const Slider = {
    image: ['img/1.png', 'img/2.jpg', 'img/3.png', 'img/4.jpg', 'img/5.jpg'],
    content: document.querySelectorAll('.slider .slide .item'),
    slide: document.querySelector('.slider .slide'),
    prev: document.querySelector('.slider .btn.prev'),
    next: document.querySelector('.slider .btn.next'),
    current: 0,
    input: document.querySelectorAll('.slider .radio input')
};

for (let i = 0; i < Slider.image.length; i++) {
    Slider.content[i].style.backgroundImage = `url(${Slider.image[i]})`;
    Slider.input[i].style.background = `url(${Slider.image[i]}) no-repeat center / cover`;
    Slider.input[i].onchange = () => {
        Slider.current = -i;
        Slider.slide.style.left = Slider.current + '00%';
    };
}

Slider.next.onclick = () => {
    Slider.current--;
    if (Math.abs(Slider.current) == Slider.image.length) {
        Slider.current = 0;
    }
    Slider.slide.style.left = Slider.current + '00%';
    Slider.input[Math.abs(Slider.current)].checked = true;
};

Slider.prev.onclick = () => {
    Slider.current++;
    if (Slider.current > 0) {
        Slider.current = -Slider.image.length+1;
    }
    Slider.slide.style.left = Slider.current + '00%';
    Slider.input[Math.abs(Slider.current)].checked = true;
};



































