const categoriesList = document.querySelectorAll('#categories .item');
const categoriesItems = categoriesList.children;

console.log(`Number of categories: ${categoriesItems.length}`);

Array.from(categoriesItems).forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryElements = item.lastElementChild.children;

  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});