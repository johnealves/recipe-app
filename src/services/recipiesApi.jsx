export const searchMealsRecipe = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  return await response.json()
}

export const searchDrinksRecipe = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  return await response.json()
}

export const searchByFilter = async (radio, value) => {
  switch (radio) {
  case 'ingredient':
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`);
      return await response.json();
  case 'name':
    const response_1 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
      return await response_1.json();
  case 'firstLetter':
    const response_2 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`);
      return await response_2.json();
  default:
    return null;
  }
}

export const searchDrinksByFilter = async (radio, value) => {
  switch (radio) {
  case 'ingredient':
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`);
      return await response.json();
    } catch (error) {
      console.log(error)
    }
    break;
  case 'name':
    const response_1 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
      return await response_1.json();
  case 'firstLetter':
    const response_2 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`);
      return await response_2.json();
  default:
    return null;
  }
}

export const requestMealById = async (id) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export const requestDrinkById = async (id) => {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export const requestMealsCategories = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export const requestDrinksCategories = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export const requestMealsByCategory = async (category) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    return await response.json();
  } catch (error) {
    console.log(error)
  }
};
