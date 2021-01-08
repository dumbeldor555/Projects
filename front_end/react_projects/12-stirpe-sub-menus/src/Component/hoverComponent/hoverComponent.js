
import handleClick from '../../utilites/hoverCondition';

const Developer = (props) => {

  const {linkList, dispatch, curruntPosition} = props;

  return(  
    <div style={{left: curruntPosition}} onMouseLeave={handleClick.bind(this, dispatch, 'developerLeave')} onMouseEnter={handleClick.bind(this, dispatch, 'developers')} className="LinkContainer">
      <p style={{width: linkList.length*150 + 'px'}} className="hoverComponentHeading">developers</p>
      <ul className="linkList">
        {linkList.map((link, index) => {  
          return(
            <li key={index} className="individualLink"> 
              <span className="Linklogo">logo</span> {link}  
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const Company = (props) => {

  const {linkList, dispatch, curruntPosition} = props;

  return(
    <div style={{left: curruntPosition}} onMouseLeave={
      (e) => {
        handleClick.bind(this, dispatch, 'companyLeave', e);
      }
    } onMouseEnter={handleClick.bind(this, dispatch, 'company')} className="LinkContainer">
    <p style={{width: linkList.length*150 + 'px'}} className="hoverComponentHeading">Company</p>

    <ul className="linkList">
      {linkList.map((link,index) => {
        return(
          <li  key={index} className="individualLink">
            <span className="Linklogo">logo</span> {link}
          </li>
        )
      })}
    </ul>
  </div>
  )
}

const Products = (props) => {

  const {linkList, dispatch, curruntPosition} = props;

  return(
    <div style={{left: curruntPosition}} onMouseLeave={handleClick.bind(this, dispatch, 'productsLeave')} onMouseEnter={handleClick.bind(this, dispatch, 'products')} className="LinkContainer">

    <p style={{width: linkList.length*150 + 'px'}} className="hoverComponentHeading">Products</p>
    <ul className="linkList">
      {linkList.map((link,index) => {
        return(
          <li  key={index} className="individualLink">
            <span className="Linklogo">logo</span> {link}
          </li>
        )
      })}
    </ul>
  </div>  );
}

export {Developer, Company, Products}; 
// export default Company; 
// export default Products; 