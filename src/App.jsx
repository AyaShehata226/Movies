import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import React from "react";
import Login from "./pages/formLogin/login";
import SingUpForm from "./pages/singupForm/SingUpForm";
import NavbarFun from "./components/Navbar/Navbar";
import Home, { loader as moviesLoader } from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Favorites from "./pages/favorites/favorites";
import Details from "./pages/Movies/Details";
import NotFound from "./pages/not-Found/not-Found";
import AppLayout from "./components/appLayout/appLayout";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { LanguageProvider } from "./contexts/language";
import { useState } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "Movies", element: <Movies /> },
      { path: "Favorites", element: <Favorites /> },
      { path: "Favorites_datalis/:id", element: <Details /> },
      { path: "Login", element: <Login /> },
      { path: "SingUp", element: <SingUpForm /> },
      { path: "/details/:id", element: <Details /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
const App = () => {
  const [lang , setLang]=useState("en");

  return (
    //old Way For Routing
    // <>
    //   <BrowserRouter>
    //   <NavbarFun/>
    //   <Routes>
    //   <Route index element={<Home/>} loader={moviesLoader} />
    //   <Route path="/Movies" element={<Movies />}/>
    //   <Route path="/Favorites" element={<Favorites />}/>
    //   <Route path="/login" element={<Login />}/>
    //   <Route path="/singUp" element={<SingUpForm />}/>
    //   <Route path="/details/:id" element={<Details/>}/>
    //   </Routes>
    //   </BrowserRouter>
    // </>

<LanguageProvider value={{lang , setLang}}>
<Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
</LanguageProvider>
    
  );
};

export default App;
