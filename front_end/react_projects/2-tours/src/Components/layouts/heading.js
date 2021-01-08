import React from 'react';

const Heading = (props) => {

const {heading} = props;
  return(
  <h2 className="heading">{heading}</h2>
  );
}

export default Heading;