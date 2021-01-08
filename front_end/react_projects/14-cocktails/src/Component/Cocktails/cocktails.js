import Cocktail from './cocktail';
import NotFound from '../layout/not-found';
const Cocktails = (props) => {
const {data, dispatch} = props;
// console.log(data);
if(data) {
  return (
    <div className="CocktailContaier">
      {data.map((cocktail, index) => {
        return(
          <Cocktail dispatch={dispatch} key={index} cocktail={cocktail}/>
        )
      })}
    </div>
  )
} else {
  return(
    
    <NotFound />
  )
}
}

export default Cocktails;