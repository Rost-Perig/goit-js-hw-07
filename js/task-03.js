const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');
// galleryEl.style.listStyle = 'none';
// galleryEl.style.display = 'flex';
galleryEl.style.cssText = 'list-style:none;display:flex;';

//Вариант - одной вставкой
/* let galleryArray = images.map(image => `<li style="margin-left:30px"><img src="${image.url}" alt="${image.alt}" width="250"></li>`);
galleryEl.insertAdjacentHTML('afterbegin', galleryArray.join('')); */

//Вариант - одной вставкой, одной строкой, ипользуя методы .map и .join
/* galleryEl.insertAdjacentHTML('afterbegin', images.map(image => `<li style="margin-left:30px"><img src="${image.url}" alt="${image.alt}" width="250"></li>`).join('')); */

//Вариант - одной вставкой, одной строкой, ипользуя только метод .reduce
galleryEl.insertAdjacentHTML('afterbegin', images.reduce((textHtml, current) => textHtml + `<li style="margin-left:30px"><img src="${current.url}" alt="${current.alt}" width="250"></li>`, ''));


// Вариант - несколько вставок
/* images.forEach(image => {
  galleryEl.insertAdjacentHTML('beforeend', `<li style="margin-left:30px"><img src="${image.url}" alt="${image.alt}" width="250"></li>`);
}); */

//
/* const galleryItems = images.map(image => {
  const galleryItemEl = document.createElement('li');
  
  const imageEl = document.createElement('img');
  imageEl.src = image.url;
  imageEl.alt = image.alt;
  imageEl.width = 450;

  galleryItemEl.appendChild(imageEl);
  galleryItemEl.style.marginLeft = '30px';
  // galleryItemEl.style.cssText = 'margin-left:30px';

  return galleryItemEl;
});

galleryEl.append(...galleryItems); */






