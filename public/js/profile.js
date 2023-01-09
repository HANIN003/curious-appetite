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
  const tagIdList = [];

  for (let i = 0; i < tagIdentifiers.length; i++) {
    if (tagIdentifiers[i].checked) {
      const tagId = i + 1
      // console.log(tagId)
      tagIdList.push(tagId)
    }
  }

  // console.log(tagIdList)
  // console.log(tags)

  const tag_names = JSON.stringify({tags})
  const tag_ids = JSON.stringify({tagIdList})

  // console.log(tag_ids)
  // console.log(tag_names)

  // console.log(title, ingredients, method, tag_names, tag_ids)

  if (title && ingredients && method && tagIdList.length) {
    const response = await fetch(`api/recipes`, {
      method: "POST",
      body: JSON.stringify({ title, ingredients, method, tagIdList }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/profile");
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
