const refs = {
    fontControl: document.querySelector('#font-size-control'),
    resizedText: document.querySelector('#text'),
};
// Вариант - "присвойте тексту первоначальное значение(value) инпута"
refs.resizedText.style.fontSize = `${refs.fontControl.value}px`

refs.fontControl.addEventListener('input', () => refs.resizedText.style.fontSize = `${refs.fontControl.value}px`);

// Вариант получения числового значения размера шрифта без промежуточных переменных и все одной строкой - немного извращение, но класно!
/* const earlyNumberFontSize = getComputedStyle(refs.resizedText).fontSize.match(/\d+/);

refs.fontControl.addEventListener('input', () => refs.resizedText.style.fontSize = `${(refs.fontControl.value / 50) * earlyNumberFontSize}px`); */

// Вариант - классика
/* const earlyFontSize = getComputedStyle(refs.resizedText).fontSize; //начальный размер шрифта, строка
const numberFontSize = Number(earlyFontSize.slice(0, (earlyFontSize.length - 2))); //начальный размер шрифта, число

refs.fontControl.addEventListener('input', onFontChangeInput);

function onFontChangeInput(event) {
    let sizeRatio = event.currentTarget.value / 50;
    refs.resizedText.style.fontSize = `${sizeRatio * numberFontSize}px`;
}; */


//Еще два варианта чирез создание массива с методами и через функцию-конструктор (совсем извращения)
/* const refs = {
    fontControl: document.querySelector('#font-size-control'),

    resizedText: document.querySelector('#text'),

    earlyNumberFontSize: getComputedStyle(document.querySelector('#text')).fontSize.match(/\d+/),

    addListener() { this.fontControl.addEventListener('input', () => this.resizedText.style.fontSize = `${(this.fontControl.value / 50) * this.earlyNumberFontSize}px`) },
};

refs.addListener(); */


/* function Refs() {
    this.fontControl = document.querySelector('#font-size-control');

    this.resizedText = document.querySelector('#text');

    this.earlyNumberFontSize = getComputedStyle(this.resizedText).fontSize.match(/\d+/);

    this.addListener = () => this.fontControl.addEventListener('input', () => this.resizedText.style.fontSize = `${(this.fontControl.value / 50) * this.earlyNumberFontSize}px`);
}

let myRefs = new Refs();

myRefs.addListener(); */


