const nameInputEl = document.querySelector('#name-input');
const nameOutEl = document.querySelector('#name-output');

nameInputEl.addEventListener("input", () => nameOutEl.textContent = nameInputEl.value === "" ? "незнакомец" : nameInputEl.value);

// nameInputEl.addEventListener("input", onInputListenInput);

// Варианты
/* function onInputListenInput(event) {
    const name = event.currentTarget.value;
    name === "" ? nameOutEl.textContent = "незнакомец" : nameOutEl.textContent = name;
}; */

/* function onInputListenInput() {
    const name = nameInputEl.value;
    nameOutEl.textContent = name === "" ? "незнакомец" : name;
}; */

/* function onInputListenInput(event) {
    event.preventDefault();
    const name = event.currentTarget.value;
    if (name === "") {
        return nameOutEl.textContent = "незнакомец";
    }
    return nameOutEl.textContent = name;
}; */

