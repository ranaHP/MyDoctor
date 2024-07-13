import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error404Page = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred. 1</p>
        <p>
          {/* <i>{error.statusText || error.message}</i> */}
        </p>
      </div>
    );
}

export default Error404Page