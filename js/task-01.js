const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('li');
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${elements.length}`);
});