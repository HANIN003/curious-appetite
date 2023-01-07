const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#name-recipe").value.trim();
  const ingredients = document.querySelector("#ingredients-recipe").value.trim();
  const method = document.querySelector("#instructions-recipe").value.trim();

  const tagList = ["Appetizer", "Beverage", "Bread", "Cake", "Frosting", "Cookie", "Dessert", "Egg", "Meat", "Fish", "Poultry", "Pie", "Salad", "Sauce", "Soup", "Supper", "Breakfast", "Pizza", "Vegetable", "Gluten-Free", "Vegan", "Vegetarian", "Lactose-Free", "Kosher", "Halal", "Seafood", "Contains_Tree_Nuts", "Contains_Peanuts", "Contains_Shellfish", "Contains_Wheat", "Contains_Soy", "Contains_Milk", "Contains_Dairy", "Contains_Eggs", "Contains_Sesame", "None_of_the_Above"];
  
  const tagIdentifiers = [];
  
  for (let i = 0; i < tagList.length; i++) {
    tagIdentifiers[i] = `${tagList[i]}`;
    tagIdentifiers.push(tagIdentifiers[i])
  }

  for (let i = 0; i < tagList.length; i++) {
    tagIdentifiers[i] = document.querySelector(`#${tagList[i]}`);
  }

  const tags = [];

  for (let i = 0; i < tagIdentifiers.length; i++) {
    if (tagIdentifiers[i].checked) {
      const tagJson = `{"tag_name" : "${tagIdentifiers[i].value}"}`
      const tagParsed = JSON.parse(tagJson)
      tags.push(tagParsed)
      // console.log(tagIdentifiers[i].value)
      // console.log(tagJson)
      // console.log(tagParsed)
    }
  }

  // console.log(tags)

  const tag_names = JSON.stringify({tags})

  const tagFinal = JSON.stringify({tag_names})

  console.log(tag_names)
  console.log(tagFinal)
  // console.log(title, ingredients, method, tags)
  console.log(title, ingredients, method, tag_names)
  console.log(title, ingredients, method, tagFinal)


  if (title && ingredients && method && tagFinal) {
    const response = await fetch(`api/recipes`, {
      method: "POST",
      body: JSON.stringify({ title, ingredients, method, tagFinal }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // document.location.replace("/profile");
    } else {
      alert("Failed to create new recipe!");
    }
  }
};

// CURRENTLY NON-FUNCTIONAL
// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/recipe/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/profile");
//     } else {
//       alert("Failed to delete recipe!");
//     }
//   }
// };

document
  .querySelector(".new-recipe-form")
  .addEventListener("submit", newFormHandler);

// CURRENTLY NON-FUNCTIONAL
// document
//   .querySelector(".recipe-list")
//   .addEventListener("click", delButtonHandler);
