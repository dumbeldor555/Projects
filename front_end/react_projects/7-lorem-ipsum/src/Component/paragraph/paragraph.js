import React, {Component} from 'react';
import {Consumer} from '../../Context';

class Paragraph extends Component {

  render() {
    return(
     <React.Fragment>
       <Consumer>
         {value => {
         const  {curruntNumberOfPara, paragraphs} = value;
         let k = 0;
           return (
             <React.Fragment>
               {
                paragraphs.map((text, index) => {
                  if(curruntNumberOfPara > index) {
                    return(
                      <p className="paragraph">
                        {text}
                      </p>
                    );
                  }
                })
               }
             </React.Fragment>
           )
         }
         }
       </Consumer>
     </React.Fragment>
    )
  }
}

export default Paragraph;

// () => {
//   //  k is responsible for paragraph array's index and i is responsible for looping until given parameter
//    let k = 0;
//    if(curruntNumberOfPara !== 0) { 
//     for(let i = 0; i< curruntNumberOfPara; i++) {

//       <p className="paragraph">{Paragraph[k]}</p>
//       k++;
//       if(k === Paragraph.length - 1) {
//         k = 0;
//       }
//     } 
//    } else {
//       // do nothing 
//   }
//  }