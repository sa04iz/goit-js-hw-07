const elem = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${elem.length}`);
elem.forEach(function (category) {
    console.log(`Category: ${category.querySelector(`h2`).textContent}`);
    console.log(`Elements: ${category.querySelectorAll(`li`).length}`);
});