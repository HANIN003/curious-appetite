const upvoteClickHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch("/api/recipe/upvote", {
    method: "PUT",
    body: JSON.stringify({
      recipe_id: id,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to like recipe!");
  }
};

document
  .querySelector(".like-btn")
  .addEventListener("click", upvoteClickHandler);
