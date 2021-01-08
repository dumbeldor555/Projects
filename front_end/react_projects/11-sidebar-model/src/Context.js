import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {

  switch(action.type) {
    case 'TOGGLE_CONTENT':
      return{
        ...state,
        showContent: !state.showContent
      }
    case 'TOGGLE_MENU':
      return {
        ...state,
        showMenu: !state.showMenu,
        showHamburger: !state.showHamburger,
        slide: !state.slide,
        initialMenuState: true
      }
  }
}

class Provider extends Component {

  state = {
    centerBtn: 'show model',
    showContent: false,
    showMenu: false,
    menuHeading: 'codding addict', 
    showHamburger: true,
    slide: false,
    initialMenuState: false,
    linkList: [
     {
       linkName: 'home',
       linkLogo: 'logo'
     },
     {
      linkName: 'team',
      linkLogo: 'logo'
    },
    {
      linkName: 'project',
      linkLogo: 'logo'
    },
    {
      linkName: 'celender',
      linkLogo: 'logo'
    },
    {
      linkName: 'document',
      linkLogo: 'logo'
    }
    ],
    socialMediaLink: [
      {
        linkLogo: 'facebook'
      },
      {
       linkLogo: 'twitter'
     },
     {
       linkLogo: 'insta'
     },
     {
       linkLogo: 'linkedin'
     },
     {
       linkLogo: 'github'
     }
     ],
    content: 'this is content',
    dispatch: (action) => {
      this.setState((state) => {
        return reducer(state, action)
      })
    }
  }
  render() {
    return(
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;
export default Provider;
export {Consumer}