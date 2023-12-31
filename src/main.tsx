import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "./pages/Profile.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { CookiesProvider } from "react-cookie";
import ItemDetails from "./pages/ItemDetails.tsx";
import Items from "./pages/Items.tsx";
import Boxes from "./pages/Boxes.tsx";
import NotFound from "./pages/NotFound.tsx";
import BoxDetails from "./pages/BoxDetails.tsx";
import AuthWrapper from "./components/auth/AuthWrapper.tsx";
import Login from "./pages/Login.tsx";

const authLink = setContext(async (_, { headers }) => {
  let token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token
        ? `${token}`
        : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbGs1OHFvNGYwMDAwdGtvZGJub2s0bHE4IiwiaWF0IjoxNjkwNDAwMDM0LCJleHAiOjE2OTA0ODY0MzR9.CLQZIIvs1Xqrs8_fknSFPWM10eIh53Xhvby-Bc5L89s",
    },
  };
});

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_APP_GRAPHQL_ENDPOINT || "http://localhost:4000",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  credentials: "include",
});

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/profile",
    element: (
      <>
        <AuthWrapper>
          <Profile />
        </AuthWrapper>
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <AuthWrapper>
          <Dashboard />
        </AuthWrapper>
      </>
    ),
  },
  {
    path: "/item/:id",
    element: (
      <>
        <AuthWrapper>
          <ItemDetails />
        </AuthWrapper>
      </>
    ),
  },
  {
    path: "/items",
    element: (
      <>
        <AuthWrapper>
          <Items />
        </AuthWrapper>
      </>
    ),
  },
  {
    path: "/boxes",
    element: (
      <>
        <AuthWrapper>
          <Boxes />
        </AuthWrapper>
      </>
    ),
  },
  {
    path: "/boxes/:id",
    element: (
      <>
        <AuthWrapper>
          <BoxDetails />
        </AuthWrapper>
      </>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </CookiesProvider>
  </React.StrictMode>,
);
