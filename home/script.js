// document.querySelector('.menu-toggle').addEventListener('click', () => {
//     document.querySelector('.nav-links').classList.toggle('active');
// });

const recipes = {
    // Fruit-based dishes
    'apple, banana': {
        name: 'Apple Banana Smoothie',
        nutrients: 'Calories: 200, Carbs: 40g, Protein: 2g',
        process: 'Blend 1 apple and 1 banana with 1 cup of milk until smooth.',
        url:"https://foodviva.com/smoothie-recipes/apple-banana-smoothie-recipe/#css_fv_recipe_method"
    },
    // Add more fruit-based dishes here...

    // Vegetable-based dishes
    'carrot, celery, pepper': {
        name: 'Carrot Celery Stir-fry',
        nutrients: 'Calories: 120, Carbs: 18g, Protein: 2g',
        process: 'Stir-fry carrots, celery, and peppers with soy sauce and garlic.',
        url:"https://linschinesekitchen.com/got-carrots-and-celery-try-this-delicious-stir-fry/"
    },
    'potato, spinach': {
        name: 'Potato Spinach Curry',
        nutrients: 'Calories: 250, Carbs: 40g, Protein: 5g',
        process: 'Cook potatoes and spinach with curry spices and coconut milk.',
        url:"https://www.vegrecipesofindia.com/aloo-palak/"
    },
    // Add more vegetable-based dishes here...

    // Salad-based dishes
    'lettuce, spinach, tomato': {
        name: 'Green Salad',
        nutrients: 'Calories: 80, Carbs: 12g, Protein: 2g',
        process: 'Mix lettuce, spinach, and tomatoes with your favorite dressing.',
        url:"https://www.loveandlemons.com/green-salad-recipe/"
    },
    // Add more salad-based dishes here...
};

function normalizeInput(input) {
    return input
        .split(',')
        .map(ingredient => ingredient.trim().toLowerCase())
        .sort()
        .join(', ');
}

function generateRecipe() {
    console.log(`working`)
    var details=document.getElementById('agetdetails')
    // details.href = `${recipes['apple, banana'].url}`;
    details.style='display:flex'
    const input = document.getElementById('ingredientInput').value;
    const normalizedInput = normalizeInput(input);
    const recipeOutput = document.getElementById('recipeOutput');
    if (recipes[normalizedInput]) {
        const recipe = recipes[normalizedInput];
        var anc=document.createElement('a')
        anc.innerHTML='Get Details'
        anc.style="font-family:cursive"
        anc.style='font-size:15px'
        recipeOutput.innerHTML = `
            <h4>${recipe.name}</h4>
            <p><strong>Nutrients</strong>: ${recipe.nutrients}</p>
            <p><strong>Process:</strong> ${recipe.process}</p>
        `;
        anc.setAttribute('href',`${recipe.url}`)
    console.log(anc)
    } else {
        recipeOutput.innerHTML = '<p>No recipe found for the given ingredients.</p>';
    }
    details.appendChild(anc)
}
function more(){
    var mo=document.getElementById("ahii")
    console.log(mo)
    mo.style='display:flex';
}
function remove(){
    var re=document.getElementById('ahii')
    re.style='display:none'
}

// Adding more recipes for completeness
// Additional fruit-based dishes
recipes[normalizeInput('pear, peach')] = {
    name: 'Pear Peach Salad',
    nutrients: 'Calories: 140, Carbs: 30g, Protein: 1g',
    process: 'Combine sliced pears and peaches with a sprinkle of cinnamon and a drizzle of honey.',
    url:"https://vanillaqueen.com/pear-salad/"
};
// Additional vegetable-based dishes
recipes[normalizeInput('broccoli, cauliflower')] = {
    name: 'Broccoli Cauliflower Stir-fry',
    nutrients: 'Calories: 120, Carbs: 15g, Protein: 4g',
    process: 'Stir-fry broccoli and cauliflower with garlic and soy sauce.',
    url:"https://www.food.com/recipe/broccoli-and-cauliflower-stir-fry-290643"
};
// Additional salad-based dishes
recipes[normalizeInput('arugula, cherry tomato, feta')] = {
    name: 'Arugula Cherry Tomato Feta Salad',
    nutrients: 'Calories: 150, Carbs: 10g, Protein: 5g',
    process: 'Mix arugula, halved cherry tomatoes, and crumbled feta cheese with a lemon vinaigrette.',
    url:"https://insimoneskitchen.com/rocket-feta-cherry-tomatoes/"
};

recipes[normalizeInput('kale, apple, walnut')] = {
    name: 'Kale Apple Walnut Salad',
    nutrients: 'Calories: 220, Carbs: 25g, Protein: 5g',
    process: 'Combine kale, sliced apples, and walnuts. Drizzle with a honey mustard dressing.',
    url:"https://www.walderwellness.com/kale-apple-salad-parmesan-walnuts/"
};
recipes[normalizeInput('strawberry, blueberry, raspberry')] = {
    name: 'Berry Salad',
    nutrients: 'Calories: 150, Carbs: 35g, Protein: 1g',
    process: 'Mix strawberries, blueberries, and raspberries with a squeeze of lemon juice.',
    url:"https://www.allrecipes.com/recipe/215472/berry-fruit-salad/"
};
recipes[normalizeInput('tomato, cucumber, onion')] = {
    name: 'Tomato Cucumber Salad',
    nutrients: 'Calories: 100, Carbs: 20g, Protein: 2g',
    process: 'Combine chopped tomatoes, cucumbers, and onions with olive oil and vinegar.',
    url:"https://www.spendwithpennies.com/cucumber-tomato-salad/"
};

        recipes[normalizeInput('orange, mango')] = {
        name: 'Orange Mango Smoothie',
        nutrients: 'Calories: 180, Carbs: 40g, Protein: 1g',
        process: 'Blend 1 orange and 1 mango with 1 cup of yogurt until smooth.',
        url:"https://cooktoria.com/orange-mango-smoothie/"
    };
    
    recipes[normalizeInput('avacado')] = {
        name: 'Avacado Smoothie',
        nutrients: 'Calories: 256, Potassiu:220mg, Protein: 7g',
        process: 'Pour the milk into the FitStream.Add Greek yogurt (if using), honey or maple syrup, vanilla extract, and ice cubes.Blend on high until smooth and creamy.',
        url:"https://www.loveandlemons.com/avocado-smoothie/"
    };

    recipes[normalizeInput('Bell Pepper')] = {
        name: 'Stuffed Bell Pepper',
        nutrients: 'Calories: 31 kcal per 100g, Vitamin C: 127.7 mg, Fiber: 1.7 g',
        process: 'Fill halved bell peppers with a mixture of cooked quinoa, black beans, corn, and spices.Bake in the oven at 375°F (190°C) for 20 minutes.',
        url:"https://www.budgetbytes.com/stuffed-bell-peppers/"
    };
    recipes[normalizeInput('Broccoli')] = {
        name: 'Steamed Broccoli',
        nutrients: 'Calories: 34 kcal per 100gVitamin C: 89.2 mgCalcium: 47 mg',
        process: 'Steam broccoli florets until tender, about 5-7 minutes.Season with salt, pepper, and a squeeze of lemon juice.',
        url:"https://www.simplyrecipes.com/recipes/steamed_broccoli/"
    };

    
    recipes[normalizeInput('Broccoli, Carrots')] = {
        name: 'Stir-Fried Broccoli and Carrots',
        nutrients: ' Broccoli (1 cup, chopped): 55 calories, 2.6g protein, 11.2g carbs, 2.4g fiber, 0.6g fat, 123mg Vitamin CCarrots (1 cup, sliced): 50 calories, 1.2g protein, 12g carbs, 3.6g fiber, 0.3g fat, 6mg Vitamin A',
        process: 'Heat a tablespoon of oil in a pan, add chopped broccoli and sliced carrots.Stir-fry for 5-7 minutes until tender-crisp; season with salt and pepper to taste.',
        url:"https://www.allrecipes.com/recipe/258159/broccoli-and-carrot-stir-fry/"
    };

    
    recipes[normalizeInput('Spinach, Tomato')] = {
        name: ' Spinach and Tomato Salad',
        nutrients: 'Spinach (1 cup, raw): 7 calories, 0.9g protein, 1.1g carbs, 0.7g fiber, 0.1g fat, 24mg Vitamin CTomato (1 medium): 22 calories, 1.1g protein, 4.8g carbs, 1.5g fiber, 0.2g fat, 15mg Vitamin C',
        process: 'Toss fresh spinach leaves with sliced tomatoes in a bowl.Drizzle with olive oil and balsamic vinegar, then season with salt and pepper.',
        url:"https://aggieskitchen.com/chopped-tomato-and-spinach-salad/"
    };

    
    recipes[normalizeInput('Zucchini, Bell Peppers')] = {
        name: 'Roasted Zucchini and Bell Peppers',
        nutrients: 'Zucchini (1 cup, sliced): 19 calories, 1.5g protein, 3.5g carbs, 1.2g fiber, 0.4g fat, 20mg Vitamin CBell Peppers (1 cup, chopped): 39 calories, 1.5g protein, 9g carbs, 3g fiber, 0.4g fat, 152mg Vitamin C',
        process: 'Toss sliced zucchini and chopped bell peppers with olive oil, salt, and pepper.Roast in the oven at 400°F (200°C) for 20-25 minutes until tender and slightly caramelized.',  
        url:"https://www.thespruceeats.com/roasted-peppers-and-seasonal-vegetables-100884"
    };
    
    recipes[normalizeInput(' Cabbage, Green Peas')] = {
        name: 'Cabbage and Green Peas Stir-Fry',
        nutrients: 'Cabbage (1 cup, chopped): 22 calories, 1.1g protein, 5.2g carbs, 2.2g fiber, 0.1g fat, 32mg Vitamin CGreen Peas (1 cup): 118 calories, 8g protein, 21g carbs, 7g fiber, 0.6g fat, 22mg Vitamin C',
        process: 'Heat oil in a pan, add chopped cabbage and green peas. Stir-fry for 5-7 minutes until vegetables are tender, season with salt and turmeric.',
        url:"https://www.indianveggiedelight.com/cabbage-peas-stir-fry-pressure-cooker/"
    };

    recipes[normalizeInput('Mango, Pineapple')] = {
        name: 'Mango Pineapple Smoothie',
        nutrients: 'Calories: 150 kcalVitamin C: 60% of the Daily Value (DV)Fiber: 3g',
        process: 'Blend 1 cup of chopped mango, 1 cup of pineapple chunks, and 1/2 cup of yogurt until smooth.Serve chilled with a few ice cubes.',
        url:"https://foodviva.com/smoothie-recipes/mango-pineapple-smoothie-recipe/"
    };

    recipes[normalizeInput('Strawberries, Bananas')] = {
        name: 'Strawberry Banana Salad',
        nutrients: 'Calories: 120 kcalVitamin C: 80% of the DVPotassium: 500mg',
        process: 'Slice 1 cup of strawberries and 1 banana. Toss with a teaspoon of honey and a squeeze of lime juice.Serve immediately, topped with a sprinkle of mint leaves.',
        url:"https://www.spendwithpennies.com/strawberry-banana-salad/"
    };
    recipes[normalizeInput('Apples, Kiwi')] = {
        name: 'Apple Kiwi Tart',
        nutrients: 'Calories: 180 kcalFiber: 5gVitamin C: 70% of the DV',
        process: 'Thinly slice 2 apples and 2 kiwis. Arrange on a pre-baked tart crust.Bake at 375°F (190°C) for 20 minutes, then cool and serve with a dusting of powdered sugar.',
        url:"https://www.gourmandasia.com/recipe-by-product/fruits/apple-kiwi-tarte-tatin-17241.html"
    };
    recipes[normalizeInput('Berry Citrus Salad')] = {
        name: ' Blueberries, Oranges, Grapes',
        nutrients: 'Calories: 110 kcalVitamin C: 100% of the DVAntioxidants: High',
        process: 'Mix 1 cup of blueberries, segmented oranges, and halved grapes in a bowl.Drizzle with honey and a splash of lime juice before serving.',
        url:"https://www.eatingbirdfood.com/mixed-berry-fruit-salad/"
    };
    recipes[normalizeInput('Spinach,Kale')] = {
        name: 'Spinach and Kale Stir-Fry',
        nutrients: 'Calories: 120Protein: 3gFat: 9g',
        process: 'Heat olive oil in a pan, add minced garlic, and sauté until fragrant.Add chopped spinach and kale, season with salt and pepper, and stir-fry until wilted.',
        url:"https://thehomeintent.com/kale-and-spinach-recipe/"
    };
    recipes[normalizeInput('Apple, Carrot, and Ginger')] = {
        name: 'Apple, Carrot, and Ginger Juice',
        nutrients: 'Orange: Vitamin C, Fiber, Potassium, FolateCarrot: Beta-carotene, Vitamin A, Vitamin K, PotassiumGinger: Gingerol, Vitamin C, Magnesium',
        process: 'Peel and chop the oranges and carrots, and grate a small piece of ginger.Blend all the ingredients with a cup of water until smooth, then strain to remove pulp.',
        url:"https://foodviva.com/juice-recipes/carrot-apple-ginger-juice-recipe/"
    };
    recipes[normalizeInput('Pineapple, Apple, and Mint ')] = {
        name: 'Pineapple, Apple, and Mint Juice',
        nutrients: 'Pineapple: Vitamin C, Manganese, Bromelain, FiberApple: Vitamin C, Fiber, Potassium, Vitamin KMint: Vitamin A, Antioxidants, Iron, Manganese',
        process: 'Core and chop the pineapple and apple, and wash a handful of mint leaves.Blend all the ingredients with a cup of water until smooth, then strain to remove pulp.',
        url:"https://www.shutterbean.com/2011/pineapple-apple-mint-juice/"
    };
    recipes[normalizeInput('Apple,Strawberry,Blueberry')] = {
        name: 'Berry Apple Juice',
        nutrients: '',
        process: ''
    };
    recipes[normalizeInput('')] = {
        name: '',
        nutrients: '',
        process: ''
    };
    recipes[normalizeInput('')] = {
        name: '',
        nutrients: '',
        process: ''
    };