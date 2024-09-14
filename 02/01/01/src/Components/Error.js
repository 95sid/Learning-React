import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    return (
        <div className="Error">
            <h1> OOPS !!</h1>
            <h2> Somthing Went wrong !! </h2>
            <h2> {err.status + ":" + err.statusText}</h2>
        </div>
    )
}

export default Error;