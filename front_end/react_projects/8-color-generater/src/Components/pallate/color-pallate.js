import React, { Component } from 'react';
import {Consumer} from '../../Context';
import rgbToHex from '../../utilities/utility';

class ColorPallate extends Component {
  
  copyColor = (color, index) => {
    navigator.clipboard.writeText(color);
   
    const span = document.querySelector(`.key-${index}`);
    const checker = span.lastChild;
    // console.log(checker);
    if(checker.data !== '    COPIED TO CLIPBOARD') {
      span.append('    COPIED TO CLIPBOARD');
    }

    setTimeout(() => {

       if(span.lastChild.data === '    COPIED TO CLIPBOARD') {
         span.lastChild.remove();
       }
    }, 2000);

  }

  render() {
    return(
     <React.Fragment>
       <Consumer>
         {value => {
           const {colors} = value;
           const {count} = value;
           return(
            <div className="colorContainer">
              {colors.map((color, index) => {
                const background = color.rgb.join(',');
                const hex  = rgbToHex(...(color.rgb));
                if(color.type === 'tint') {
                  return(
                    <span key={index} onClick={this.copyColor.bind(this, hex, index)} style={{background:`rgb(${background})`, color:'black'}} className={`indiColor key-${index}`}>
                      {color.weight}% <br/>
                      {hex} 
                    </span>
                  )
                } else if(color.type === 'shade') {
                  return(
                    <span key={index} onClick={this.copyColor.bind(this, hex, index)} style={{background:`rgb(${background})`, color:'white'}} className={`indiColor key-${index}`}>
                      {color.weight}% <br/>
                      {hex}
                    </span>
                  )
                }else {
                  return(
                    <span key={index} onClick={this.copyColor.bind(this, hex, index)} style={{background:`rgb(${background})`, color:'blue'}} className={`indiColor key-${index}`}>
                      {color.weight}% <br/>
                      {hex} 
                    </span>
                  )
                }
              })}
            </div>
            );
         }}
       </Consumer>
     </React.Fragment>
    )
  }
}

export default ColorPallate;