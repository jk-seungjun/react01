import Ingredient from '';

const IngredientsList= ({ingreList}) =>

    <ul className="ingredients">
    { ingreList.map((ingre, i) => 
         <Ingredient key={i} {...ingre} />
    )}
  </ul>

    export default IngredientsList