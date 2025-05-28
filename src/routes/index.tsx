import { createBrowserRouter } from "react-router";
import Layout from "../components/common/layout";
import Home from "../pages/home";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import NotFound from "../pages/notFound";
import AuthGuard from "../components/AuthGuard";
import Profile from "../pages/profile";
import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    path: routes.home,
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: routes.about, Component: About },
      { path: routes.contact, Component: Contact },
      { path: routes.ayush, Component: Contact },
      { path: "*", Component: NotFound },
      {
        path: routes.profile,
        Component: AuthGuard,
        children: [{ index: true, Component: Profile }],
      },
    ],
  },
]);
