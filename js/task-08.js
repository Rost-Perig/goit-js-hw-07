const refs = {
    boxes: document.querySelector('#boxes'),
    numberInput: document.querySelector('input[type="number"]'),
    render: document.querySelector('button[data-action="render"]'),
    cleaner: document.querySelector('button[data-action="destroy"]'),
    amount: 0,
    initialWidthHeight: 30,
    initialPosition: 30,
};

refs.numberInput.addEventListener('input', () => refs.amount = refs.numberInput.value);
refs.cleaner.addEventListener('click', () => refs.boxes.innerHTML = '');
// Вариант - через отдельно объявленную калбек-функцию
/* refs.render.addEventListener('click', onSquaresCreatorClick);

function onSquaresCreatorClick() {
    refs.boxes.innerHTML = '';
    refs.boxes.style.position = 'relative';
    let squares = [];
    for (let i = 0; i < refs.amount; i += 1) {
        const squareEl = document.createElement('div');
        // Вариант 1 
        squareEl.style.position = 'absolute';
        squareEl.style.top = `${refs.initialPosition + i * 12}px`;
        squareEl.style.left = `${refs.initialPosition + i * 12}px`;
        squareEl.style.width = `${refs.initialWidthHeight + i * 10}px`;
        squareEl.style.height = `${refs.initialWidthHeight + i * 10}px`;
        squareEl.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
        // Вариант 2
        // squareEl.style.cssText = `position:absolute;top:${refs.initialPosition + i * 12}px;left:${refs.initialPosition + i * 12}px;width:${refs.initialWidthHeight + i * 10}px;height:${refs.initialWidthHeight + i * 10}px;background-color:rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
        
        squares.push(squareEl); 
    };
    refs.boxes.append(...squares);
}; */

// Вариант со стрелочной калбек-функцией
refs.render.addEventListener('click', () => {
    refs.boxes.innerHTML = '';
    refs.boxes.style.position = 'relative';
    let squares = [];
    for (let i = 0; i < refs.amount; i += 1) {
        const squareEl = document.createElement('div');
        squareEl.style.cssText = `position:absolute;top:${refs.initialPosition + i * 12}px;left:${refs.initialPosition + i * 12}px;width:${refs.initialWidthHeight + i * 10}px;height:${refs.initialWidthHeight + i * 10}px;background-color:rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
        
        squares.push(squareEl); 
    };
    refs.boxes.append(...squares);
});


