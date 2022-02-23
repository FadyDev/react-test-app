import React from 'react';
import './LoadSpinner.css';

const LoadSpinner = () => (
  <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
);

export default LoadSpinner;

//The Load Spinner implementation source can be found here: https://github.com/robotspacefish/loadspinner-example