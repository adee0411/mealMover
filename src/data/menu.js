const getRandomRecipes = (query) => {
  const recipe = fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
  )
    .then((data) => data.json())
    .then((recipe) => recipe);

  return recipe;
};

export default getRandomRecipes;
