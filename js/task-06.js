const symbolInputEl = document.querySelector('#validation-input');

// Вариант - строгое равенство ===
symbolInputEl.addEventListener('blur', () => {
  symbolInputEl.value.length === Number(symbolInputEl.dataset.length) ?
    (symbolInputEl.classList.add('valid'), symbolInputEl.classList.remove('invalid')) :
    (symbolInputEl.classList.add('invalid'), symbolInputEl.classList.remove('valid'));
  }
);

// Вариант - нестрогое равенство ==
/* symbolInputEl.addEventListener('blur', () => {
  symbolInputEl.value.length == symbolInputEl.dataset.length ?
    (symbolInputEl.classList.add('valid'), symbolInputEl.classList.remove('invalid')) :
    (symbolInputEl.classList.add('invalid'), symbolInputEl.classList.remove('valid'));
  }
); */

/* symbolInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const requiredLength = Number(event.currentTarget.dataset.length);
  if (event.currentTarget.value.length === requiredLength) {
      event.currentTarget.classList.add('valid');
        if (event.currentTarget.classList.contains('invalid')) {
          event.currentTarget.classList.remove('invalid');  
        };
        
    } else {
        event.currentTarget.classList.add('invalid');
        if (event.currentTarget.classList.contains('valid')) {
          event.currentTarget.classList.remove('valid');  
        };
    }
}; */

