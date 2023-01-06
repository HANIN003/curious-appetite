const searchFormHandler = async (event) => {
  event.preventDefault();

  const search = document.querySelector(
    'form.search-form input[name="search-text"]'
  ).value;

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
  .querySelector(".search-form")
  .addEventListener("submit", searchFormHandler);
