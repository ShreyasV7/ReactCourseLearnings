import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
    let error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Something went wrong !!!</h1>
            <h2>Please try again later</h2>
            <h3>
                {error.status}:{error.statusText}
            </h3>
        </div>
    );
};

export default Error;
