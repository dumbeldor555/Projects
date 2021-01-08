import React from 'react';

const Loading = (props) => {
  
  const waitingMsg = props.waitingMsg;
  return(
  <h1 className="loading">
   {waitingMsg}...
  </h1>
  );
}

export default Loading;