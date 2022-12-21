const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#recipe-name").value.trim();
  const ingredients = document
    .querySelector("#recipe-ingredients")
    .value.trim();
  const directions = document.querySelector("#recipe-directions").value.trim();

  if (name && ingredients && directions) {
    const response = await fetch(`api/recipe`, {
      method: "POST",
      body: JSON.stringify({ name, ingredients, directions }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create new recipe!");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/recipe/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete recipe!");
    }
  }
};

document
  .querySelector(".new-recipe-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".recipe-list")
  .addEventListener("click", delButtonHandler);
