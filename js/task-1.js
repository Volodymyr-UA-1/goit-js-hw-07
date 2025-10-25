
const categories = document.querySelectorAll("#categories >li.item");

categories.forEach((category, index) => {
    if (index === 0) {
        const totalCategories = categories.length;
        console.log(`Number of categories: ${totalCategories}`);
    }
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('ul > li').length}`);
});




