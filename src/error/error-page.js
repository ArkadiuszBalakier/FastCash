import { useRouteError } from "react-router-dom";

import classes from "./error-page.module.css"

function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error-page" className={classes.error}>
            <h1>Upssss !!!</h1>
            <p>Przepraszamy , coś poszło nie tak 😔</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
export default ErrorPage;