const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#name-recipe").value.trim();
  const ingredients = document
    .querySelector("#ingredients-recipe")
    .value.trim();
  const method = document.querySelector("#instructions-recipe").value.trim();

  if (title && ingredients && method) {
    const response = await fetch(`api/recipes`, {
      method: "POST",
      body: JSON.stringify({ title, ingredients, method }),
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
