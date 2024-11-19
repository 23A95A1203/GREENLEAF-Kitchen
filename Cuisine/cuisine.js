const meals = {
    Sunday: {
        Breakfast: {
            dish: "Oatmeal with fruits",
            ingredients: ["Oats", "Fruits", "Milk", "Honey"],
            buyLink: "https://www.dmart.in/oatmeal-with-fruits"
        },
        Lunch: {
            dish: "Grilled chicken salad",
            ingredients: ["Chicken breast", "Lettuce", "Tomatoes", "Cucumber", "Olive oil"],
            buyLink: "https://www.dmart.in/grilled-chicken-salad"
        },
        Dinner: {
            dish: "Vegetable stir-fry",
            ingredients: ["Mixed vegetables", "Soy sauce", "Garlic", "Olive oil"],
            buyLink: "https://www.dmart.in/vegetable-stir-fry"
        }
    },
    Monday: {
        Breakfast: {
            dish: "Smoothie bowl",
            ingredients: ["Banana", "Berries", "Yogurt", "Granola"],
            buyLink: "https://www.dmart.in/smoothie-bowl"
        },
        Lunch: {
            dish: "Quinoa salad",
            ingredients: ["Quinoa", "Chickpeas", "Cucumber", "Tomatoes", "Lemon"],
            buyLink: "https://www.dmart.in/quinoa-salad"
        },
        Dinner: {
            dish: "Grilled salmon",
            ingredients: ["Salmon", "Lemon", "Garlic", "Olive oil", "Asparagus"],
            buyLink: "https://www.dmart.in/grilled-salmon"
        }
    },
    Tuesday: {
        Breakfast: {
            dish: "Avocado toast",
            ingredients: ["Whole grain bread", "Avocado", "Eggs", "Tomatoes"],
            buyLink: "https://www.dmart.in/avocado-toast"
        },
        Lunch: {
            dish: "Turkey wrap",
            ingredients: ["Whole wheat wrap", "Turkey", "Lettuce", "Tomatoes", "Avocado"],
            buyLink: "https://www.dmart.in/turkey-wrap"
        },
        Dinner: {
            dish: "Chicken stir-fry",
            ingredients: ["Chicken breast", "Mixed vegetables", "Soy sauce", "Ginger", "Garlic"],
            buyLink: "https://www.dmart.in/chicken-stir-fry"
        }
    },
    Wednesday: {
        Breakfast: {
            dish: "Greek yogurt parfait",
            ingredients: ["Greek yogurt", "Honey", "Berries", "Granola"],
            buyLink: "https://www.dmart.in/greek-yogurt-parfait"
        },
        Lunch: {
            dish: "Lentil soup",
            ingredients: ["Lentils", "Carrots", "Celery", "Tomatoes", "Garlic"],
            buyLink: "https://www.dmart.in/lentil-soup"
        },
        Dinner: {
            dish: "Beef and broccoli",
            ingredients: ["Beef", "Broccoli", "Soy sauce", "Garlic", "Ginger"],
            buyLink: "https://www.dmart.in/beef-and-broccoli"
        }
    },
    Thursday: {
        Breakfast: {
            dish: "Chia pudding",
            ingredients: ["Chia seeds", "Almond milk", "Honey", "Berries"],
            buyLink: "https://www.dmart.in/chia-pudding"
        },
        Lunch: {
            dish: "Caesar salad",
            ingredients: ["Romaine lettuce", "Chicken breast", "Caesar dressing", "Parmesan cheese", "Croutons"],
            buyLink: "https://www.dmart.in/caesar-salad"
        },
        Dinner: {
            dish: "Stuffed bell peppers",
            ingredients: ["Bell peppers", "Ground turkey", "Quinoa", "Tomato sauce", "Cheese"],
            buyLink: "https://www.dmart.in/stuffed-bell-peppers"
        }
    },
    Friday: {
        Breakfast: {
            dish: "Egg muffins",
            ingredients: ["Eggs", "Spinach", "Tomatoes", "Cheese", "Bell peppers"],
            buyLink: "https://www.dmart.in/egg-muffins"
        },
        Lunch: {
            dish: "Veggie wrap",
            ingredients: ["Whole wheat wrap", "Hummus", "Cucumber", "Tomatoes", "Lettuce"],
            buyLink: "https://www.dmart.in/veggie-wrap"
        },
        Dinner: {
            dish: "Shrimp stir-fry",
            ingredients: ["Shrimp", "Mixed vegetables", "Soy sauce", "Garlic", "Ginger"],
            buyLink: "https://www.dmart.in/shrimp-stir-fry"
        }
    },
    Saturday: {
        Breakfast: {
            dish: "Pancakes with berries",
            ingredients: ["Pancake mix", "Milk", "Eggs", "Berries", "Maple syrup"],
            buyLink: "https://www.dmart.in/pancakes-with-berries"
        },
        Lunch: {
            dish: "Chicken Caesar wrap",
            ingredients: ["Whole wheat wrap", "Chicken breast", "Caesar dressing", "Romaine lettuce", "Parmesan cheese"],
            buyLink: "https://www.dmart.in/chicken-caesar-wrap"
        },
        Dinner: {
            dish: "Baked cod",
            ingredients: ["Cod", "Lemon", "Garlic", "Olive oil", "Asparagus"],
            buyLink: "https://www.dmart.in/baked-cod"
        }
    }
};
// Example nutritional data for ingredients (calories, protein, carbs, fats per 100g)
const nutritionData = {
    Oats: { calories: 389, protein: 16.9, carbs: 66.3, fats: 6.9 },
    Fruits: { calories: 50, protein: 0.5, carbs: 13, fats: 0.1 },
    Milk: { calories: 42, protein: 3.4, carbs: 5, fats: 1 },
    Honey: { calories: 304, protein: 0.3, carbs: 82.4, fats: 0 },
    Chicken: { calories: 239, protein: 27, carbs: 0, fats: 14 },
    Lettuce: { calories: 15, protein: 1.4, carbs: 2.9, fats: 0.2 },
    Tomatoes: { calories: 18, protein: 0.9, carbs: 3.9, fats: 0.2 },
    Cucumber: { calories: 16, protein: 0.7, carbs: 3.6, fats: 0.1 },
    OliveOil: { calories: 884, protein: 0, carbs: 0, fats: 100 },
    // Add more nutritional data as needed
};

document.getElementById('getMeal').addEventListener('click', function () {
    const day = document.getElementById('day').value;
    const meal = document.getElementById('meal').value;
    const mealData = meals[day][meal];

    document.getElementById('dishName').textContent = mealData.dish;
    const ingredientsList = document.getElementById('ingredients');
    ingredientsList.innerHTML = '';
    const ingredientInputs = document.getElementById('ingredientInputs');
    ingredientInputs.innerHTML = '';
    
    mealData.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
        
        // Add input for each ingredient
        const inputDiv = document.createElement('div');
        inputDiv.innerHTML = `
            <label for="${ingredient}">${ingredient} (g):</label>
            <input type="number" id="${ingredient}" name="${ingredient}" min="0" value="0">
        `;
        ingredientInputs.appendChild(inputDiv);
    });

    document.getElementById('buyLink').href = mealData.buyLink;
});

document.getElementById('calculateNutrition').addEventListener('click', function () {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    const ingredients = Object.keys(nutritionData);
    ingredients.forEach(ingredient => {
        const quantity = parseFloat(document.getElementById(ingredient)?.value) || 0;
        if (quantity > 0) {
            const nutrition = nutritionData[ingredient];
            totalCalories += (nutrition.calories * quantity) / 100;
            totalProtein += (nutrition.protein * quantity) / 100;
            totalCarbs += (nutrition.carbs * quantity) / 100;
            totalFats += (nutrition.fats * quantity) / 100;
        }
    });

    document.getElementById('calories').textContent = `Calories:${totalCalories.toFixed(2)} kcal`;
    document.getElementById('protein').textContent = `Protein: ${totalProtein.toFixed(2)} g`;
    document.getElementById('carbs').textContent = `Carbohydrates: ${totalCarbs.toFixed(2)} g`;
    document.getElementById('fats').textContent = `Fats: ${totalFats.toFixed(2)} g`;
});

function initMap() {
    const platform = new H.service.Platform({
        'apikey': 't1I3F6rfEB9Dfo_2RanbhQj0eGbQwB1wiwc9ZRh8M_0'
    });

    const defaultLayers = platform.createDefaultLayers();

    const map = new H.Map(
        document.getElementById('map'),
        defaultLayers.vector.normal.map,
        {
            zoom: 12,
            center: { lat: 17.0005, lng:81.8040 }
        }
    );

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    const locations = [
        { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE, name: "Dmart" },
        { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE, name: "Reliance Smart" }
        // Add more store locations as required
    ];

    locations.forEach(location => {
        const marker = new H.map.Marker({ lat: location.lat, lng: location.lng });
        map.addObject(marker);
    });
}

window.onload=initMap;