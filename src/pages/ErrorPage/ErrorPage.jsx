import { useRouteError } from "react-router-dom";
import c from "./ErrorPage.module.css";
import logo from "../../app/img/Error/error.jpg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className={c.page}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src={logo} />
    </div>
  );
}
