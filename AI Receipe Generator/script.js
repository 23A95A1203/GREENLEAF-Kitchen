document.getElementById('recipeForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const ingredients = document.getElementById('ingredients').value;
    const cuisine = document.getElementById('cuisine').value || "any";
    const diet = document.getElementById('diet').value || "any";
  
    try {
      const recipe = await generateRecipe(ingredients, cuisine, diet);
      displayRecipe(recipe);
    } catch (error) {
      console.error("Error generating recipe:", error);
      displayErrorMessage("Failed to generate recipe. Please try again later.");
    }
  });
  
  async function generateRecipe(ingredients, cuisine, diet) {
    const query = encodeURIComponent(`${ingredients} ${cuisine} ${diet} recipe`);
    const apiKey = 'AIzaSyCAdudm3CkgPIGODDyPAnFyoqHZXrkNCT8'; // Replace with your API Key
    const cx = '4186bcd759ca04491'; // Replace with your Custom Search Engine ID
  
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`);
  
    if (!response.ok) {
      throw new Error('Failed to fetch data from Google API.');
    }
  
    const data = await response.json();
  
    if (data.items && data.items.length > 0) {
      let filteredResults = filterResultsByDiet(data.items, diet);
      if (filteredResults.length === 0) {
        filteredResults = data.items; // Fallback to all results if no dietary match
      }
  
      const firstResult = filteredResults[0];
      return {
        name: firstResult.title,
        steps: [firstResult.snippet],
        url: firstResult.link,
      };
    } else {
      throw new Error('No recipes found.');
    }
  }
  
  function filterResultsByDiet(results, diet) {
    if (diet === "any") return results;
    return results.filter(result => result.snippet.toLowerCase().includes(diet.toLowerCase()));
  }
  
  function displayRecipe(recipe) {
    document.getElementById('recipe-name').textContent = recipe.name;
    const stepsList = document.getElementById('recipe-steps');
    stepsList.innerHTML = '';
  
    const li = document.createElement('li');
    li.textContent = recipe.steps.join('\n');
    stepsList.appendChild(li);
  
    const link = document.createElement('a');
    link.href = recipe.url;
    link.target = '_blank';
    link.textContent = 'See full recipe';
    stepsList.appendChild(link);
  }
  
  function displayErrorMessage(message) {
    const stepsList = document.getElementById('recipe-steps');
    stepsList.innerHTML = `<li style="color: red;">${message}</li>`;
  }
  