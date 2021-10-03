// const personalDetails = [false, 28, "Urecht, 01-01-1990"];



// const ingredients = ["Geraspte kaas", "Spinazie", "Knoflook", "Olijfolie", "Lasagne bladeren"];

// console.log(ingredients);
//
// console.log(ingredients[3]);
//
// const step1 = "Doe een beetje " + ingredients[3] + " in de pan.";

// console.log(step1);

// ingredients[4] = "Volkoren lasagebladen";
//
// console.log(ingredients);
//
// const ingredientsLength = ingredients.length;
//
// console.log(ingredientsLength);
//
//
//
//
//
// const lastIndex = ingredients.length - 1;
// console.log(lastIndex);
// console.log(ingredients[lastIndex]);

//
// let lasagneIngredients = ["Geraspte kaas", "Spinazie", "Knoflook", "Olijfolie", "Lasage bladen", "Ui"];
//
// console.log(lasagneIngredients[5]);
//
//
// lasagneIngredients [0] = "Corona kaas";
// console.log(lasagneIngredients);
//
//
// const step1 = "Doe een beetje " + lasagneIngredients[0] + " bij";
// console.log(step1);
//
// const ingredientsLength = lasagneIngredients.length;
// console.log(ingredientsLength -2);
//
// lasagneIngredients [3] = "Kokos olie";
// console.log(lasagneIngredients);


const recipe = {
    name: "spinazie lasage",
    cookingTime: 45,
    'is-gluten-free': false,
    // printInfo: () => {console.log("Dit recept is niet glutenvrij.")}
    ingredients: ["Spinazie", "Kaas", "Lasagne bladen"],
    nutritionInfo: {
        natrium: 34,
        calories: 670,
        // printInfo: () => {
        //     console.log("dit recept is niet glutenvrij.")
        // }
    },
}

console.log(recipe.nutritionInfo);

//
// if (recipe['isGlutenFree']) {
//     console.log('Bevat geen gluten!');
// }
//
// for (let i = 0; i < recipe.ingredients.length; i++) {
//     console.log(recipe.ingredients[i]);
// }



// const key = "name";
//
// const person = {
//     name: "Piet",
// }
//
// console.log(person[key]);
//






// console.log(recipe.nutritionInfo);

// recipe.nutritionInfo.calories = 900;
// recipe.nutritionInfo["calories"] = 1000;

// console.log(recipe.nutritionInfo);


// const objectKey = "name";
// console.log(recipe.objectKey);


// console.log(recipe.name);


// console.log(recipe["cookingTime"]);


// console.log(recipe['is-gluten-free']);

// const amountOfDough = recipe.ingredients[2];
// console.log(amountOfDough);

//
// const amountOfCalories = recipe.nutritionInfo.calories + "kCal";
// console.log(amountOfCalories);

// console.log(recipe.nutritionInfo.calories);