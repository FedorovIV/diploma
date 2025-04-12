import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import Index from "./pages/Index/Index.tsx";
import Root from "./routes/Root.tsx";
import TestPage from "./pages/Test/TestPage.tsx";
import UserPage from "./pages/UserPage/UserPage.tsx";
import { store } from "./shared/stores/store.ts";
import WatchVideoPage from "./pages/WatchVideo/WatchVideoPage.tsx";
import LogIn from "./pages/LogIn/LogIn.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import SecurityAccess, {
  AccessType,
} from "./features/SecurityAccess/SecurityAccess.tsx";
import EditVideo from "./pages/EditVideo/EditVideo.tsx";
import Categories from "./pages/Categories/Categories.tsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route
          index
          element={
            <SecurityAccess
              accessType={AccessType.UNNECESSATY_AUTH}
              child={<Index />}
            />
          }
        />
        <Route
          path="test"
          element={
            <SecurityAccess
              accessType={AccessType.UNNECESSATY_AUTH}
              child={<TestPage />}
            />
          }
        />
        <Route
          path="personalAccount"
          element={
            <SecurityAccess
              accessType={AccessType.NEED_AUTH}
              child={<UserPage />}
            />
          }
        />
        <Route
          path="video/:videoId"
          element={
            <SecurityAccess
              accessType={AccessType.UNNECESSATY_AUTH}
              child={<WatchVideoPage />}
            />
          }
        />
        <Route
          path="edit/:videoId"
          element={
            <SecurityAccess
              accessType={AccessType.ADMIN}
              child={<EditVideo />}
            />
          }
        />
        <Route
          path="logIn"
          element={
            <SecurityAccess accessType={AccessType.NO_AUTH} child={<LogIn />} />
          }
        />

        <Route
          path="signUp"
          element={
            <SecurityAccess
              accessType={AccessType.NO_AUTH}
              child={<SignUp />}
            />
          }
        />

        <Route
          path="categories"
          element={
            <SecurityAccess
              accessType={AccessType.UNNECESSATY_AUTH}
              child={<Categories />}
            />
          }
        />

        <Route
          path="category/:categoryName"
          element={
            <SecurityAccess
              accessType={AccessType.UNNECESSATY_AUTH}
              child={<CategoryPage />}
            />
          }
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
