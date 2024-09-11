// document.querySelector('.search-button').addEventListener('click', function() {
//     let searchTerm = document.querySelector('.search-input').value;
//     alert(`Searching for: ${searchTerm}`);
// });
// document.querySelector('.menu-icon').addEventListener('click', function() {
//     alert('Menu icon clicked!');
// });
document.getElementById('hamburger').addEventListener('click',()=>{
  document.getElementById('dropdown').style.display='block'
})
document.getElementById('cancle').addEventListener('click',() =>{
  document.getElementById('dropdown').style.display='none'
})
// 
//

// 
// 
document.querySelector('.search-button').addEventListener('click', searchMeals);

function searchMeals() {
  const searchTerm = document.querySelector('.search-input').value.trim();

  if (searchTerm) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('output').innerHTML = '';

        if (data.meals) {
          data.meals.forEach(meal => {
            const mealDiv = `
              <div style="border: 2px solid red; padding: 20px; text-align: center; background-color: #2ea2e09b;">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="max-width: 80%;">
                <p>${meal.strMeal}</p>
              </div>
            `;
            document.getElementById('output').innerHTML += mealDiv;
          });
        } else {
          document.getElementById('output').innerHTML = '<p>No meals found</p>';
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('output').innerHTML = '<p>Error fetching data</p>';
      });
  } else {
    document.getElementById('output').innerHTML = '<p>Please enter a search term</p>';
  }
}
// 
// 
fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((response) => response.json())
  .then((data) => {
    let gallery = `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 14px;">
    `;

    data.categories.forEach((category) => {
      gallery += `
        <div style="border: 1px solid #ccc; padding: 10px; text-align: center; background-color: #2ea2e09b; cursor: pointer;"> 
          <img src="${category.strCategoryThumb}" alt="${category.strCategory}" style="max-width: 80%; cursor: pointer;"> 
          <p>${category.strCategory}</p>
        </div>
      `;
    });

    gallery += `</div>`;
    document.getElementById("output").innerHTML = gallery;
  })
  .catch((error) => console.error('Error fetching data:', error));
// 