// Вариант
/* const allCategoriesEl = document.querySelector('#categories');
const categoriesEl = allCategoriesEl.querySelectorAll('.item');

console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach(category => console.log(`Категория: ${category.querySelector('h2').textContent}. `, `Количество элементов: ${category.querySelectorAll('li').length}`)); */

//Вариант - самый короткий в этом конкретном случае
/* const categoriesEl = document.querySelectorAll('.item');

console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach(category => console.log(`Категория: ${category.querySelector('h2').textContent}. `, `Количество элементов: ${category.querySelectorAll('li').length}`)); */


//Вариант - короче самого короткого
console.log(`В списке ${document.querySelectorAll('.item').length} категории.`);

document.querySelectorAll('.item').forEach(category => console.log(`Категория: ${category.querySelector('h2').textContent}. `, `Количество элементов: ${category.querySelectorAll('li').length}`));

