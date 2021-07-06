const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    totalValue: document.querySelector('#value'),
    counterValue: 0,
 }; 

// Вариант 1
/* refs.decrement.addEventListener('click', onDecrementClick);
refs.increment.addEventListener('click', onIncrementClick);

function onDecrementClick() {
    refs.counterValue -= 1;
    refs.totalValue.textContent = refs.counterValue;
};
function onIncrementClick() {
    refs.counterValue += 1;
    refs.totalValue.textContent = refs.counterValue;
}; */

 // Вариант 2
refs.decrement.addEventListener('click', () => refs.totalValue.textContent = (refs.counterValue -= 1));
refs.increment.addEventListener('click', () => refs.totalValue.textContent = (refs.counterValue += 1));





