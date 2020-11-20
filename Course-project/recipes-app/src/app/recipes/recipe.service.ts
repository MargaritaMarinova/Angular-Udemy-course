import {Recipe} from './recipe.model'

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is simply a test",
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2020-02-Kielbasa-and-Cabbage-Skillet%2Fkielbasa2"
    ),
    new Recipe(
      "Another test recipe",
      "This is simply a test",
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2020-02-Kielbasa-and-Cabbage-Skillet%2Fkielbasa2"
    ),
  ];

  getRecipes() {
      return this.recipes.slice();
  }
}
