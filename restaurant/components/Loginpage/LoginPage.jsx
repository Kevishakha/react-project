import React, { useState } from "react";
import { Icon } from "../../assets/assests";
import "./login.css";

function LoginPage({ setShowLogin }) {
  const [login, setLogin] = useState("Log In");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

 
  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    console.log(formData);

    
    if (login === "Sign Up") {
      if (formData.termsAccepted) {
        alert("Form submitted successfully");
      } else {
        alert("Please accept the terms and conditions");
      }
    } else if (login === "Log In") {
      
    }
  };

  return (
    <>
      <div className="formLogin ">
        <form onSubmit={handleFormSubmit} className="loginform xl:w-[30vw] lg:w-[45vw]  md:w-[60vw] sm:w-[70vw] xs:w-[80vw] " >
          <div onClick={() => setShowLogin(false)} className="closePage">
            {Icon.loginpageClose}
            <div className="tooltiptxt">Close The form</div>
          </div>
          <h2 className="text-3xl font-bold text-center p-4 ">{login}</h2>

          {login === "Log In" ? (
            <></>
          ) : (
            <div className="form-group">
             
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInput}
                required
                
              />
            </div>
          )}

          <div className="form-group">
            
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            
            <input
              type="password"
              name="password"
              placeholder="Enter the password"
              value={formData.password}
              onChange={handleInput}
              required
            />
          </div>

          {login === "Sign Up" && (
            <div className="flex justify-start items-center h-[10vh] w-[100%] gap-4 p-[2.5vh]">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInput}
              />
              <p className="text-[16px]">
                Accepted the{" "}
                <a href="#" className="termslink">
                  Terms and Conditions
                </a>
              </p>
            </div>
          )}

          <button className="accoutBtn">
            {login === "Log In" ? "Login" : "Create Account"}
          </button>

          <div className="form-group">
            <p>
              {login === "Log In"
                ? "Have no account?"
                : "Already have an account?"}
              <a
                className="signuplink"
                href="#"
                onClick={() => {
                  setLogin(login === "Log In" ? "Sign Up" : "Log In");
                }}
              >
                {login === "Log In" ? "Create Account" : "Login here "}
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
