import React from "react";
import { routerType } from "../types/router.types";

//! Main pages:
import Page404 from "../../pages/404Page/error";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import LibraryMain from "../../pages/library/library/LibraryMain";
import Profile from "../../pages/profile/Profile";
import Settings from "../../pages/settings/Settings";
import Signin from "../../pages/sing-in/SingIn";
import Singup from "../../pages/sing-up/SingUp";
import Support from "../../pages/support/Support";
import Contact from "../../pages/contact/Contact";

//? Library sub pages:
import Junior_Academy from "../../pages/library/junior-academy/Academy";
import Senior_Academy from "../../pages/library/senior-academy/Academy";
import Test_Challenges from "../../pages/library/test-challenges/TestChallenges";
import Tips_And_Tricks from "../../pages/library/tips-tricks/TipsTricks";

//* Junior-aca sub pages:
import KidsField from "../../pages/library/junior-academy/kids-field/KidsField";
import StudentField from "../../pages/library/junior-academy/student-field/StudentField";
//* Senior-aca sub pages:
import StarterField from "../../pages/library/senior-academy/starter-field/StarterField";
import IntermediateField from "../../pages/library/senior-academy/intermediate-field/IntermediateField";
import AdvancedField from "../../pages/library/senior-academy/advanced-field/AdvancedField";
//* Test_cahllenges sub pages:
import Challenges from "../../pages/library/test-challenges/challenges/Challenges";
import Problems from "../../pages/library/test-challenges/problems/Problems";
import Projects from "../../pages/library/test-challenges/projects/Projects";
import Quizes from "../../pages/library/test-challenges/quizes/Quizes";
//* Tips-Tricks sub-pages:
//? with DB make this....

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
    path: "/library/junior-academy/kids-field",
    element: <KidsField />,
    title: "Kids Field"
  },
  {
    path: "/library/junior-academy/student-field",
    element: <StudentField />,
    title: "Student Field"
  },
  {
    path: "/library/senior-academy/starter-field",
    element: <StarterField />,
    title: "Starter Field"
  },
  {
    path: "/library/senior-academy/intermediate-field",
    element: <IntermediateField />,
    title: "Intermediate Field"
  },
  {
    path: "/library/senior-academy/advanced-field",
    element: <AdvancedField />,
    title: "Advanced Field"
  },
  {
    path: "/library/test-challenges/challenges",
    element: <Challenges />,
    title: "Challenges"
  },
  {
    path: "/library/test-challenges/problems",
    element: <Problems />,
    title: "Problems"
  },
  {
    path: "/library/test-challenges/projects",
    element: <Projects />,
    title: "Projects"
  },
  {
    path: "/library/test-challenges/quizes",
    element: <Quizes />,
    title: "Quizes"
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
    title: "error"
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
