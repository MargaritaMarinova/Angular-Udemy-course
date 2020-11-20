import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "A super tasty Schnitzel - just awesome!",
      "https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5-500x500.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French fries", 20)]
    ),
    new Recipe(
      "Big fat Burger",
      "What else you need to say?",
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Scrum-Delicious-Burgers_EXPS_CHMZ19_824_B10_30_2b.jpg",
      [
        new Ingredient("Bread", 1),
        new Ingredient("Tomatoes", 3),
        new Ingredient("Meat", 2),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
