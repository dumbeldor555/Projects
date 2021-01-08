import { Link } from 'react-router-dom';
const Cocktail = (props) => {
  const {cocktail, dispatch} = props;
  
  const handleClick = (dispatch, cocktail) => {
    dispatch({type:'DISPLAY_INDIVIDUAL_DRINK', cocktail: cocktail});
  }
  return (
  <div className="individualCocktail">
    <img src={cocktail.strDrinkThumb} alt="" className="cocktailImg"/>
    <p className="DrinkName">{cocktail.strDrink}</p>
    <p className="glassName">{cocktail.strGlass}</p>
    <p className="alcoholic">{cocktail.strAlcoholic}</p>
   <Link to="/cocktail"> <button onClick={handleClick.bind(this, dispatch, cocktail)} className="detailBtn">details</button> </Link>  
  </div>
  )
}

export default Cocktail;