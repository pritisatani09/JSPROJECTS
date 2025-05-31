let recipes = [];

    document.addEventListener('DOMContentLoaded', () => {
      loadRecipes();
      displayRecipes();

      document.getElementById('addRecipeForm').addEventListener('submit', handleAddOrEdit);
      document.getElementById('searchTitle').addEventListener('input', displayRecipes);
      document.getElementById('searchIngredients').addEventListener('input', displayRecipes);
      document.getElementById('filterCuisine').addEventListener('change', displayRecipes);
    });

    function toggleForm() {
      const form = document.getElementById('recipe-form');
      const isEditing = form.style.display === 'block';
      form.style.display = isEditing ? 'none' : 'block';
      document.getElementById('addRecipeForm').reset();
      document.getElementById('editIndex').value = '';
    }

    function handleAddOrEdit(e) {
      e.preventDefault();
      const title = document.getElementById('title').value.trim();
      const ingredients = document.getElementById('ingredients').value.trim();
      const instructions = document.getElementById('instructions').value.trim();
      const cuisine = document.getElementById('cuisine').value;
      const index = document.getElementById('editIndex').value;
      const imageURL = document.getElementById('imageURL').value.trim();

      if (!title || !ingredients) {
        alert("Please fill in both title and ingredients.");
        return;
      }

      const recipe = { title, ingredients, instructions, cuisine, image: imageURL };

      if (index === '') {
        recipes.push(recipe);
      } else {
        recipes[index] = recipe;
      }

      saveRecipes();
      displayRecipes();
      toggleForm();
    }

    function displayRecipes() {
      const list = document.getElementById('recipeList');
      list.innerHTML = '';

      const titleQuery = document.getElementById('searchTitle').value.toLowerCase();
      const ingredientQuery = document.getElementById('searchIngredients').value.toLowerCase();
      const cuisineFilter = document.getElementById('filterCuisine').value;

      const filtered = recipes.filter(r =>
        r.title.toLowerCase().includes(titleQuery) &&
        r.ingredients.toLowerCase().includes(ingredientQuery) &&
        (cuisineFilter === '' || r.cuisine === cuisineFilter)
      );

      // ✅ Print filtered recipes to console
      console.log("Recipes:", filtered);

      if (filtered.length === 0) {
        list.innerHTML = "<p class='text-center fs-5 mt-4'>No recipes found.</p>";
        return;
      }

      filtered.forEach((r, i) => {
        const div = document.createElement('div');
        div.className = 'recipe-card';
        div.innerHTML = `
          ${r.image ? `<img src="${r.image}" alt="${r.title}" loading="lazy"/>` : ''}
          <h5>${r.title}</h5>
          <p><strong>Ingredients:</strong> ${r.ingredients}</p>
          <p><strong>Instructions:</strong> ${r.instructions}</p>
          <p><strong>Cuisine:</strong> ${r.cuisine}</p>
          <div class="actions">
            <button class="btn btn-sm btn-outline-primary" onclick="editRecipe(${i})">Edit</button>
            <button class="btn btn-sm btn-outline-danger" onclick="deleteRecipe(${i})">Delete</button>
          </div>
        `;
        list.appendChild(div);
      });
    }

    function editRecipe(index) {
      const r = recipes[index];
      document.getElementById('title').value = r.title;
      document.getElementById('ingredients').value = r.ingredients;
      document.getElementById('instructions').value = r.instructions;
      document.getElementById('cuisine').value = r.cuisine;
      document.getElementById('imageURL').value = r.image || '';
      document.getElementById('editIndex').value = index;
      document.getElementById('recipe-form').style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function deleteRecipe(index) {
      if (confirm("Delete this recipe?")) {
        recipes.splice(index, 1);
        saveRecipes();
        displayRecipes();
      }
    }

    function saveRecipes() {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    function loadRecipes() {
      const stored = localStorage.getItem('recipes');
      if (stored) {
        recipes = JSON.parse(stored);
      }
    }
