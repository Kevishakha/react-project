import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import { useState } from 'react';
import LoginPage from '../Components/Login/LoginPage';

function AppLayout() {
    const navigation= useNavigation();
    console.log(navigation);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showLogin,setShowLogin] =useState(false)
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        document.body.className = isDarkMode ? "light-mode" : "dark-mode"; 
      };

    if(navigation.state==='loading') return <h1 className='h-72 w-full text-center bg-red'>Loading Now</h1>;
  
  return (
   <>  
     <Navbar
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        setShowLogin={setShowLogin}
      />
      {showLogin ? (
        <LoginPage setShowLogin={setShowLogin} />
      ) : (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </>

  )
}

export default AppLayout;