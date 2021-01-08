import React from 'react';
const Heading = (props) => {

  const {heading, about} = props;

  return(
    <React.Fragment>
      <div className="headingContainer">
      <h1 className="heading">{heading}</h1>
      <p className="about">{about}</p>
      </div>
    </React.Fragment>
  )
}

export default Heading;