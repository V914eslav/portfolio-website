import Home from "../containers/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
import ErrorMessage from "../components/ErrorMessage";
import Contacts from "../components/Contacts";
import Reviews from "../components/Reviews";

const routesConfig = [
  { path: "/", element: <Home />, name: "Home" },
  { path: "/about", element: <About />, name: "About" },
  { path: "/projects", element: <Projects />, name: "Projects" },
  { path: "/stack", element: <Stack />, name: "Stack" },
  { path: "/contacts", element: <Contacts />, name: "Contacts" },
  { path: "/reviews", element: <Reviews />, name: "Reviews" },
  { path: "*", element: <ErrorMessage />, name: "ErrorMessage" },
];
export default routesConfig;
