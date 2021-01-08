const handleClick = (dispatch, hoverItem, e) => {

  switch(hoverItem) {  
    case 'products':
    dispatch({type: 'PRODUCTS_HOVER_ON'});
    break;
    case 'developers':
      dispatch({type: 'DEVELOPER_HOVER_ON'});
    break;
    case 'company':
      dispatch({type: 'COMPANY_HOVER_ON'});
    break;
    case 'productsLeave':
      dispatch({type: 'PRODUCTS_HOVER_OFF'});
    break;
    case 'developerLeave':
      dispatch({type: 'DEVELOPER_HOVER_OFF'});
    break;
    case 'companyLeave':
      dispatch({type: 'COMPANY_HOVER_OFF'});
    break;
    default :
      dispatch({type: 'NO_CONDITION'});
  }
}

export default handleClick;