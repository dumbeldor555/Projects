import React, {Component} from 'react';


const Context = React.createContext();

const reducer = (state, action) => {

  switch(action.type) {
    case 'DEVELOPER_HOVER_ON': 
    console.log('hovering over dev')
    return {
      ...state,
      showDevelopers: true
    }
    case 'DEVELOPER_HOVER_OFF':
     return {
      ...state,
       showDevelopers: false
     } 
    case 'COMPANY_HOVER_ON':
      console.log('hovering over company')
      return {
        ...state,
        showCompany: true
      }
    case 'COMPANY_HOVER_OFF':
      return {
        ...state,
        showCompany: false
      }
    case 'PRODUCTS_HOVER_ON':
      console.log('hovering over products')
      return {
        ...state,
        showProducts: true
      }   
    case 'PRODUCTS_HOVER_OFF':
      return {
        ...state,
        showProducts: false
      }   
  }
}

class Provider extends Component {

  state = {
    heading: ' Payments infrastructure for the internet',
    about: 'Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.',
    showProducts: false,
    showDevelopers: false,
    showCompany: false,
    currungDeveloperPosition: '23rem',
    currungCompanyPosition: '46rem',
    currungProductPosition: '20rem',
    navBar: {
      products: [
        'payment',
        'terminal',
        'connect',
      ],
      developers: [
        'plugins',
        'libraries',
        'help',
        'billing'
      ],
      company: [
        'about',
        'customer'
      ],
    },
    dispatch: (action) => {
      this.setState((state) => {
        return reducer(state, action);
      })
    }
  }

  render() {
    return(
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const Consumer = Context.Consumer;
export default Provider;
export {Consumer};