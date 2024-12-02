import React, { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import "./index.css"; 
import AppLayout from "./Pages/AppLayout";
import LoginPage from "./Components/Login/LoginPage";
import Cart from './Pages/Cart'
import Reservation from "./Pages/Reservation";
import ErrorPage from "./Pages/ErrorPage";
import { RouterProvider } from "react-router-dom";
import Favorites from "./Pages/Favorites";
import StoreContextProvider from './Components/Context/StoreContext'
import {getFormData} from './Components/ContactPage/ContactForm'
import './media.css'


function App() {
 

  const router=createBrowserRouter([
    { 
      path: "/",
      element: (
        <StoreContextProvider>
          
            <AppLayout /> 
         
        </StoreContextProvider>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/", 
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: getFormData,
      },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/reservation",
          element: <Reservation />,
        }, {
          path: "/login",
          element: <LoginPage />,
        },{
          path:'/favorites',
          element:<Favorites/>
        },{
           path:"/menu/:id",
          element:<Menu />
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;


{/* <BrowserRouter>
<StoreContextProvider>
  {showLogin?<LoginPage setShowLogin={setShowLogin}  />:<></>}
  <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} setShowLogin={setShowLogin} />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/reservation" element={<Reservation />} />
  </Routes>
  <Footer />
  </StoreContextProvider>
</BrowserRouter> */}