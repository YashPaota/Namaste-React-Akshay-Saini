import { useRouteError } from "react-router-dom"; //More better way of displaying errpr/
//Hook given to us by react router dom library.

const Error = () => {

    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>Error</h1>
        <h2>Oops!!!! Something went wrong!!</h2>
    </div>
  )
}

export default Error