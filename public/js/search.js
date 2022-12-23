const searchFormHandler = async (event) => {
  event.preventDefault();

  const search = document.querySelector('input[name="search-text"]').value;

  if (search) {
    const response = await fetch(`/search/${search}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/search/${search}`);
    } else {
      alert("Failed to find recipe!");
    }
  }
};

document
  .querySelector(".search-bar")
  .addEventListener("submit", searchFormHandler);
