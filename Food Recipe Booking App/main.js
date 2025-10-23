const API_KEY = "275d58779ccf4e22af03e792e8819fff";
// https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}


const ricpeListEl  = document.getElementById("recipe-list ")


function RecipeDisne(recipes){
    ricpeListEl.innerHTML = "",
    recipes.foreach((recipe) => {
        const ricepeitem = document.createElement("li")
        ricepeitem.classList.add("recipe-item")
        ricepeimage = document.createElement("img")
        ricepeitem.src = recipe.img
        ricepeimage.alt = "recipe image"


        recipeTitleE1 = document.createElement("h2")
        recipeTitleE1.inneText = recipe.title


        recipeIndreent = document.createElement("p")
        recipeIndreent.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients
          .map((ingredient) => ingredient.original)
          .join(", ")}`

           recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerText = "View Recipe";

    ricpeListEl.appendChild(ricepeitem)
    ricpeListEl.appendChild(ricepeimage)
    ricpeListEl.appendChild(recipeTitleE1)
    ricpeListEl.appendChild(recipeIndreent)
    ricpeListEl.appendChild(recipeLinkEl)
    })

}



async function fectApiResult(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data = await response.json()
     return data.recipes
}


fectApiResult()