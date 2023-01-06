document.getElementById('recipeId').style.display = "none";

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value.trim();
    const recipeId = document.querySelector('#recipeId').innerHTML;
  
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, recipeId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);


// CURRENTLY NON-FUNCTIONAL
    // const delButtonHandler = async (event) => {
    //   if (event.target.hasAttribute("data-id")) {
    //     const id = event.target.getAttribute("data-id");
    
    //     const response = await fetch(`/api/comment/${id}`, {
    //       method: "DELETE",
    //     });
    
    //     if (response.ok) {
    //       document.location.reload();
    //     } else {
    //       alert("Failed to delete comment!");
    //     }
    //   }
    // };
    
    
    
    // document
    //   .querySelector(".comment-list")
    //   .addEventListener("click", delButtonHandler);


