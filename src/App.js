import { ApolloProvider } from "@apollo/client";
import "./App.css";
import { Services } from "./Entities/Services";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Result from "./pages/result";
import About from "./pages/toolkit/About";
import Material from "./pages/toolkit/Material";
import Video from "./pages/toolkit/Video";
import GettingStarted from "./pages/toolkit/GettingStarted";
import Details from "./pages/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/results",
    element: <Result />,
  },
  {
    path: "/details/:index/:id",
    element: <Details />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/material",
    element: <Material />,
  },
  {
    path: "/video",
    element: <Video />,
  },
  {
    path: "/gettingStarted",
    element: <GettingStarted />,
  },
]);

function App() {
  return (
    <ApolloProvider client={Services.client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
