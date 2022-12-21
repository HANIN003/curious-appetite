const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document
    .querySelector('input[name="comment-body"]')
    .value.trim();

  const postId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ postId, comment }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to add comment!");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to delete comment!");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", commentFormHandler);

document
  .querySelector(".comment-list")
  .addEventListener("click", delButtonHandler);
