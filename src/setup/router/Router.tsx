import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import pagesData from "./pagesData";
import Layout from "../../components/Layout/Layout";

// This functional component defines a React Router that maps the URLs of the application
// to the appropriate components based on page data. It iterates over an array of page data
// objects and returns a new array of Route components, each with a unique key, path, and
// element prop. The Routes component wraps the array of Route components and returns the router.

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <Routes>
      <Route element={<Layout />}>{pageRoutes}</Route>
    </Routes>
  );
};

export default Router;
