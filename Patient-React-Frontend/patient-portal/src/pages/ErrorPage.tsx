import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">RETURN HOME</Link>
    </div>
  );
}

export default ErrorPage