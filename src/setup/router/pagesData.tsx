import React from "react";
import { routerType } from "../types/router.types";
import Page404 from "../../pages/404Page/Page404";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import LibraryMain from "../../pages/library/library/LibraryMain";
import Junior_Academy from "../../pages/library/junior-academy/Academy";
import Senior_Academy from "../../pages/library/senior-academy/Academy";
import Test_Challenges from "../../pages/library/test-challenges/TestChallenges";
import Tips_And_Tricks from "../../pages/library/tips-tricks/TipsTricks";
import Profile from "../../pages/profile/Profile";
import Settings from "../../pages/settings/Settings";
import Signin from "../../pages/sing-in/SingIn";
import Singup from "../../pages/sing-up/SingUp";
import Support from "../../pages/support/Support";
import Contact from "../../pages/contact/Contact";

const PagesData: routerType[] = [
  {
    path: "/",
    element: <Home />,
    title: "Home"
  },
  {
    path: "/about",
    element: <About />,
    title: "About"
  },
  {
    path: "/library",
    element: <LibraryMain />,
    title: "Library"
  },
  {
    path: "/library/junior-academy",
    element: <Junior_Academy />,
    title: "Junior Academy"
  },
  {
    path: "/library/senior-academy",
    element: <Senior_Academy />,
    title: "Senior Academy"
  },
  {
    path: "/library/test-challenges",
    element: <Test_Challenges />,
    title: "Test Challenges"
  },
  {
    path: "/library/tips-tricks",
    element: <Tips_And_Tricks />,
    title: "Tips And Tricks"
  },
  {
    path: "/profile",
    element: <Profile />,
    title: "Profile"
  },
  {
    path: "/settings",
    element: <Settings />,
    title: "Settings"
  },
  {
    path: "/signin",
    element: <Signin />,
    title: "Signin"
  },
  {
    path: "/singup",
    element: <Singup />,
    title: "Singup"
  },
  {
    path: "*",
    element: <Page404 />,
    title: "Page404"
  },
  {
    path: "/support",
    element: <Support />,
    title: "Support"
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "Contact"
  }
];

export default PagesData;
