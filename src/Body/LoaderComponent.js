import React from 'react';
import '../styles/Loader.scss';

const LoaderComponent = () => {
  return (
    <div className="loader_wrapper">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>Please wait, loading data ...</div>
    </div>
  );
};
export default LoaderComponent;
