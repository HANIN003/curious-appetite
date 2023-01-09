const searchHandler = async (event) => {
    event.preventDefault();

    const searchTerm = document.querySelector('#search-bar').value.trim().toLowerCase();

    // console.log(searchTerm);

    const getAllRecipes = await fetch('/api/recipes');

    const allRecipes = await getAllRecipes.json()

    // console.log(allRecipes);

    // for (let i = 0; i < allRecipes.length; i++) {
    //     console.log(allRecipes[i].title)
    // }

    const searchResults = [];
    const idForSearch = [];

    for (let i = 0; i < allRecipes.length; i++) {
        if (allRecipes[i].title.toLowerCase().includes(searchTerm)) {
            searchResults.push(allRecipes[i].title);
            idForSearch.push(allRecipes[i].id)
        }  
    }
    if (!searchResults.length) {
        console.log('No Results')
    }
    console.log(searchResults);
    console.log(idForSearch);
    


    // document.location.replace("/search-results");

}

document
    .querySelector("#searchResults")
    .addEventListener("submit", searchHandler);
