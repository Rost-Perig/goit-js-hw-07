const symbolInputEl = document.querySelector('#validation-input');

symbolInputEl.addEventListener('blur', () => {
  symbolInputEl.value.length < symbolInputEl.dataset.length ?
    (symbolInputEl.classList.add('invalid'), symbolInputEl.classList.remove('valid')) :
    (symbolInputEl.classList.add('valid'), symbolInputEl.classList.remove('invalid'));
  }
);

/* symbolInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const requiredLength = event.currentTarget.dataset.length;
    
    if (event.currentTarget.value.length < requiredLength) {
        event.currentTarget.classList.add('invalid');
        if (event.currentTarget.classList.contains('valid')) {
          event.currentTarget.classList.remove('valid');  
        };
    } else {
        event.currentTarget.classList.add('valid');
        if (event.currentTarget.classList.contains('invalid')) {
          event.currentTarget.classList.remove('invalid');  
        };
    }
}; */

