import Home from "../containers/Home";
import About from "../containers/About";
import Projects from "../containers/Projects";
import Stack from "../containers/Stack";
import Logo from "../components/Logo/Logo";

const routesConfig = [
  { path: "/", element: <Home />, name: "Home" },
  { path: "/about", element: <About />, name: "About" },
  { path: "/projects", element: <Projects />, name: "Projects" },
  { path: "/stack", element: <Stack />, name: "Stack" },
];
export default routesConfig;
