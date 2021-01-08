import { Link } from 'react-router-dom';

const IndividualCocktail = (props) => {
const   {cocktail} = props;
  return(
    <div className="singleCocktailContainer" > 
      <img src={cocktail.strDrinkThumb} className="singleCocktailImage" />
      <div className="singleCocktailDetails"> 
        <Link to="/"> <button className="GoBackHome"> Back Home </button> </Link>
        <p className="individualDrinkName">{cocktail.strDrink}</p>
        <div className="glassDetails">
          <p className="name"> <span className="detailDec">Name :</span> {cocktail.strDrink}</p>
          <p className="category"> <span className="detailDec">Category :</span> {cocktail.strCategory}</p>
          <p className="info"> <span className="detailDec">Info :</span> {cocktail.strAlcoholic}</p>
          <p className="glass"> <span className="detailDec">Glass :</span> {cocktail.strGlass}</p>
          <p className="instructions"> <span className="detailDec">Instruction :</span> <span className="wrapText"> {cocktail.strInstructions}</span> </p>
          <p className="ingridients">
            <span className="detailDec">Ingreidents :</span>  ingreidents
          </p>  
        </div>
      </div>
    </div>
  )
}

export default IndividualCocktail;