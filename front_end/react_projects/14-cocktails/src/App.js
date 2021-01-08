import './MannualCss/style.css';
import React from 'react';
import Provider from './Context';
import {Consumer} from './Context';
// here import mannual component 
import NavBar from './Component/layout/navBar';
import SearchBar from './Component/layout/searchBar';
import About from './Component/layout/about';
import Cocktails from './Component/Cocktails/cocktails';
import IndividualCocktail from './Component/Cocktails/individualCocktail';  
import CocktailHeading from './Component/Cocktails/cocktailHeading';
import Loading from './Component/layout/loading';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import NotFoundError from './Component/layout/notFound';

function App() {



  return (
        <Provider>
          <Consumer>
            {value => {
              const {
                navHeading, 
                searchBarHeading,
                showSearchBar, 
                url,
                about, 
                dispatch, 
                aboutHeading,
                defaultQuerry,
                cocktailHeading,
                showCocktails,
                clickedCocktail,
                isLoading,
                data, 
              } = value;
              // console.log(data);
              return(
                <React.Fragment>
                  <Router>
                  <NavBar dispatch={dispatch} logo={navHeading} />
                    <Switch> 
                        <Route exact path="/" use="strict" render={() => {
                          return(
                           <React.Fragment>
                             {/* here return home  */}
                              {showSearchBar && <SearchBar defaultQuerry={defaultQuerry} url={url} dispatch={dispatch} heading={searchBarHeading} />}
                              {showCocktails && data && <CocktailHeading heading={cocktailHeading} />}
                              {isLoading && <Loading />}  
                              {showCocktails && data && <Cocktails dispatch={dispatch} data={data.drinks}  /> }
                              {}
                           </React.Fragment>
                          )
                        }} 
                        />
                        <Route exact path="/about" use="strict" render={() => {
                          return (
                            <About heading={aboutHeading} about={about} />
                        );
                        }}
                        />
                        <Route exact path="/cocktail" use="strict" render={() => {
                          return(
                            <IndividualCocktail cocktail={clickedCocktail}/>
                          )
                        }
                      } 
                        />
                    </Switch> 
                  </Router>
                </React.Fragment>
              )
            }}
          </Consumer>
        </Provider>
  );
}

export default App;


//  {/* here return home  */}
                              // <NavBar dispatch={dispatch} logo={navHeading} />
                              // {showSearchBar && <SearchBar heading={searchBarHeading} />}
                              // {isLoading && <Loading />}  
                              // {showAbout && <About heading={aboutHeading} about={about} />}  
                              // {showCocktails && data && <CocktailHeading heading={cocktailHeading} />}
                              // {showCocktails && data && <Cocktails dispatch={dispatch} data={data.drinks} />}

   


  